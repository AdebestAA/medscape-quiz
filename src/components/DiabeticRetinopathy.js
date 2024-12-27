"use client"
// formFromTypeform 8
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


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm46u52my045u07uwdxi1u2ep/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzMxMzk4NjMsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY200NnU1Mm15MDQ1dTA3dXdkeGkxdTJlcC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZmVjNDVmOWItODlmMy00NmMyLThhZWMtYmY5NTY0NTNkMTZiIiwianRpIjoiY200NnlxNTJ3MHh6azA3bDZkNTZqM2UxbCJ9.R6ZRFQlT8e4k4cyBcKmXZJQ0MYASAWE076foIQTCe8aaKzO4zhiJlJ5NG795eRpFCUmevxHIjaW4f2j0udWiqGHx5JN9Y6cNFtllaLfa6n1ugDpamPLoHTDaSXxyclMPe-I3y6stgS4SgJyBd1Jxk9D6DipOc8laXWEHH3kc6kBXZuKEJQSFz8CC16DZaQSIMJD17_MqXjwcjW9tTjAAW0Y6zr3j9297o8CdPF22FJVDOl4EOkXxj-EmARKWUEnAX8CIJQwQUmnX65JwsE1trV5SoXUNDZXn_XRdCec_oI3Knt4LVk_gqePGrHljUouD2-1dpiyz79JtJctuJPVxPcEcxsEn0wzw9Mx2LeWo4ow3uZ4T85bHqWGsVUchFN25C63INw66vhYIPrMZOTiAzyTtHN4aMY6ebYAxffOhbISFNSVhya26bS8JiSvf9AyDJ18pMPHIAT9nPONI0HndUWQOKw-qxck1l09pOMRFbnhAPpi-xIozhe6NB-mYMzMXS3fL7X5ADlE6IlUXSMMKBgS-pVWhtkdXqxebPpihhbsSMnAdBG-PjEaUnyTbNHwdng2tizx5D9narp22zYY7MUpkxzNv_ipPxfuNXcdjvi8qDueIeLjmknD10Gb9qmryMvJITq_Z6m7GJlJtp0T6FjQFdJOU8FuiXRj-hgyODg4"


const DiabeticRetinopathy = ({dataFromTypeForm}) => {
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
 mutation deleteDiabeticRetinopathy($id: ID!) {
    deleteDiabeticRetinopathy(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createDiabeticRetinopathy($data: DiabeticRetinopathyCreateInput!) {
    createDiabeticRetinopathy(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishDiabeticRetinopathy($id: ID!) {
    publishDiabeticRetinopathy(where: { id: $id }) {
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
    const questId = newQuest.createDiabeticRetinopathy.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingDiabeticRetinopathies {
   diabeticRetinopathies {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.diabeticRetinopathies.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.diabeticRetinopathies[0].id;
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
    const questId = newQuest.createDiabeticRetinopathy.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishDiabeticRetinopathy.id) {
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
    const fetchDiabeticRetinopathyData = async () => {
      const query = gql`
        query {
            diabeticRetinopathies {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.diabeticRetinopathies[0]);
        setQuestionsToDisplay(getData.diabeticRetinopathies)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchDiabeticRetinopathyData();
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

export default DiabeticRetinopathy