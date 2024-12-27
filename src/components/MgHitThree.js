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


const MgHitThree = ({dataFromTypeForm}) => {
const [typeformData,setTypeFromData] = useState(dataFromTypeForm)
// const [storeData] = useLocalStorage(typeformData || [])
const [dataPosted,setDataPosted] = useState(false)
const [questionsToDisplay,setQuestionsToDisplay] = useState([])
const [step,setStep] = useState(0)
const [startQuiz,setStartQuiz] = useState(false)
const [optionsChecked,setOptionsChecked] = useState([])
const [possibleOptions,setPosibleOptions] = useState (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ"])

const eachQuestAndFeedback =useRef([]) 

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
});

useEffect(()=>{
overwriteAndPublishQuest(dataFromTypeForm);
},[])

    const deleteQuestMutation = gql`
 mutation deleteMgHitThree($id: ID!) {
    deleteMgHitThree(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createMgHitThree($data: MgHitThreeCreateInput!) {
    createMgHitThree(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishMgHitThree($id: ID!) {
    publishMgHitThree(where: { id: $id }) {
      id
      placeholder
      publishedAt
    }
  }
`;



useEffect(()=>{
async function tryT() {
        const data = {
  placeholder: {name:"james"}
   
};
      const newQuest =await client.request(createQuestMutation, { data })
    // const newQuest = await client.request(createQuestMutation, {
    //   fields: newData,
    // });
    const questId = newQuest.createMgHitThree.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingMgHitThrees {
   mgHitThrees {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.mgHitThrees.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.mgHitThrees[0].id;
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
    const questId = newQuest.createMgHitThree.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishMgHitThree.id) {
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


    useEffect(()=>{
console.log(dataFromTypeForm);

    },[dataFromTypeForm])

  useEffect(() => {
    if (!dataPosted) {
      return
    }
    const fetchMgHitData = async () => {
      const query = gql`
        query {
            mgHitThrees {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.mgHitThrees[0]);
        setQuestionsToDisplay(getData.mgHitThrees)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchMgHitData();
  }, [dataPosted]);


useEffect(()=>{
document.body.style.overflow = "hidden"
window.scrollTo({top:0,behavior:"smooth"})
},[])

useEffect(()=>{
console.log(questionsToDisplay[0]?.placeholder?.fields?.length);
console.log("steps",step);


},[step])

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
  )
}

export default MgHitThree
