import MgHitFour from "@/components/MgHitFour";




    const endpoint = `https://api.typeform.com/forms/a85yckVH`;

const QuizData = async() => {

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
          
          const data = await response.json();
          console.log(data);
   
  
 return (
<MgHitFour dataFromTypeForm={data} />
 )
}

export default QuizData
