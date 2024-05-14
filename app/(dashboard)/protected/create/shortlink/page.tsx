import { useForm, SubmitHandler } from "react-hook-form"
import ShortlinkCreate from "@/components/shortlink-create";

export default function Page() {

  
  return (
   
    <>
    
      <div className="mx-auto max-w-full">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <ShortlinkCreate />
        </div>
        {/* /End replace */}

      </div>
    
    </>

  
  );
}
