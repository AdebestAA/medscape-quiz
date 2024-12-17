import MultipleMyeloma from '@/components/MultipleMyeloma';
import React from 'react'


const endpoint = `https://api.typeform.com/forms/qa5FNfcI`;

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
        <MultipleMyeloma dataFromTypeForm={data} />
        )
}
export default page