// AnaemiaAndCkd

import AnaemiaAndCkd from '@/components/AnaemiaAndCkd';

import React from 'react'
const endpoint = `https://api.typeform.com/forms/w2Y59rsi`;

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
                    <h1>Something went wrong,relaod</h1>
                </div>
            )
          }
          
          const data = await response.json();
        //   console.log(data);

        return (
        <AnaemiaAndCkd dataFromTypeForm={data} />
        )
}
export default page