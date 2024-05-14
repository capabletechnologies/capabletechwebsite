'use server'
 
import prisma from "@/lib/prisma"
import { auth } from "auth"


export async function createShortlink(data:any) {
  // ...
  
    try {
        if(data) {
            console.log("ACTION data", data)
            
            const session = await auth();
            // generate unique shortlink ex. localhost/nho43fsad
            const shortlink = crypto.randomUUID().replace(/-/g, '').substring(0, 8);


            // lookup user
            const user = await prisma.user.findUnique({
                where: {
                    email: session?.user?.email
                }
            });

            const userId = parseInt(user.id)

            if(userId) {

                const url = await prisma.url.create({
                    data: {
                        originalUrl: data.url,
                        shortUrl: shortlink,
                        clickCount: 0,
                        name: data.name,
                        user: {
                            connect: { id: userId }
                        }
                    },
                });

                const mainUrl = process.env.MAIN_URL
            
                return { status: 200, shorturl: `${mainUrl}/u/${shortlink}` }

            }

            
            
        }
    } catch (error) {
        console.log(error)
        return "Something went wrong creating shortlink"
    }

  
  

}