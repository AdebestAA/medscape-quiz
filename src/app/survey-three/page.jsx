

import SurveyThree from "@/components/SurveyThree";


   
    const endpoint = `https://api.typeform.com/forms/U5Kt7eg9`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response);
        
        
        // if (!response.ok) {
        //       throw new Error(`Error: ${response.statusText}`);
        //   }
          
          const data = await response.json();
          // console.log(data); 

  return (
    <SurveyThree dataFromTypeForm={data} />
  )
}

export default page
