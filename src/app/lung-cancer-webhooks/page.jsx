// LungCancerWebhooks


import LungCancerWebhooks from '@/components/LungCancerWebhooks';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/WVkFIp95`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
      
        
        
        if (!response.ok) {
             return (
                <div>
                    <h1>Something went wrong,reload</h1>
                </div>
            )
          }
          
          const data = await response.json();
         

        return (
        <LungCancerWebhooks dataFromTypeForm={data} />
        )
}
export default page