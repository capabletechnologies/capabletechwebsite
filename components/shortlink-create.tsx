"use client"

import { Button, Label, TextInput, Toast } from "flowbite-react";
import { HiFire } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form"
import { createShortlink } from "@/app/(dashboard)/protected/create/action";
import { useState } from "react";


const ShortlinkCreate = () => {

  const createShort = createShortlink.bind(null)
  const [ success, setSuccess] = useState(null)

  type Inputs = {
    name: string
    url: string
  }

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>()


  const onSubmit = async (data: any) => {     

    console.log(data) 
    const response = await createShort(data)

    //response)
    
    console.log("response", response)
    
    reset();

    // remove class hidden from toastme id
    document.getElementById('toastme')!.classList.remove('hidden')

    
    const url = `${response.shorturl}`;
    console.log(url);

    setSuccess(url)

    return response
  }


  return (
    <>
    <h1 className="mb-5 text-3xl text-black">Create Shortlink</h1>
    <div className="p-4 mb-4 bg-white rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-2xl">
        <div>
          <div className="block mb-2">
            <Label htmlFor="name" value="Name of your url" />
          </div>
          <TextInput id="name" type="text" sizing="md" placeholder="Funky chicken url" {...register("name", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.name && <div className="mt-2"><span className="text-red-500">This field is required</span></div>}
        </div>
        <div className="mt-2">
          <div className="block mb-2">
            <Label htmlFor="url" value="URL you want to shorten" />
          </div>
          <TextInput id="url" type="text" sizing="md" placeholder="https://example.com" {...register("url", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.url && <div className="mt-2"><span className="pt-2 text-red-500">This field is required</span></div>}
        </div>
        <Button type="submit" className="bg-green-500">Submit</Button>
      </form>
      <div id="toastme" className="flex hidden flex-col gap-4 mt-5 max-w-md">
        <Toast>
          <div className="inline-flex justify-center items-center w-8 h-8 text-cyan-500 bg-cyan-100 rounded-lg shrink-0 dark:bg-cyan-800 dark:text-cyan-200">
            <HiFire className="w-5 h-5" />
          </div>
          
            <div className="ml-3 text-sm font-normal">Your shortie has been created. <div className="mt-4 text-sky-500 underline"><a href={success} target="_blank">{success}</a></div></div>
        
          <Toast.Toggle />
        </Toast>
      </div>
    </div>
    </>
  );
};

export default ShortlinkCreate;
