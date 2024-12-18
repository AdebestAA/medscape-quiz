// MultipleSclerosisCaseTwo


import React from 'react'
import MultipleSclerosisCaseTwo from '@/components/MultipleSclerosisCaseTwo';
const endpoint = `https://api.typeform.com/forms/uM32tLJl`;

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
                    <h1>Something went wrong</h1>
                </div>
            )
          }
          
          const data = await response.json();
     

        return (
        <MultipleSclerosisCaseTwo dataFromTypeForm={data} />
        )
}
export default page