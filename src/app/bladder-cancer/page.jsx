// BladderCancers




import BladderCancers from '@/components/BladderCancers';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/XDw1lNIc`;

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
        <BladderCancers dataFromTypeForm={data} />
        )
}
export default page