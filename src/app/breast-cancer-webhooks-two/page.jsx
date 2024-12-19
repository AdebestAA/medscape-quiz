// BreastCancerWebhooksTwo


import BreastCancerWebhooksTwo from '@/components/BreastCancerWebhooksTwo';



import React from 'react'
const endpoint = `https://api.typeform.com/forms/aEC5N0R2`;

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
         

        return (
        <BreastCancerWebhooksTwo dataFromTypeForm={data} />
        )
}
export default page