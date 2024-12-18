// ATTP Webhooks



import AttpWebhooks from '@/components/AttpWebhooks';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/k2OPYlPw`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        
        
        if (!response.ok) {
               return (
                <div>
                    <h1>Something went wrong,reload</h1>
                </div>
            )
          }
          
          const data = await response.json();
        //   console.log(data);

        return (
        <AttpWebhooks dataFromTypeForm={data} />
        )
}
export default page