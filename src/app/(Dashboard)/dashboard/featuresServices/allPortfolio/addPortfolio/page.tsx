"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoCloudUploadOutline } from "react-icons/io5";
import useFetch1 from "@/lib/useFetch1";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store";
import { addPortfolio, updateService } from "@/Redux/ReduxFunctions";
import { useParams } from "next/navigation";
import useFetch2 from "@/lib/useFetch2";
import ShowToastify from "@/utils/ShowToastify";
import { ToastContainer } from "react-toastify";


export type FormData = {
  description: string;
  protfolioType: string;
  file: FileList; // FileList for handling file uploads
  categoryId: string;
};

export default function PostForm() {
  const pathParams: { id: string } = useParams()
  const dispatch = useDispatch<AppDispatch>();
  const { data: serviceData, refetch } = useFetch2('service', pathParams?.id)
  const { register, handleSubmit } = useForm<FormData>();
  const { data: categoryData, isLoading } = useFetch1("category");
  console.log(pathParams);

  const onSubmit: SubmitHandler<FormData> = (
    data: FormData
  ) => {
    // console.log(serviceData.result.id);
    const formData = new FormData()
    formData.append('protfolioType', data.protfolioType )
    formData.append('description', data.description)
    formData.append('categoryId', "673bfd9b4e0582c597050ff8")
    formData.append('portifolioImage', data.file[0])

    if (serviceData?.result?.id) {
      const id = serviceData?.result?.id;
      console.log(id);
      const name = data?.protfolioType ? data.protfolioType : serviceData?.result?.name
      const description = data?.description ? data.description : serviceData?.result?.description
      const categoryId = data?.categoryId ? data?.categoryId == "Loading" ? serviceData?.result?.categoryId : data?.categoryId : ""
      const image = serviceData?.result?.image
      const resData = {name, description,categoryId,image}
      console.log(name, description,categoryId,image);
      
      dispatch(updateService({ id, resData })).then((res) => {
        console.log(res);
        if (res.payload) {
          refetch()
          ShowToastify({success : "your service is updated successfully"})
          return
        }
        if ('error' in res && res.error) {
          ShowToastify({ error: "your service can't be updated" })
    
      }
      });
    }
    dispatch(addPortfolio(formData)).then((res) => {
      console.log(res);
      if (res.payload) {
        refetch()
        ShowToastify({success : "your service is create successfully"})
        return
      }
      if ('error' in res && res.error) {
        ShowToastify({ error: "your service can't be created" })
  
    }

    });
  };

  return (
    <div className="space-y-6 lg:pt-12 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[900px] mx-auto bg-white rounded-2xl px-8 py-9 flex flex-col gap-y-7"
      >
        <div className={`text-center flex flex-col gap-4 font-poppins`}>
          <h2 className="text-black font-semibold text-lg md:text-xl lg:text-[40px]">
            {
              pathParams.id ?
              "Update your Portfolio post"
              :
              "Create new Portfolio post"
            }
          </h2>
          <h2 className="text-[#344054] text-[16px]">
            Add new services post for your website viewer that make them highly
            interested for purchase!
          </h2>
        </div>

        {/* Select and Input */}
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <label htmlFor="selectPost" className=" poppins-regular">
              Where you want to post?
            </label>
            <select
              style={{
                width: "100%",
                height: "52px",
                color: "#A554E6",
                borderRadius: "16px",
              }}
              className="bg-[#F9F5FF] text-primary rounded-xl mt-2"
              {...register("categoryId")}
              // value={categoryData.result.map[0]}
              disabled
            >
              {isLoading ?
                <option value={serviceData?.result?.categoryId}>Loading</option>
                :
                categoryData.result.map((item: { id: string; categoryName: string }, index: number) => (
                  <option key={index} value={item?.id}>
                    {item.categoryName}
                  </option>
                ))
              }
            </select>
          </div>

          <span className="text-[#6F6F6F]">OR</span>

          <div className="flex-1">
            <label htmlFor="service" className=" poppins-regular">
              Name
            </label>{" "}
            <br />
            <input
              placeholder="Write the name of service"
              defaultValue={serviceData?.result?.name}
              className="h-[52px] border-[#E5E5E5] border w-full rounded-xl outline-none focus:outline-none focus:border-primary hover:border-primary px-2 text-[16px]"
              {...register("protfolioType")}
            />
          </div>
        </div>

        {/* TextArea */}
        <div className="space-y-2">
          <label className=" poppins-regular">Post content</label> <br />
          <textarea
            placeholder="Write your overall post description."
            defaultValue={serviceData?.result?.description}
            className="min-h-[100px] border-[#E5E5E5] border w-full p-3 outline-none focus:outline-none focus:border-primary hover:border-primary resize-none rounded-xl"
            {...register("description")}
          />
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="text-base">Post banner or video</label>
          <div className="border-2 border-dashed border-[#E5E5E5] rounded-lg p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-2">
                {/* Hidden File Input */}
                <input
                  type="file"
                  id="fileUpload"
                  accept="image/*"
                  className="hidden"
                  defaultValue={serviceData?.result?.image}
                  {...register("file")}
                />
                {/* Upload Icon */}
                <IoCloudUploadOutline
                  className="h-12 w-12 text-[#8B3DFF] cursor-pointer"
                  onClick={() => document.getElementById("fileUpload")?.click()}
                />
                {/* Text Content */}
                <div className="text-center">
                  <p className="text-base">
                    Drag your file(s) or{" "}
                    <span
                      className="text-[#8B3DFF] cursor-pointer"
                      onClick={() =>
                        document.getElementById("fileUpload")?.click()
                      }
                    >
                      browse
                    </span>
                  </p>
                  <p className="text-sm text-[#6F6F6F] mt-1">
                    1-minute video resume required
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg py-2 mx-auto border bg-gradient-to-t from-[#6A2F9B] to-[#B564F7] hover:to-[#6A2F9B] hover:from-[#B564F7] transition-all text-white flex items-center justify-center text-lg"
        >
          Publish
        </button>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
}
