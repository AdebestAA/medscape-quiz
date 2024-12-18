// SkinCancerCaseOne

import SkinCancerCaseOne from '@/components/SkinCancerCaseOne';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/wZND3W2B`;

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
        <SkinCancerCaseOne dataFromTypeForm={data} />
        )
}
export default page