// Parkinson


import Parkinson from '@/components/Parkinson';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/I81n3H9L`;

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
        <Parkinson dataFromTypeForm={data} />
        )
}
export default page