// HypoalbuminemiaCN
import HypoalbuminemiaThree from '@/components/HypoalbuminemiaThree';



import React from 'react'


const endpoint = `https://api.typeform.com/forms/Ptxph7DP`;

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
        <HypoalbuminemiaThree dataFromTypeForm={data} />
        )
}
export default page