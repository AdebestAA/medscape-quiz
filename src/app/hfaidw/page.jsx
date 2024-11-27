// Heart Failure and Iron Deficiency webhooks



import Hfaidw from '@/components/Hfaidw';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/yJwd0Pzr`;

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
        <Hfaidw dataFromTypeForm={data} />
        )
}
export default page