
// import ItpWebhooks from "@/components/ItpWebhooks";
import ItpWebhooks from '@/components/ItpWebhooks';
import NAshtma from '@/components/NAshtma';
import React from 'react'




    const endpoint = `https://api.typeform.com/forms/MGCt04rv`;

const page = async() => {

//  const response = await fetch(endpoint, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
//                 'Content-Type': 'application/json'
//             }
//         });
        // console.log(response);
        
        
        // if (!response.ok) {
        //       throw new Error(`Error: ${response.statusText}`);
        //   }
          
        //   const data = await response.json();
          // console.log(data);

        return (
        // <NAshtma dataFromTypeForm={data}  />
        <div className='flex justify-center items-center h-screen text-[navy] font-bold'>
<p>
            still in process...

</p>
        </div>
        
        )
}


export default page


