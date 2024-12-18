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
       
        
        
        if (!response.ok) {
            return (
                <div>
                    <h1>Something went wrong,reload</h1>
                </div>
            )
          }
          
          const data = await response.json();
        

        return (
        <RefractoryEpilepsy dataFromTypeForm={data} />
        )
}
export default page