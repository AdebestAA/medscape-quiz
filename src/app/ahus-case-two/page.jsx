import AhusCaseThree from '@/components/Not-Geolocking-Ahus/AhusCaseThree';
import AhusCaseTwo from '@/components/Not-Geolocking-Ahus/AhusCaseTwo';
import React from 'react'


const endpoint = `https://api.typeform.com/forms/ysrWx1T6`;

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
        <AhusCaseTwo dataFromTypeForm={data}  />
        )
}
export default page