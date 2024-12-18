

import NAhusCaseOne from '@/components/NAhusCaseOne';




import React from 'react'


const endpoint = `https://api.typeform.com/forms/vEc3nrQ4`;

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
        <NAhusCaseOne dataFromTypeForm={data}  />
        )
}
export default page