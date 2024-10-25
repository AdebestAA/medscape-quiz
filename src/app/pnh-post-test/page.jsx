
// import PnhPostTest from "@/components/PnhPostTest";

import JustChecking from "@/components/JustChecking";
import PnhPostTest from "@/components/PnhPostTest";



    
    const endpoint = `https://api.typeform.com/forms/dGNnJsgE`;
    //  const token = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

const page = async() => {

 const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TYPEFORM_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        // console.log(response);
        // console.log("environement varibale with next extnesion",process.env.NEXT_PUBLIC_TYPEFORM_TOKEN)
        // console.log("environement varibale no next entension",process.env.TYPEFORM_TOKEN)
        // console.log("just log");
        
        // if (!response.ok) {
          //     throw new Error(`Error: ${response.statusText}`);
          // }
          

          const data = await response.json();
          console.log(data);

  return (
 <JustChecking dataFromTypeForm={data} noNextExtention={process.env.TYPEFORM_TOKEN} nextExt={process.env.NEXT_PUBLIC_TYPEFORM_TOKEN}/>
//  <PnhPostTest dataFromTypeForm={data}  />

  )
}

export default page
