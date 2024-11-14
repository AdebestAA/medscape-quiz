// HypoalbuminemiaOne


import HypoalbuminemiaOne from '@/components/HypoalbuminemiaOne';



import React from 'react'


const endpoint = `https://api.typeform.com/forms/Kb66TxVs`;

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
        <HypoalbuminemiaOne dataFromTypeForm={data} />
        )
}
export default page