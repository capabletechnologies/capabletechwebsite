I want to build a url shortlink service, which will track clicks. I will also need to generate QR codes for each shortlink created. I want to be able to track browser information and locations information like country the visitor is from.

Which tables and columns do you think I need?

# create sub account
curl https://api.paystack.co/subaccount -H "Authorization: Bearer sk_test_9f5fc49118959082b83a346902e668e0c53e55a8" -H "Content-Type: 
application/json" -d '{ "business_name": "Zeelie", "bank_code": "250655", "account_number": "63022594732", "percentage_charge": 20 }' -X POST

## response

{"status":true,"message":"Subaccount created","data":{"business_name":"Zeelie","account_number":"63022594732","percentage_charge":20,"settlement_bank":"First National Bank","currency":"ZAR","bank":151,"integration":1180739,"domain":"test","product":"collection","managed_by_integration":1180739,"subaccount_code":"ACCT_4bltgj297cigbkj","is_verified":false,"settlement_schedule":"AUTO","active":true,"migrate":false,"id":1073914,"createdAt":"2024-04-22T19:27:02.560Z","updatedAt":"2024-04-22T19:27:02.560Z"}}


# split payments
curl https://api.paystack.co/transaction/initialize -H "Authorization: Bearer sk_test_9f5fc49118959082b83a346902e668e0c53e55a8" -H "Content-Type: application/json" -d '{ "email": "customer@email.com",  "amount": "20000", "subaccount": "ACCT_4bltgj297cigbkj", "bearer": "subaccount" }' -X POST



# verify payments

## response
