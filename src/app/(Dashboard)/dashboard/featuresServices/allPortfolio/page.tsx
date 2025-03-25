'use client'
import { IoAddCircle } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import useFetch1 from "@/lib/useFetch1";
import Image from "next/image";
import Loader from "@/Components/UI/Loader/Loader";
import Card from "@/Components/common/Card/Card";
import success from '@/assets/images/social-success.png';
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store";
import { deletePortfolio } from "@/Redux/ReduxFunctions";
import ShowToastify from "@/utils/ShowToastify";



export default function Page() {
  const { data, isLoading, refetch } = useFetch1("portfolio")
  const [focusButton, setFocusButton] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>()


  const sortData = data && data?.result.filter((e : {protfolioType : string})=> e.protfolioType == data?.result[focusButton-1].protfolioType)
  const buttons = [... new Set(data && data?.result?.map((e : {protfolioType : string})=> e.protfolioType))]

  console.log(buttons);

  const handleDelete = (e : string)=>{
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
      dispatch(deletePortfolio(e))
        .then((res) => {
          console.log(res);
          refetch()
          if (res.payload) {
            Swal.fire({
              title: "Deleted!",
              text: "your portfolio has not been deleted",
              icon: "success"
            });
            return
          }
          if ('error' in res && res.error) {
            ShowToastify({ error: "your portfolio has not been deleted" })
          }
        });
    });
    
  }


  return (
    <div className="min-h-screen flex items-center justify-center pt-8 pb-32">
      <div className="w-full">
        <div className="max-w-[1400px] mx-auto lg:px-0 px-5">
          <div className="flex items-center justify-between">
            <h1 className={`text-[40px] font-bold`}>
              All listed <span className="text-primary font-po">Social media success</span>
            </h1>
            <Link href='/dashboard/featuresServices/allPortfolio/addPortfolio' className="btn rounded-[24px] px-7 py-2 border bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] text-white flex items-center gap-3 text-lg">
              <IoAddCircle className="text-2xl" />
              Add New
            </Link>
          </div>
          <hr className="w-full border border-gray-300 mt-6 mb-10" />

          {/* <div id="creative-data" className="flex flex-col items-center">
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
      
              <div className="grid lg:grid-cols-4 grid-cols-1 pt-[32px] md:grid-cols-2 gap-3 w-full">
                {serviceLoader ? (
                  <div className="w-full flex items-center justify-center min-h-[200px] col-span-4">
                    <Loader />
                  </div>
                ) : serviceData?.result?.result?.length > 0 ? (
                  serviceData?.result?.result?.map((e: CategoryList, idx: number) => {
                    if (e.categoryId === "673bfe0d4e0582c597050ffc") {
                      return <BlogCard key={idx} e={e} />;
                    } else {
                      return <Card key={idx} e={e} />;
                    }
                  })
                ) : (
                  <p className="w-full flex justify-center text-lg">
                    No desired services found
                  </p>
                )}
              </div>
            </div> */}
          {/* <SocialMediaSuccess/> */}
          <div className="container lg:px-28 md:px-12 px-5">
            <h1 className="md:text-5xl text-3xl poppins-bold w-fit mx-auto flex flex-wrap justify-center gap-5">
              Showcasing{' '}
              <Image className="my-auto" width={160} src={success} alt="page" /> Our{' '}
              <span className="text-primary">Social Media</span> Success
            </h1>
            <hr className="w-full mt-6 mb-10 border bg-gray-200" />
            <div
              id="buttons"
              className="flex lg:justify-start flex-wrap md:justify-start md:flex-row flex-col gap-5"
            >
              {
                isLoading ?
                  <Loader></Loader>
                  :
                  buttons && buttons?.map((e : any, idx : number) => (
                    <div
                      key={idx}
                      onClick={() => setFocusButton(idx + 1)}
                      className={
                        focusButton === idx + 1
                          ? 'border rounded-xl flex py-2 px-8 gap-3 w-fit border-[#B564F7] text-[#B564F7]'
                          : 'border cursor-pointer border-[#98A2B3] rounded-xl flex py-2 px-8 gap-3 w-fit'
                      }
                    >
                      {/* <Image width={30} src={e.icon} alt={e.name} className="my-auto" /> */}
                      <button className="text-lg">{e}</button>
                    </div>
                  ))
              }
            </div>
            <div
              id="cards"
              className="my-5 flex flex-wrap lg:justify-start justify-center lg:gap-5 md:gap-7 gap-5"
            >
              {
                isLoading ?
                  <Loader></Loader>
                  :
                  sortData?.map((e : any, idx : number) =>
                    <Card e={e} handleDelete={handleDelete} color='#F6F6F6' key={idx}></Card>
                    // <div key={idx} id='card' className='bg-gray-100 flex flex-col border-2 p-3 lg:w-72 md:w-80 rounded-2xl'>
                    // </div>)
                  )
              }
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
