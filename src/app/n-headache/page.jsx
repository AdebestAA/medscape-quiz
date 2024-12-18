
// import ItpWebhooks from "@/components/ItpWebhooks";
import NHeadache from '@/components/NHeadache';
import NPain from '@/components/NPain';
import NWeight from '@/components/NWeight';
import React from 'react'


const endpoint = `https://api.typeform.com/forms/Ikw8Z0V5`;

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
        <NHeadache dataFromTypeForm={data}  />
//         <div className='flex justify-center items-center h-screen text-[navy] font-bold'>
// <p>
//  still in process...
// </p>
//         </div>
        
        )
}
export default page