import SideBar from "@/components/sidebar";
import DashboardComponent from "@/components/dasboard";

export default function Dashboard() {

  
  return (
   
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
    <SideBar/>

    <main id="content" className="flex-1 p-6 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <div className="border-4 border-dashed border-gray-200 rounded-lg h-auto pb-5" />
        </div>
        {/* /End replace */}

      </div>
    </main>
    </div>

  
  );
}
