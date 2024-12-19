// MyastheniaGravis


import MyastheniaGravis from '@/components/MyastheniaGravis';



import React from 'react'
const endpoint = `https://api.typeform.com/forms/eydrzNE6`;

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
                    <h1>Something went wrong</h1>
                </div>
            )
          }
          
          const data = await response.json();
       

        return (
        <MyastheniaGravis dataFromTypeForm={data} />
        )
}
export default page