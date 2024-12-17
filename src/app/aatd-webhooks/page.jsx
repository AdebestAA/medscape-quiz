// AATD Webhooks
import React from 'react'


import AatdWebhooks from '@/components/AatdWebhooks';
const endpoint = `https://api.typeform.com/forms/DPalEntB`;

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
            //   throw new Error(`Error: ${response.statusText}`);
              return (
                <div>
<h1>Something went wrong</h1>
                </div>
              )
          }
          
          const data = await response.json();
        //   console.log(data);

        return (
        <AatdWebhooks dataFromTypeForm={data} />
        )
}
export default page