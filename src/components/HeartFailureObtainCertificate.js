"use client"
// formFromTypeform 12
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


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm4kgtvdo00v807wfv0mwspuo/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzQwMDAxNzcsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY200a2d0dmRvMDB2ODA3d2Z2MG13c3B1by9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNGMyOTE1OTMtYWJiZS00YmUxLTgwYjctMzYwN2E2MjhmYTY5IiwianRpIjoiY200bDZ4bm1mMGd2dTA3bXFiZ20zN25qZCJ9.TL4coEPfZoPdqXxUn93JUqGS4ag9RoJFnRunuLafZXN-HwERxbe3qdzBGDROBASkKrnz7xNC1-OfZSJNcrDGCvK0Ujv5V90SSHBiPqVXIL5vI6Gr-xS7YoNYpBsrH_WRWd6V6sxD9EgFxBNtwRZCfqDKSAODSrWsCtS5iv8QOPn_kP3qsVwXozJ1edkQSfqOzvINE2Uy0xDjXRXUJnFnGmblp9VILulo3hFeWx9mym38rilTMiI6cO77ydcVoCi1hJmY4up2JC-BtVng7H_d9AwnY6b5fxht0tfJPUSZHLlqdTWHw3YopekHMIHrPEPGt9NEZWsUtR16gZFyHe8Cs5AjBldKgxXr5Oovp6nzqOWNki6OTcfOo5Zeed32I2j33uxb8XTEO0P-_n6ZLTEYykhW2kTrlOBKG_-rCfeGgI5emSkXVCfkX4W9IYe-o60Km7vyezF9ZvA0WxkhfilENF6jXvVKwgXL0OYe5RPlLK2NLxDg2u7RDCP7orXWKEKKKeBQOBap_eJojZ68TYzuyvj7lQo-HVZEMCZvlrLrxzIt5PIAYE4cmxXs_BtGj-HonTv6JrcSEqzvnBXYpupc904mEsmgYHQaTflw0gPgFes83iYlF7IEhzEkS7sQ_Krm7DQ5CbnJ4LcNmCRDNHk9UZfPb_trqol0xX6xH7Jiuqs"


const HeartFailureObtainCertificate = ({dataFromTypeForm}) => {
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
 mutation deleteHeartFailureObtainCertificate($id: ID!) {
    deleteHeartFailureObtainCertificate(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createHeartFailureObtainCertificate($data: HeartFailureObtainCertificateCreateInput!) {
    createHeartFailureObtainCertificate(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishHeartFailureObtainCertificate($id: ID!) {
    publishHeartFailureObtainCertificate(where: { id: $id }) {
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
    const questId = newQuest.createHeartFailureObtainCertificate.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingHeartFailureObtainCertificates {
  heartFailureObtainCertificates {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.heartFailureObtainCertificates.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.heartFailureObtainCertificates[0].id;
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
    const questId = newQuest.createHeartFailureObtainCertificate.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishHeartFailureObtainCertificate.id) {
      return true
    }
    else{
      return false
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
    const fetchHeartFailureObtainCertificateData = async () => {
      const query = gql`
        query {
            heartFailureObtainCertificates {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.heartFailureObtainCertificates[0]);
        setQuestionsToDisplay(getData.heartFailureObtainCertificates)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchHeartFailureObtainCertificateData();
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

export default HeartFailureObtainCertificate