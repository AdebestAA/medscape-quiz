

import GeoblockNCaseOne from '@/components/GeoblockNCaseOne';





import React from 'react'


const endpoint = `https://api.typeform.com/forms/T839Zriq`;

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
        <GeoblockNCaseOne dataFromTypeForm={data}  />
//         <div className='flex justify-center items-center h-screen text-[navy] font-bold'>
// <p>
//  still in process...
// </p>
//         </div>
        
        )
}
export default page