// AcuteMyeloidLeukaemia


import AcuteMyeloidLeukaemia from '@/components/AcuteMyeloidLeukaemia';


import React from 'react'
const endpoint = `https://api.typeform.com/forms/YCPxJAeF`;

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
        <AcuteMyeloidLeukaemia dataFromTypeForm={data} />
        )
}
export default page