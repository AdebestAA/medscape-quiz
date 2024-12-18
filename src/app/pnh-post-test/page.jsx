
// import PnhPostTest from "@/components/PnhPostTest";

import JustChecking from "@/components/JustChecking";
import PnhPostTest from "@/components/PnhPostTest";



    
    const endpoint = `https://api.typeform.com/forms/dGNnJsgE`;
    //  const token = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

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
 <PnhPostTest dataFromTypeForm={data}  />

  )
}

export default page
