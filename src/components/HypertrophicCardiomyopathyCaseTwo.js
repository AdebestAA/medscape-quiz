"use client"
// formFromTypeform 11
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


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm4ftvlom024207tfzovys3id/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzM3NDg3NDIsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY200ZnR2bG9tMDI0MjA3dGZ6b3Z5czNpZC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiNWFiZDQ1NDctY2JhMi00YmUxLWI4ZTctNTliMTUzZmRkOTQ1IiwianRpIjoiY200aDE4amhmMWEyZDA2bWY0dTlrM2hsYyJ9.iohXDOrow_9R_fvh4BYoS8AmOzUKD8-BMJ_xsLCiYRJEkvHo4w287W9LHhBdFhFREzgUz9t130tJaz0MnRXSoThWLLoHxcPnIlpj2d5yq3nAb2imTrWCCp0eWRQORgX95krEOl2Uap8IovxWEDViZg07XyG_7Q2x6R41NK30u25qWx0hM2BH_3A0lZvYRoKXh--ae-MurpeE07ZBVFCBuAwpS5FgDLVkgVOVF42L1rYHPzjgkdjkr_kIYn-eYXf3SMBfWCryy3kmU2EqmrnKa_jD7c8_8RPKbSJ44KqaEq9ECjgObncEwIKLYbGvH5Q0hoVSVJQxqmByuq2brCB01uOfraiHo6MY3B9S3aopfHqcoO3FjTT6F7KARO_ZCqk_FXUGIUpDfQSnHwEqoOMqK75SymPRizfpsGiKETCDIBsqu1NGSym-aVn2AJ7z4ToSEIM3tS781WPeBVoIaLZTIA_LGrCfKyqJ9eK5Elel3qWlE5lrkbfCzODFRtb3ET7vxzf0A_PLworUY-8AMFyViJKl20XfzyNxS8_euNR1FUl6hWsTZ8pRJoka1Rai7mwL8DjOvpu7B3hNJ7Lrd4iBjW-oqMrheqC-oSzIB4dWOLoA0HMl6vwAFFPgrmsXgfbXoGil-GZFJzRojbDf-GtWGhDPMX_75FUcoEtb3PE0vtE"


const HypertrophicCardiomyopathyCaseTwo = ({dataFromTypeForm}) => {
const [typeformData,setTypeFromData] = useState(dataFromTypeForm)
// const [storeData] = useLocalStorage(typeformData || [])
const [dataPosted,setDataPosted] = useState(false)
const [questionsToDisplay,setQuestionsToDisplay] = useState([])
const [step,setStep] = useState(0)
const [startQuiz,setStartQuiz] = useState(false)
const [optionsChecked,setOptionsChecked] = useState([])
const [possibleOptions,setPosibleOptions] = useState (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ"])

const eachQuestAndFeedback = useRef([]) 


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
 mutation deleteHypertrophicCardiomyopathyCaseTwo($id: ID!) {
    deleteHypertrophicCardiomyopathyCaseTwo(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createHypertrophicCardiomyopathyCaseTwo($data: HypertrophicCardiomyopathyCaseTwoCreateInput!) {
    createHypertrophicCardiomyopathyCaseTwo(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishHypertrophicCardiomyopathyCaseTwo($id: ID!) {
    publishHypertrophicCardiomyopathyCaseTwo(where: { id: $id }) {
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
    const questId = newQuest.createHypertrophicCardiomyopathyCaseTwo.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingHypertrophicCardiomyopathyCaseTwos {
  hypertrophicCardiomyopathyCaseTwos {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.hypertrophicCardiomyopathyCaseTwos.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.hypertrophicCardiomyopathyCaseTwos[0].id;
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
    const questId = newQuest.createHypertrophicCardiomyopathyCaseTwo.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishHypertrophicCardiomyopathyCaseTwo.id) {
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
    const fetchHypertrophicCardiomyopathyCaseTwoData = async () => {
      const query = gql`
        query {
            hypertrophicCardiomyopathyCaseTwos {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.hypertrophicCardiomyopathyCaseTwos[0]);
        setQuestionsToDisplay(getData.hypertrophicCardiomyopathyCaseTwos)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchHypertrophicCardiomyopathyCaseTwoData();
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

export default HypertrophicCardiomyopathyCaseTwo