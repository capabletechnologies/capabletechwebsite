# once off payments

#!/bin/sh
url="https://api.paystack.co/transaction/initialize"
authorization="Authorization: Bearer sk_test_9f5fc49118959082b83a346902e668e0c53e55a8"
content_type="Content-Type: application/json"
data='{ 
  "email": "customer@email.com", 
  "amount": "20000"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST


## returns response
{ 
"status" :true,
"message" :"Authorization URL created",
"data": { "authorization_url" :"https://checkout.paystack.com/mamxmt7qm6s06vn",
          "access_code" :"mamxmt7qm6s06vn",
          "reference" :"7s9r9zz5m3" 
        } 
}

# subscriptions

You need to create a plan first before you can use subscriptions

#!/bin/sh
url="https://api.paystack.co/subscription"
authorization="Authorization: Bearer sk_test_9f5fc49118959082b83a346902e668e0c53e55a8"
content_type="Content-Type: application/json"
data='{ 
  "customer": "CUS_xnxdt6s1zg1f4nx", 
  "plan": "PLN_gx2wn530m0i3w3m"
}'

curl "$url" -H "$authorization" -H "$content_type" -d "$data" -X POST