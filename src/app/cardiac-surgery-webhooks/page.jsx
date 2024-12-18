// Cardiac Surgery Webhooks



import CardiacSurgeryWebhooks from '@/components/CardiacSurgeryWebhooks';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/fqYuL3he`;

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
        <CardiacSurgeryWebhooks dataFromTypeForm={data} />
        )
}
export default page