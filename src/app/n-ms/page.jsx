

// import NCushing from '@/components/NCushing';
import NZeroFiveM from '@/components/NMs';
import NMs from '@/components/NMs';

import React from 'react'


const endpoint = `https://api.typeform.com/forms/M9zbJCdN`;

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
        <NZeroFiveM dataFromTypeForm={data}  />
        )
}
export default page