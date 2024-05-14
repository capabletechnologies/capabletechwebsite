import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
// Load the AWS SDK for Node.js
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";



export async function POST(req: NextApiRequest, res: NextResponse) {
  try {

    const { email, url } = await req.json();

    console.log("EMAIL: ",email)

     // Set the AWS Region.
     const REGION = "eu-west-1";
    // Create SES service object.
     const ses = new SESClient({
      region: REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      
    });

    let htmlBody = "<h2>One more step</h2>"
    htmlBody += `<p>Please click here to authenticate - ${url}</p>`

   

    if(email) {

      let params = {
        Destination: { /* required */
          ToAddresses: [
            email,
            /* more items */
          ]
        },
        Message: { /* required */
          Body: { /* required */
            Html: {
            Charset: "UTF-8",
            Data: htmlBody
            }
          },
          Subject: {
            Charset: 'UTF-8',
            Data: 'Sign in to LinkCommerce App'
          }
          },
        Source: 'signin@capabletech.net', /* required */
        ReplyToAddresses: [
          'support@capabletech.net',
          /* more items */
        ],
      };

      // Create the promise and SES service object
      const sendEmailCommand = new SendEmailCommand(params);

      // Handle promise's fulfilled/rejected states
      ses.send(sendEmailCommand).then(
        (data) => console.log('Email sent:', data),
        (error) => console.error(error)
      );

    }

    return NextResponse.json("Email sent");
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

