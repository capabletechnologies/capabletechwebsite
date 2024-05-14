"use client"

import { useState } from "react";
import Link from "next/link";
import { LiaSignalSolid } from "react-icons/lia";
import { LiaCalendarAlt } from "react-icons/lia";
import * as React from 'react';
import { QRCode } from 'react-qrcode-logo';
import Shareme from "./share"; 
import ClipBoardCopy from "./copyClipboard";
import { Button } from "flowbite-react";
const ShortlinkView = (params: any) => {

  const downloadCode = (id: any, shortcode: any) => {
    const canvas: any = document.getElementById(id);
    if(canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl
      downloadLink.download = `${shortcode}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }

  return (
    <>
      <div>
        <h1 className="mb-5 text-3xl text-black">Shortlink View</h1>
        
        

          {params.urls.map((url: any) => (
            <div key={url.id} className="p-4 mb-4 bg-white rounded-md">
              <div className="grid grid-cols-3">
                <div className="col-span-1 mt-2 sm:col-span-2">
                  <p className="pb-2 text-xl">
                    <Link href={`/protected/view/shortlink/${url.id}`} className="hover:underline hover:text-blue-500">{url.name}</Link>
                  </p>
                  <p className="pb-2">
                    <Link href={`${process.env.NEXT_PUBLIC_MAIN_URL}/u/${url.shortUrl}`} target="_blank" className="float-left pr-2 text-blue-500 hover:underline cursor">{process.env.NEXT_PUBLIC_MAIN_URL}/u/{url.shortUrl}</Link> 
                    <ClipBoardCopy url={`${process.env.NEXT_PUBLIC_MAIN_URL}/u/${url.shortUrl}`} />
                  </p>
                  <p className="pb-4">
                    <Link href={url.originalUrl} target="_blank" className="text-blue-500 hover:underline">{url.originalUrl}</Link>
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="invisible md:visible" >
                  
                    <QRCode value={`${process.env.NEXT_PUBLIC_MAIN_URL}/u/${url.shortUrl}?scan=1`} id={url.id} />
                    <Button className="ml-2" onClick={() => downloadCode(url.id, url.shortUrl)}>
                      Download Code
                    </Button>
                    <div className="mt-2 ml-2 text-xs cursor-pointer hover:underline">
                      <Link href={`/protected/view/shortlink/${url.id}`} className="hover:underline hover:text-blue-500">Download more sizes here</Link>
                    </div>
                  </div>
                  <p className="mt-2">
                    <div className="pb-2 pl-2">SHARE: </div>
                    <Shareme url={`${process.env.NEXT_PUBLIC_MAIN_URL}/u/${url.shortUrl}`} />
                  </p>
                </div>
                <div>
                  <p className="float-left mr-2">
                  <LiaSignalSolid className="float-left mt-1 mr-2" />
                  {url._count.clicks} engagements 
                  </p>
                  <p className="text-black">
                  <LiaCalendarAlt className="float-left mt-1 mr-2" /> {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                  }).format(new Date(url.createdAt))} 
                  </p>
                </div>
                
              </div>
            </div>
          ))}


        
      </div>
    </>
  );
};

export default ShortlinkView;
