import { NextRequest, NextResponse, userAgent } from "next/server";
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from "@/lib/prisma";
import { useSearchParams } from 'next/navigation'

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const isScan = searchParams.get('scan')

    const { device, os, browser, isBot } = userAgent(req)
  
    // Get the pathname of the request (e.g. /, /protected)
    const path = req.nextUrl.pathname;

    /* console.log("DEVICE",device.model)
    console.log("OS",os)
    console.log("BROWSER",browser.name)
    console.log("THE PATH",path)
    console.log("Country", Intl.DateTimeFormat().resolvedOptions().timeZone) */

    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    //console.log("IP",ip)

    // get referer
    const headersList = headers()
    const referer = headersList.get('referer')

    //console.log("REFERER",referer)

    const country = Intl.DateTimeFormat().resolvedOptions().timeZone

    async function getLink(shortlink: string,  country, browser, ip, os, device, referer, isBot ) {
        'use server'
        const url = await prisma.url.findFirst({
          where: {
            shortUrl: shortlink,
          },
        });
    
        if (!url) {
          redirect('/404')
        }
        else {
          // lets first create a entry
          
          await prisma.click.create({
            data: {
              clickedAt: new Date(),
              userAgent: browser,
              ipAddress: ip,
              country: country,
              os_system: os,
              device: device,
              referer: referer,
              url: {
                connect: {
                  id: url.id
                }
              },
              isBot: isBot,
              isScan: isScan ? true : false
            },
          });

          console.log(url?.originalUrl)
    
          redirect(url?.originalUrl)
        }
      }


      if (path.startsWith('/u/')) {
        console.log('HELLO')
        const shortLink = path.slice('/u/'.length)
        console.log(`Shortlink Middleware: ${shortLink}`)

        await getLink(shortLink,  country, browser.name, ip, os.name, device.model, referer, isBot.valueOf())
      }

      return Response.json({ device, os, browser, isBot, ip: ip })
}