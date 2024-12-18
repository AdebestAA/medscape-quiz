
import NClinicPathTwo from '@/components/NClinicPathTwo';
import NMyeloma from '@/components/NMyeloma';


import React from 'react'


const endpoint = `https://api.typeform.com/forms/ySlMYiZ4`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
      
        
        
        if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          
          const data = await response.json();
  

        return (
        <NClinicPathTwo dataFromTypeForm={data}  />
        )
}
export default page