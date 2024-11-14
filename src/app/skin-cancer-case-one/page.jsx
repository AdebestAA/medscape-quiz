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
        console.log(response);
        if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          
          const data = await response.json();
          console.log(data);

        return (
        <SkinCancerCaseOne dataFromTypeForm={data} />
        )
}
export default page