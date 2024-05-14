export async function sendVerificationRequest({ identifier: email, url }) {

  const data = {
    email:email,
    url:url
  };

  console.log(data)

  // Call the cloud Email provider API for sending emails
  const response = await fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}/api/auth/send-ses-mail`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const contentType = response.headers.get("Content-Type");

    if (contentType && contentType.includes("application/json")) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      return jsonResponse;
    } else {
      // Handle HTML response here
      const htmlResponse = await response.text();
      console.log(htmlResponse);
      // You can parse the HTML response or handle it as needed
    }
  } else {
    throw new Error(`Request failed with status ${response.status}`);
  }
   
}