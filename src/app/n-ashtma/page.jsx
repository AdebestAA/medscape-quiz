
// import ItpWebhooks from "@/components/ItpWebhooks";
import ItpWebhooks from '@/components/ItpWebhooks';
import NAshtma from '@/components/NAshtma';
import React from 'react'




    const endpoint = `https://api.typeform.com/forms/MGCt04rv`;

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
        <NAshtma dataFromTypeForm={data}  />
        )
}


export default page


