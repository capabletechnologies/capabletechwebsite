import ShortlinkSingleView from "@/components/shortlink-single-view";
import prisma from "@/lib/prisma";


export default async function Page({ params }: { params: { shortlink: string } }) {

  const routeId = params.shortlink
  
  async function getAllUrls() {
    const urls = await prisma.url.findMany({
      include: {
        _count: {
          select: {
            clicks: true
          }
        }
      },
      where: {
        id: parseInt(routeId)
      }
    })

    console.log("urls",urls)

    return urls;
  }

  const urls = await getAllUrls()
  return (
   
    <>
    
      <div className="mx-auto max-w-full">
        {/* Replace with your content */}
        <div className="px-4 py-6 sm:px-0">
          <ShortlinkSingleView url={urls[0]} />
        </div>
        {/* /End replace */}

      </div>
    
    </>

  
  );
}
