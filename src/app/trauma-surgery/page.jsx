// Trauma Surgery
import TraumaSurgery from '@/components/TraumaSurgery';


import React from 'react'


const endpoint = `https://api.typeform.com/forms/lcUfczoc`;

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
        //   console.log(data);

        return (
        // <TraumaSurgery dataFromTypeForm={data} />
        <div>
            <h1 className='italic text-center font-semibold'>Still in process</h1>
        </div>
        )
}
export default page