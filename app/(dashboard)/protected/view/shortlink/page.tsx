import { Button } from "flowbite-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import ShortlinkView from "@/components/shortlink-view";

export default async function Page(props: any) {


  console.log("searchParams",props.searchParams)

  
  async function getAllUrls() {
    const urls = await prisma.url.findMany({
      include: {
        _count: {
          select: {
            clicks: true
          }
        }
      }
    })

    //console.log("urls",urls)

    return urls;
  }

  const urls = await getAllUrls()

  //console.log("urls",urls)

  async function getDistinctUserAgentsWithCount() {
    const distinctUserAgents = await prisma.click.groupBy({
      by: ['userAgent'],
      _count: {
        userAgent: true
      }
    });
  
    return distinctUserAgents;
  }

  // Usage
  const userAgentCount = await getDistinctUserAgentsWithCount()
  
  return (
   
    <>
    
      <div className="mx-auto max-w-full">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col gap-4 w-full"> 
          <Link href="/protected/create/shortlink"><Button color="light" className="w-48">Create Shortlink</Button></Link>
          <ShortlinkView urls={urls} userAgents={userAgentCount} />
          </div>
        </div>
        {/* /End replace */}

      </div>
    
    </>

  
  );
}
