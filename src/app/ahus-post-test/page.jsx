
// import AhusPostTest from "@/components/AhusPostTest";

import AhusPostTest from "@/components/AhusPostTest";




    const endpoint = `https://api.typeform.com/forms/iPDylGBA`;

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
    <AhusPostTest dataFromTypeForm={data} />
  )
}

export default page
