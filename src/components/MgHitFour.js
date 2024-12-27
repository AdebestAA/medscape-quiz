"use client"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GraphQLClient, gql, } from 'graphql-request';
import useLocalStorage from "@/CustomHooks/UseLocalStorage";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import TypeformFormatJsx from "./TypeformFormats/TypeformFormatJsx";


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm1hxxlry022j07ukn5k554xn/master";

const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MjczNTk5MjYsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20xaHh4bHJ5MDIyajA3dWtuNWs1NTR4bi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiY2M2MmY2NDUtYWM5MC00MzQ1LWI1OTMtOTkyZGYxZWM0MjQxIiwianRpIjoiY20xamRpMTIzMDA0aDA4bWZmMTRsZmppeiJ9.TTEijaTcRbfD4duJsAMlSodGJ-dafML1wWHYOWSGVSW0PWbv9ClrAFigqU5hX3D1ykFfXjKScRON-i4GAecHnRBelMDotjbKWwLtZhC2oireolALxupiCSZc7hOrdLz7--IAEbkQVtKheDmoezNOfWaCQw8lSE-9QG-FqGhv_JRF5LI0UeUHDrjm_goHMskVFeiDCE0s6-EH2Oi6HMWPa1EZO5RjDSwwbVEc_bEaGI8EBFkbXem6X7ZVeph3XaJv5pthXKL6Y1aVlb6bDIgKIYjuRjrndSt0VQ0T8Z3l6IIMGdA4ECT8bLmns6sh9HPcEzf9eD3EyyYdRqTAgELeoe65OeBoKo9vum3cziyA15mq579anHNg7AGUjbNe5Xu2uRS93pMeknCuWVVKETwvCvm6iaFRA0UXiDmKDGitajoLzCaGNyc_C5kgrSmUJgAN48xwppflyu2uQpDMlugJd95fkDbdpPB48SNTtRjIXxqk8alJH2zC0at72Y0RHkZNG0ydvu-qScTVpTiP680OKWRnibrhIhiOs55-NPU-5Y4vYmvR610Udkn_oFe3SJ80w3Kr4FEWJIuE6HTGQF8R9IenpZ2iLs_f9nQJhR4nM7AgIinqIiAdu8CdZEJfrHdhqQTIaXPZPiYboj7bPowJ930-gxjOBMgBJk6rRIggln8"


export default function MgHitFour({dataFromTypeForm}) {
const [typeformData,setTypeFromData] = useState(dataFromTypeForm)
// const [storeData] = useLocalStorage(typeformData || [])
const [dataPosted,setDataPosted] = useState(false)
const [questionsToDisplay,setQuestionsToDisplay] = useState([])
const [step,setStep] = useState(0)
const [startQuiz,setStartQuiz] = useState(false)
const [optionsChecked,setOptionsChecked] = useState([])
const [possibleOptions,setPosibleOptions] = useState (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ"])

const eachQuestAndFeedback =useRef([]) 


// Initialize the GraphQL client
const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});


// Call the function with the new data
useEffect(()=>{
overwriteAndPublishQuest(dataFromTypeForm);
},[])



// Mutation to delete the existing entry
const deleteQuestMutation = gql`
 mutation deleteQuest($id: ID!) {
    deleteQuest(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createQuest($data: QuestCreateInput!) {
    createQuest(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishQuest($id: ID!) {
    publishQuest(where: { id: $id }) {
      id
      placeholder
      publishedAt
    }
  }
`;

const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingQuests {
    quests {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.quests.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.quests[0].id;
      await client.request(deleteQuestMutation, { id: questId });
      console.log('Existing quest deleted');
    }

    // Step 3: Create a new quest
    const data = {
  placeholder: newData
   
};
      const newQuest =await client.request(createQuestMutation, { data })
    // const newQuest = await client.request(createQuestMutation, {
    //   fields: newData,
    // });
    const questId = newQuest.createQuest.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishQuest.id) {
      return true
    }
    else{
      false
    }
   })
    

  } catch (error) {
    console.error('Error handling quest data:', error);
  }
};

// // Example of how to use the function
// const newQuestData = {
//   placeholder: [
//     { name: 'chris', month: 'may' },
//     { name: 'jacob', month: 'june' },
//   ],
// };


// DELETE METHOD
// const deleteQuest = async (questId) => {
//   const response = await fetch(endpoint, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`, // replace with your actual token
//     },
//     body: JSON.stringify({
//       query: `
//         mutation {
//           deleteQuest(where: { id: "${questId}" }) {
//             id
//           }
//         }
//       `,
//     }),
//   });

//   const result = await response.json();
//   if (result.errors) {
//     console.error('Error deleting quest:', result.errors);
//   } else {
//     console.log('Quest deleted:', result.data.deleteQuest.id);
//     // Optionally, update local state here
//   }
// };

// Usage
// useEffect(()=>{
// deleteQuest("cm2aj0udx1nrc06mo4ewuz5w5")
// },[]) // replace with the actual quest ID


// useEffect(()=>{
// overwriteAndPublishQuest(dataFromTypeForm);
// },[])

// const fetchQuestData = async () => {
//   const query = `
//     {
//       quest {
//         id
//         placeholder
//       }
//     }
//   `;

//   try {
//     const data = await client.request(query);
//     console.log('Quest Data:', data.quest); // Access the quest data here
//     return data.quest; // Return the quest data
//   } catch (error) {
//     console.error('Error fetching data:', error);
    
