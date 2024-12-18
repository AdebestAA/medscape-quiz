// GvhdWebhooks
import React from 'react'

import GvhdWebhooks from '@/components/GvhdWebhooks';


const endpoint = `https://api.typeform.com/forms/GrcGl8yN`;

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
        <GvhdWebhooks dataFromTypeForm={data} />
        )
}
export default page