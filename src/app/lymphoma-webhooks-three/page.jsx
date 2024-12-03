// LymphomaWebhooksThree


import LymphomaWebhooksThree from '@/components/LymphomaWebhooksThree';



import React from 'react'
const endpoint = `https://api.typeform.com/forms/jfJsYyUS`;

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
        <LymphomaWebhooksThree dataFromTypeForm={data} />
        )
}
export default page