//   }
// };


  useEffect(() => {
    if (!dataPosted) {
      return
    }
    const fetchQuestData = async () => {
      const query = gql`
        query {
        quests {
        id
        placeholder
        }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.quests[0]);
        setQuestionsToDisplay(getData.quests)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchQuestData();
  }, [dataPosted]);




useEffect(()=>{
// console.log(storeData.welcomeScreens[0].properties.description.split("\n")[0].split("*"));
  document.body.style.overflow = "hidden"
  window.scrollTo({top:0,behavior:"smooth"})

},[])


const handleScroll = ()=>{
window.scrollTo({top:window.scrollY + eachQuestAndFeedback.current[step].getBoundingClientRect().top,behavior:"smooth"})
}
useEffect(()=>{
if (!startQuiz) {
return
}
handleScroll()
},[step,startQuiz])

if (questionsToDisplay.length < 1) {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[200px] h-[200px]  flex justify-center items-center flex-col">
      <img src="spinner.svg" alt="spinner" className="w-[100px]" />
      <p className="text-[#000080] font-semibold">loading questions</p>
      </div>
    </div>
  )
}


const handleScrollDown = ()=>{

  if (questionsAnswered !== 0 && questionsAnswered === questionsFromHygraph.length) {
    setCompleted(true)
    
    return
  }   


  if (showFeedback) {
     window.scrollTo({top:window.scrollY + eachQuestAndFeedback.current[2].getBoundingClientRect().height / 2,behavior:"smooth"})
setShowFeedback(false)
return
  }
      if (divNumber < eachQuestAndFeedback.current.length - 1) {
      setDivNumber((prev)=> prev + 1);
    } else {
      setDivNumber(0); // Reset to first div if it's the last one
    }
     const nextDiv = eachQuestAndFeedback.current[divNumber + 1] || eachQuestAndFeedback.current[0];
   window.scrollTo({top:nextDiv.getBoundingClientRect().top + window.scrollY,behavior:"smooth"})
setShowFeedback(true)
setStep(0)
 
  }


  return (
    <TypeformFormatJsx
step={step}
setStep={setStep}
startQuiz={startQuiz}
setStartQuiz={setStartQuiz}
handleScroll={handleScroll}
questionsToDisplay={questionsToDisplay}
setQuestionsToDisplay={setQuestionsToDisplay}
optionsChecked={optionsChecked}
setOptionsChecked={setOptionsChecked}
possibleOptions={possibleOptions}
eachQuestAndFeedback={eachQuestAndFeedback}
/>

  );
}



const btn = ()=>{


    return (
        {/* <button
onClick={()=> {
createAndPublishData(typeformData)
}}
className="px-10 rounded-md py-4 bg-blue-500 "
>send</button> */}
// {/* introduction */}
    )
}




const fetchIt = ()=>{


    const createAndPublishData = async (tData) => {
  // Create the list
//   console.log(tData);
//   let stringifyData = `"${tData}"`
// let stri = JSON.stringify({tData})
//   console.log(stringifyData);
// console.log(tData);
// const dataToBeSentToHygraph = {
// createAt:tData.created_at,
// fields:tData.fields,
// lastUpdatedAt:tData.last_updated_at,
// pulishedAt:tData.published_at,
// title:tData.title,
// welcomeScreen:tData.welcome_screens,
// thankYou:tData.thankyou_screens
// }
const dataToBeSentToHygraph = {
     key1: "value1",
      key2: "value2",
      nestedObject: {
        subkey1: "subvalue1"
}
}
// console.log(dataToBeSentToHygraph);

// return

  

  const createResponse = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer '+ key,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
       mutation {
  createTypeformQuiz(data: {
    questions:"${JSON.stringify(dataToBeSentToHygraph)}"
  }) {
    id
    questions
  }
}
      `,
    }),
  });

  const createResult = await createResponse.json();
//   console.log(createResult);
  const contactId = createResult.data.createTypeformQuiz.id;

  // Publish the contact
  const publishResponse = await fetch(hygraphEndpoint, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer '+ key,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `


         mutation {
        publishTypeformQuiz(where: {id: "${contactId}"}) {
        listOfQuestions
        id
        }
        }
      `,
    }),
  });

  const publishResult = await publishResponse.json();
//   console.log(publishResult);
};

//     useEffect(()=>{
//     //   console.log("lets see");
      
// // console.log(data);
// // console.log(storeData?.fields);

//     },[data])

// useEffect(()=>{
// createAndPublishData();

// return ()=> createAndPublishData();
// },[typeformData])




//   const formerClass = "flex min-h-screen flex-col items-center justify-between p-24"

//   useEffect(()=>{

// window.scrollTo({top:windowHeight,behavior:"smooth"})
// console.log(windowHeight);

//   },[windowHeight])

//   const handleScroll = ()=>{
//     const height = window.innerHeight
//     console.log("play");
//     if (windowHeight === 0) {
//       setWindowHeight(window.innerHeight)
//       return
//     }
//    setWindowHeight(prev => prev + height)
//   }

  // if (!user) {
  //   router.push("/quiz")
  //   return
  // }


// mutation contact {
//   createContact (
//     data:{
//       firstname:"jokerhere",
//     }
//   )
//   {
//     id
//   }
// }
// const mutate = async ()=>{
// const mutationQuery =`
//  query {
//   contacts {
//     id
//     firstname
//   }
// }

// `
// const response = await hygraphClient.request(mutationQuery)
// console.log(response);

// }


// useEffect(()=>{
// // mutate()
// // return ()=> mutate()
// },[])

// useEffect(()=>{
// // console.log(storeData?.welcomeScreens[0]?.properties.description.split("\n\n").join("\n\n"));

// },[])

}


