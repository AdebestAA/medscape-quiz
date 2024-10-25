// import SurveyOneTwo from "@/components/SurveyOneTwo";

import SurveyOneTwo from "@/components/SurveyOneTwo";


    const endpoint = `https://api.typeform.com/forms/UPVdh9Zd`;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        
        
        // if (!response.ok) {
          //     throw new Error(`Error: ${response.statusText}`);
          // }
    console.log("removed");
    
          const data = await response.json();
          console.log(data);

  return (
    
    <SurveyOneTwo  dataFromTypeForm={data} />
  )
}

export default page
