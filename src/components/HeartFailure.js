"use client"

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


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm3fzwvzf015n07w0zyawmq65/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzE1ODA3NzAsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20zZnp3dnpmMDE1bjA3dzB6eWF3bXE2NS9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiMTY4Y2FjMTgtMjhkNy00NzZiLWE5NDAtNjQ3NGE4OTNiNjE3IiwianRpIjoiY20zaDZoZHFiMGY3ZjA2bDJndTZpNDQybCJ9.L563sxDS1Z_VJw42ARHSNqvmbv1Z_rT8KECRbyPPpwZwI9Q9f8jBoAcrVHZ_BGfM4qHHSS87mrIe7z4nPsy7Lcd8w-5c6nOOz4jQoHAVZAvpVuwVLoCnvFXy2a_G8V1bOfiwyJ4zsTKq1tvo0Ct5ax2Fh26GJ2v6K8QLtRHmLtF-NfTCY5OEh6Yi3MgVvh-nAC0dtntgFFaukW431WCjjCFjvVJf_hlXFIuSaod0L_LIRCdLeqrU6sPTC70PBlPUrP8J-j6p0KQcBIoKApfK7We-F0_U6BADFUKpOO2vPdrNQ7rMCOZkJ67CjuNnqxxoji2JV6kENeaz9eHoSqCqZGRKTnvhh-1jykW_Dx2ac5h4ANGReBNUSTfZOjwCEzOffL-tOfaOdviSHjL4tg6WK1GvYp3NwGOjSvZVoX3NuLwZaf0wpGlrgleoZaJyAe5nB_ApsXtbCGGRaElQ7wTp77OE5vqLqfUFyYVM_O_EFrXn-toeZxnOi6a0QqdGT4jbAC5CKB2lThWu62e8JF34N6qD6X9oCShKLao0GBc8Jc7G1gPft2YrCZRbzJgJUX7p6BgX88IxVy8l3BFcmO_0IRtWTuSLTMDY2l-CCMV-ixmWX8wVZi28QMGOG3NZE28zPdHTlfEGoqxgrhQWggjVRTlReFQzUuIXlKyuhz0sJhc"


const HeartFailure = ({dataFromTypeForm}) => {
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
 mutation deleteHeartFailure($id: ID!) {
    deleteHeartFailure(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createHeartFailure($data: HeartFailureCreateInput!) {
    createHeartFailure(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishHeartFailure($id: ID!) {
    publishHeartFailure(where: { id: $id }) {
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
    const questId = newQuest.createHeartFailure.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingHeartFailures {
   heartFailures {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.heartFailures.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.heartFailures[0].id;
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
    const questId = newQuest.createHeartFailure.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishHeartFailure.id) {
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
    const fetchHeartFailureData = async () => {
      const query = gql`
        query {
            heartFailures {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.heartFailures[0]);
        setQuestionsToDisplay(getData.heartFailures)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchHeartFailureData();
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

export default HeartFailure
