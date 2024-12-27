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
// import Link from "next/link";


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm2unc4yb04yb07w352l3g1zt/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzAyOTI2MzMsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20ydW5jNHliMDR5YjA3dzM1MmwzZzF6dC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZGE5NWUzYTItZTVlZS00YjZhLTliODEtZGQyYzNlZWYyMzMwIiwianRpIjoiY20ydnZrNGF1MDJpYTA3bWxmdHJlN21pMSJ9.AqQGVz4X8WP3kp6r0KD8h3GoZ8xMkHJIZR_KEVkzvDaEAt0uGwXPqCYrwFsdr719X7n4V9HVDzJYo4HO2PAOcGRV3k43XPw9lsdo7SCVEo37kwp4XcDXxzIqL4PyW6o53oAZpkuGUMhycJ6_6-EkLexxld8NiFJ24wG_VF8SeTyl3YJXDXcsW1mM5YYyTzCg94HfhRYEyxdVuiMvcavcT1DUYcOSNBMAXuNZEIdmSGHLoZHZI-GwWqh9ad_VkNYZbN1-5vqkqMWkIycz5nW4geKIf5Oim_OTmKjKNjRKKRXb9ySGGd25_5v71amCSLx7dTFMAVNvXU7b1JRUYS6aDoz6G7qKEtofB0dSMVjYYPdgeHJhxrnmwXc_q1KCKwEUsMP8rZTyhwSH1nI8M6MUZW9JYW2lrpd3JFAGbK4oEQfeTM0UTJmLn2XWwghdpeIvzJrvmUv2cqLRvkNqPlnmN4V_jbiNa_OLHtcywY9iU6ybO_p4XvOdmJSduDWiJJTphz5IIm2xvvAU4MuEsb8MlczSCvJp0hjUU9B2DR12cER-gRrcLojTes7JtkTGKRthx9ZbbA-gZHzUFUhPQlNzzFEOeseAJ_EKNDF7OdgM-SieYe2KZB9t_Nyd9SLZSWni3XmHnaAhdabvnNknX5jmaAiH5zLw2Xg8560uaohaIEc"


const NAhusCaseThree = ({dataFromTypeForm}) => {
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
 mutation deleteNAhusCaseThree($id: ID!) {
    deleteNAhusCaseThree(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createNAhusCaseThree($data: NAhusCaseThreeCreateInput!) {
    createNAhusCaseThree(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishNAhusCaseThree($id: ID!) {
    publishNAhusCaseThree(where: { id: $id }) {
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
    const questId = newQuest.createNAhusCaseThree.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingNAhusCaseThrees {
   nAhusCaseThrees {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.nAhusCaseThrees.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.nAhusCaseThrees[0].id;
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
    const questId = newQuest.createNAhusCaseThree.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishNAhusCaseThree.id) {
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
    const fetchNAhusCaseThreeData = async () => {
      const query = gql`
        query {
            nAhusCaseThrees {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.nAhusCaseThrees[0]);
        setQuestionsToDisplay(getData.nAhusCaseThrees)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchNAhusCaseThreeData();
  }, [dataPosted]);

useEffect(()=>{

console.log("each",eachQuestAndFeedback.current);
},[questionsToDisplay,eachQuestAndFeedback.current])
useEffect(()=>{
document.body.style.overflow = "hidden"
window.scrollTo({top:0,behavior:"smooth"})

},[])

useEffect(()=>{
console.log(questionsToDisplay[0]?.placeholder?.fields?.length);
console.log("steps",step);

},[step])
useEffect(()=>{
console.log(optionsChecked);

},[optionsChecked])

const handleScroll = ()=>{


window.scrollTo({top:window.scrollY + eachQuestAndFeedback.current[step].getBoundingClientRect().top,behavior:"smooth"})
}
useEffect(()=>{
// if (!questionsToDisplay[0]?.placeholder.welcome_screens) {
// setStartQuiz(true)
// } 
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

export default NAhusCaseThree
