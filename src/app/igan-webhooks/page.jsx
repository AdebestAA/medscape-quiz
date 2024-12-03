// IganWebhooks


import IganWebhooks from '@/components/IganWebhooks';



import React from 'react'
const endpoint = `https://api.typeform.com/forms/P3A1isW1`;

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
        <IganWebhooks dataFromTypeForm={data} />
        )
}
export default page