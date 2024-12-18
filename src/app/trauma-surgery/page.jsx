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
       
        
        
        if (!response.ok) {
            return (
                <div>
                    <h1>Something went wrong,reload</h1>
                </div>
            )
          }
          const data = await response.json();
        return (
        // <TraumaSurgery dataFromTypeForm={data} />
        <div>
            <h1 className='italic text-center font-semibold'>Still in process</h1>
        </div>
        )
}
export default page