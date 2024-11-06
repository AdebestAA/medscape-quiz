import AhusCaseThree from '@/components/Not-Geolocking-Ahus/AhusCaseThree';
import React from 'react'


const endpoint = `https://api.typeform.com/forms/wQSP31j2`;

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
        <AhusCaseThree dataFromTypeForm={data}  />
//         <div className='flex justify-center items-center h-screen text-[navy] font-bold'>
// <p>
//  still in process...
// </p>
//         </div>
        
        )
}
export default page