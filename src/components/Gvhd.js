"use client"
// formFromTypeform 6
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GraphQLClient, gql, } from 'graphql-request';
import useLocalStorage from "@/CustomHooks/UseLocalStorage";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import VimeoPlayer from "./VimeoComponents/VimeoPlayer";
import { IoIosArrowRoundForward } from "react-icons/io";
import TypeformFormatJsx from "./TypeformFormats/TypeformFormatJsx";
// import Link from "next/link";


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm3z5pml9015h07upn1uf1j7w/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzI3MTQ4MjIsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20zejVwbWw5MDE1aDA3dXBuMXVmMWo3dy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNGIzODQ3M2QtZjc2ZS00NWVjLWJkNGEtMzFjZjdhYmNkYzg2IiwianRpIjoiY20zenhvMXRlMGY4MDA3bDhmcTVkY2poMSJ9.jtx8in3exZf3ZAVnta7DlmbevUbxchP9dJYezfb8orH2o-DJkWQ1qThkwb7T0pOBQe5F4xoSBvV0wZhoK0g-ZdAPZ2wCxEDNUTgsYo3dXLMjohZP0dsYK5WIOBzX70MqMSqvaljk6oZQA1aSdQ9GBGTs39uc_-d8SHMSXjWubIXNtCQDT1MiRbetGmVZcOzXObtkLFIxiQq5Qfi1sOEgNGpbo77-M3pGsyWd1gokl3gHWhyq2QeF60_Rs9trzksCJA86zrbF2rBYCnu51mnHvY46W8T3iCPs02oZAUz3Aw9qtgOn6EOLNDhACoDpSRT74UVqmPipVxyU2ZcsdIVBV9vtlwMRe05Mi92gM3m1IMDZyqNDFnbV1oGaxYqsVFVQctyOWd_cBm6arjctdskTF5J1UJpThjIt6TzxS2eRRhe9ND9cIlL0fZLSiC_MZZenQ5vnq8qriznRVZrVTjBnS5BuNCCdseAnSYx8v9mv6uzkIgK2fFOpyM_-1MdrqFdCMtO9wCiekcLRqlMyg84CCWArQ7pEKbsILPMK_qctQFXVM4x0eHMxNAWP1ZFSRGWj9zammSVbhIUwAav5B9xjFTM-jau5nXxwL_BmkTGMaI8Tci-l-XiZKYB5Rdq3RMxY02xAoOhDBnkDAcnoxfgrH-Z6cp6NrYX2IPVAbLWi4mE"


const Gvhd = ({dataFromTypeForm}) => {
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

useEffect(()=>{
console.log(dataFromTypeForm);

},[dataFromTypeForm])

    const deleteQuestMutation = gql`
 mutation deleteGvhd($id: ID!) {
    deleteGvhd(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createGvhd($data: GvhdCreateInput!) {
    createGvhd(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishGvhd($id: ID!) {
    publishGvhd(where: { id: $id }) {
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
    const questId = newQuest.createGvhd.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingGvhds {
   gvhds {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.gvhds.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.gvhds[0].id;
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
    const questId = newQuest.createGvhd.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishGvhd.id) {
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
    const fetchGvhdData = async () => {
      const query = gql`
        query {
            gvhds {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.gvhds[0]);
        setQuestionsToDisplay(getData.gvhds)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchGvhdData();
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

export default Gvhd