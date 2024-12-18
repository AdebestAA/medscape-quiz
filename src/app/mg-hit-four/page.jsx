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
  
        
        if (!response.ok) {
             return (
                <div>
                    <h1>Something went wrong,reload</h1>
                </div>
            )
          }
          
          const data = await response.json();
        
   
  
 return (
<MgHitFour dataFromTypeForm={data} />
 )
}

export default QuizData
