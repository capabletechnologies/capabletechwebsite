import { redirect } from 'next/navigation'
import { NextRequest, NextResponse, userAgent } from 'next/server'
import prisma from '@/lib/prisma';

export default async function Page({ params }: { params: { shortlink: string } }) {

  async function getLink(shortlink: string) {
    'use server'
    const url = await prisma.url.findFirst({
      where: {
        shortUrl: params.shortlink,
      },
    });

    if (!url) {
      redirect('/404')
    }
    else {
      // lets first create a entry
     /*  prisma.click.create({
        create: {
          clickedAt: new Date(),
          userAgent: click.userAgent,
          ipAddress: click.ipAddress,
          country: click.country,
          url: click.url,
        },
      })

      redirect(url?.originalUrl) */
    }
  }

  const myUrl = await getLink(params.shortlink)

  return (
    <div className="flex h-screen bg-black">
      <div className='text-xl text-white'>My Shortlink: {params.shortlink}</div>
    </div>
  );
}