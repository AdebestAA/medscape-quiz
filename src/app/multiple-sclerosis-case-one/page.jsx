// MultipleSclerosisCaseOne

import React from 'react'
import MultipleSclerosisCaseOne from '@/components/MultipleSclerosisCaseOne';


const endpoint = `https://api.typeform.com/forms/tUSWOhEb`;

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
        <MultipleSclerosisCaseOne dataFromTypeForm={data} />
        )
}
export default page