'use client'
import { IoAddCircle } from "react-icons/io5";
import Image from 'next/image';
import useFetch1 from "@/lib/useFetch1";
import { useState } from "react";
import Loader from "@/Components/UI/Loader/Loader";
import Card from "@/Components/common/Card/Card";
import BlogCard from "@/Components/common/Card/BlogCard";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store";
import { deleteService } from "@/Redux/ReduxFunctions";
import ShowToastify from "@/utils/ShowToastify";
import Swal from 'sweetalert2'
import { ToastContainer } from "react-toastify";



export default function Page() {

  const [buttonID, setButtonID] = useState<number>(1);
  const { data, isLoading } = useFetch1('category');
  const [category, setCategory] = useState<string>('673bfd9b4e0582c597050ff8');
  const { data: serviceData, isLoading: serviceLoader,refetch } = useFetch1("service", `search=${category}`);
  const dispatch = useDispatch<AppDispatch>()

  interface Category {
    categoryName: string;
    id: string;
    imageUrl: string;
  }

  interface CategoryList {
    id: string;
    categoryId: string;
    description: string;
    userAvatar: string;
    name: string;
    image: string;
  }

  const handleService = (idx: number, id: string) => {
    setCategory(id);
    setButtonID(idx + 1);
  };


  const handleDelete = (e: string) => {
    console.log(e);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(() => {
      dispatch(deleteService(e))
        .then((res) => {
          console.log(res);
          refetch()
          if (res.payload) {
            Swal.fire({
              title: "Deleted!",
              text: "Your service has been deleted.",
              icon: "success"
            });
            return
          }
          if ('error' in res && res.error) {
            ShowToastify({ error: "your service has not been deleted" })
          }
        });
    });

  }


  return (
    <div className="min-h-screen flex items-center justify-center pt-8 pb-32">
      <div className="w-full">
        <div className="max-w-[1250px] mx-auto lg:px-7 md:px-5 px-3">
          <div className="flex items-center justify-between">
            <h1 className={`text-[40px] font-bold`}>
              All your <span className="text-primary font-po">listed services</span>
            </h1>
            <Link href='/dashboard/featuresServices/addService' className="btn rounded-[24px] px-7 py-2 border bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] text-white flex items-center gap-3 text-lg">
              <IoAddCircle className="text-2xl" />
              Add Service
            </Link>
          </div>
          <hr className="w-full border border-gray-300 mt-6 mb-10" />

          <div id="creative-data" className="flex flex-col items-center">
            <div className="flex lg:justify-start justify-center gap-10 flex-wrap">
              {isLoading ? (
                <p className="w-full flex justify-center">Loading...</p>
              ) : (
                data?.result?.map((e: Category, idx: number) => {
                  return (
                    <div
                      key={idx}
                      onClick={() => handleService(idx, e?.id)}
                      className={
                        buttonID === idx + 1
                          ? "border rounded-xl flex py-3 px-4 gap-3 border-[#B564F7] text-[#B564F7]"
                          : "border border-[#98A2B3] rounded-xl flex py-3 px-4 gap-3"
                      }
                    >
                      <Image
                        width={30}
                        height={5}
                        src={e.imageUrl}
                        alt={e.categoryName}
                      />
                      <button className="lg:text-lg">{e.categoryName}</button>
                    </div>
                  );
                })
              )}
            </div>

            <div className=" pt-[32px] flex flex-wrap lg:justify-start justify-center gap-3 w-full">
              {serviceLoader ? (
                <div className="w-full flex items-center  justify-center min-h-[200px] col-span-4">
                  <Loader />
                </div>
              ) : serviceData?.result?.result?.length > 0 ? (
                serviceData?.result?.result?.map((e: CategoryList, idx: number) => {
                  if (e.categoryId === "673bfe0d4e0582c597050ffc") {
                    return <BlogCard key={idx} e={e} />;
                  } else {
                    return <Card key={idx} handleDelete={handleDelete} e={e} />;
                  }
                })
              ) : (
                <p className="w-full flex justify-center text-lg">
                  No desired services found
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>

  );
}
