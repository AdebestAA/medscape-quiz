// MultipleSclerosisCaseThree

import MultipleSclerosisCaseThree from '@/components/MultipleSclerosisCaseThree';



import React from 'react'
const endpoint = `https://api.typeform.com/forms/y8Uuf8rf`;

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
        <MultipleSclerosisCaseThree dataFromTypeForm={data} />
        )
}
export default page