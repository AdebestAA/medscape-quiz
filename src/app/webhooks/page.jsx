// Webhooks


import Webhooks from '@/components/Webhooks';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/sv46IfKp`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        
        
        if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          
          const data = await response.json();
          console.log(data);

        return (
        <Webhooks dataFromTypeForm={data} />
        )
}
export default page