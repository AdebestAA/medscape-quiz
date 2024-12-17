// PsoriaticDiseasesCaseOne
import React from 'react'
import PsoriaticDiseasesCaseOne from '@/components/PsoriaticDiseasesCaseOne';
const endpoint = `https://api.typeform.com/forms/yxo4ZS4L`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        
        
        if (!response.ok) {
              throw new Error(`Error: ${response.statusText}`);
          }
          
          const data = await response.json();
          console.log(data);

        return (
        <PsoriaticDiseasesCaseOne dataFromTypeForm={data} />
        )
}
export default page