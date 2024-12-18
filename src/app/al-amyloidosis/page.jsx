// AlAmyloidosis

import AlAmyloidosis from '@/components/AlAmyloidosis';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/WI0DDEn9`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        
        
        if (!response.ok) {
              return (
                <div>
                    <h1>Something went wrong</h1>
                </div>
            )
          }
          
          const data = await response.json();
        //   console.log(data);

        return (
        <AlAmyloidosis dataFromTypeForm={data} />
        )
}
export default page