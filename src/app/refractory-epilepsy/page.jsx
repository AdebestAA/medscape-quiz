import RefractoryEpilepsy from '@/components/RefractoryEpilepsy';
import WaldenstromMacro from '@/components/WaldenstromMacro';
import React from 'react'


const endpoint = `https://api.typeform.com/forms/B5C4KVQ0`;

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
        <RefractoryEpilepsy dataFromTypeForm={data} />
        )
}
export default page