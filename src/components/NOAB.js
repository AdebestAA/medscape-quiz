"use client"

import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GraphQLClient, gql, } from 'graphql-request';
import useLocalStorage from "@/CustomHooks/UseLocalStorage";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
// import Link from "next/link";


const endpoint = "https://eu-west-2.cdn.hygraph.com/content/cm2unc4yb04yb07w352l3g1zt/master";
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzAyOTI2MzMsImF1ZCI6WyJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY20ydW5jNHliMDR5YjA3dzM1MmwzZzF6dC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1ldS13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiZGE5NWUzYTItZTVlZS00YjZhLTliODEtZGQyYzNlZWYyMzMwIiwianRpIjoiY20ydnZrNGF1MDJpYTA3bWxmdHJlN21pMSJ9.AqQGVz4X8WP3kp6r0KD8h3GoZ8xMkHJIZR_KEVkzvDaEAt0uGwXPqCYrwFsdr719X7n4V9HVDzJYo4HO2PAOcGRV3k43XPw9lsdo7SCVEo37kwp4XcDXxzIqL4PyW6o53oAZpkuGUMhycJ6_6-EkLexxld8NiFJ24wG_VF8SeTyl3YJXDXcsW1mM5YYyTzCg94HfhRYEyxdVuiMvcavcT1DUYcOSNBMAXuNZEIdmSGHLoZHZI-GwWqh9ad_VkNYZbN1-5vqkqMWkIycz5nW4geKIf5Oim_OTmKjKNjRKKRXb9ySGGd25_5v71amCSLx7dTFMAVNvXU7b1JRUYS6aDoz6G7qKEtofB0dSMVjYYPdgeHJhxrnmwXc_q1KCKwEUsMP8rZTyhwSH1nI8M6MUZW9JYW2lrpd3JFAGbK4oEQfeTM0UTJmLn2XWwghdpeIvzJrvmUv2cqLRvkNqPlnmN4V_jbiNa_OLHtcywY9iU6ybO_p4XvOdmJSduDWiJJTphz5IIm2xvvAU4MuEsb8MlczSCvJp0hjUU9B2DR12cER-gRrcLojTes7JtkTGKRthx9ZbbA-gZHzUFUhPQlNzzFEOeseAJ_EKNDF7OdgM-SieYe2KZB9t_Nyd9SLZSWni3XmHnaAhdabvnNknX5jmaAiH5zLw2Xg8560uaohaIEc"


const NOAB = ({dataFromTypeForm}) => {
const [typeformData,setTypeFromData] = useState(dataFromTypeForm)
// const [storeData] = useLocalStorage(typeformData || [])
const [dataPosted,setDataPosted] = useState(false)
const [questionsToDisplay,setQuestionsToDisplay] = useState([])
const [step,setStep] = useState(0)
const [startQuiz,setStartQuiz] = useState(false)
const [optionsChecked,setOptionsChecked] = useState([])
const [possibleOptions,setPosibleOptions] = useState (["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD"])

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
 mutation deleteNOab($id: ID!) {
    deleteNOab(where: { id: $id }) {
      id
    }
  }
`;

// Mutation to create a new entry
const createQuestMutation = gql`
 mutation createNOab($data: NOabCreateInput!) {
    createNOab(data: $data) {
      id
      placeholder
    }
  }
`;

// Mutation to publish the new entry
const publishQuestMutation = gql`
  mutation publishNOab($id: ID!) {
    publishNOab(where: { id: $id }) {
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
    const questId = newQuest.createNOab.id;
    console.log('New quest created:', newQuest);
}
// tryT()
},[])
const overwriteAndPublishQuest = async (newData) => {
  try {
    // Step 1: Query to check for existing entries
    const getExistingQuestQuery = gql`
    query getExistingNOabs {
   nOabs {
    id
    placeholder
    }
    }
    `;

    const existingData = await client.request(getExistingQuestQuery);

    if (existingData.nOabs.length > 0) {
      // Step 2: Delete the existing quest
      const questId = existingData.nOabs[0].id;
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
    const questId = newQuest.createNOab.id;
    console.log('New quest created:', newQuest);

    // Step 4: Publish the new quest
    const publishedQuest = await client.request(publishQuestMutation, {
      id: questId,
    });
    console.log('Quest published:', publishedQuest);
    console.log(publishedQuest.id);
    
   setDataPosted(()=> {
    if (publishedQuest.publishNOab.id) {
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
    const fetchNOabData = async () => {
      const query = gql`
        query {
            nOabs {
            id
            placeholder
            }
        }
      `;

      try {
        const getData = await client.request(query);
        console.log('Fetched Quest Data:', getData);
        console.log(getData.nOabs[0]);
        setQuestionsToDisplay(getData.nOabs)
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   fetchNOabData();
  }, [dataPosted]);


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
  <main className={"bg-[#EFEFEF] text-[#403D99]  h-[100%]"}>
{/* scroll up and down btn */}

<div className=" fixed space-x-[2px] bottom-[10%] right-[5%]">
    <button className="bg-green-800 px-4 py-2 rounded-md" 
    onClick={()=>{
    if (!startQuiz) {
    return
}
    if (step + 1  == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    setStep(prev => prev + 1)
}}
    ><IoIosArrowDown className="text-white"/></button>
    <button className="bg-green-800 px-4 py-2 rounded-md" 
    onClick={()=>{
        if (!startQuiz) {
            return
        }
        if (step == 0) {
            return
        }
        setStep(prev => prev - 1)
    }}
    ><IoIosArrowUp className="text-white"/></button>
</div>

<div className="text-center px-64 text-lg flex flex-col items-center justify-center min-h-screen">
{/* <h1 className="font-bold text-[navy] text-[2rem] px-32">{questionsToDisplay[0]?.placeholder?.welcome_screens[0].title.split("*").join("")}</h1> */}
{/* <article>{questionsToDisplay[0]?.placeholder?.welcome_screens[0]?.properties.description.split("\n").map((item,index)=>{

if (index === 0) {
    return <p key={index} className="mt-4  text-[0.95rem]">
        {item.split("*").map((ash,ashInd)=>{
          if (ash.trim() === "argenx, US".trim()) {
            return (
              <span key={ashInd} className="font-bold">{ash}</span>
            )
          }
          return (
            <span key={ash}>{ash}</span>
          )
        })}
    </p>
}
    return <p key={index} className="mt-4  text-[0.95rem]">
        {item}
    </p>
})}</article> */}

{questionsToDisplay[0]?.placeholder?.welcome_screens.map((welItem,welIndex)=>{

return (

<article className="w-[80%] text-2xl " key={welItem.id}>
{welItem.title.split("\n").map((titleItem,index)=>{
    if (index === 0) {
        return (
            <p className=" font-bold w-full my-4" key={index}>{titleItem}</p>
        )
    }
return (
<h1 key={index} className="font-extrabold text-center py-2">
    {titleItem.replace("*", "")}
</h1>
)

})}
<span className="text-sm w-full block my-2 leading-loose">{welItem.properties.description}</span>
{welItem.properties.show_button && 
<footer>

<button className="bg-green-800 text-white py-2 px-4 rounded-md"
onClick={()=>{
    setStartQuiz(true)
}}
>{questionsToDisplay[0]?.placeholder?.welcome_screens[0]?.properties.button_text}</button>

</footer>
}
</article>

)


})}
</div>


{/* questions */}


{
<div>
{questionsToDisplay[0]?.placeholder?.fields?.map((quest,index)=>{


// MATRIX
if (quest.type == "matrix") {
   return (
    <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" px-64 py-16 text-lg flex flex-col items-center justify-center  h-screen overflow-y-scroll space-y-4 ">
<p className="w-full">{quest.title}</p>
{/* options btn */}
<div className="w-full">
 {quest.properties.fields.map((option,optionIndex)=>{

return (
    <article key={option.title} className="flex justify-between w-full bg-[#D7DDE8] rounded-md px-2 py-4 my-2">
<p className="w-[50%] text-lg text-bold">{option.title}</p>
<aside className="w-[50%] flex justify-evenly">
{option.properties.choices.map((radioOpt,radioOptIndex)=>{

return (
    <span key={radioOptIndex}>
    <input type="radio"
    value={"option" + radioOptIndex +1 }
    id={"option" + radioOptIndex + 1}
    name={option.title}
    key={radioOpt?.id}
      onChange={(e)=>{
        if (optionsChecked.includes(e.target.name)) {
            return
            // const removeItem = optionsChecked.filter(item => item !== e.target.name)
            // setOptionsChecked(removeItem)
            // return
        }
setOptionsChecked([...optionsChecked,e.target.name])
      }}
     className="w-[25px] h-[20px]"/>
    </span>
)
})}
</aside>


    </article>
)

 })}    
 {/* <h1>Comment out</h1> */}

</div>
<footer className="flex justify-start w-full">
    <button className="bg-green-800 text-white py-2 px-4 rounded-md" 
    
    onClick={()=>{

   if (step + 1  == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    setStep(prev => prev + 1) 
}}>OK</button>
</footer>
    </aside>
   )



}

// MULTIPLE CHOICE

else if (quest.type === "multiple_choice") {
     return (
    <aside  ref={el => eachQuestAndFeedback.current[index] = el}  key={quest?.id} className=" text-lg  h-screen overflow-y-scroll">
        <div className="flex flex-col items-center justify-center w-full px-64 min-h-screen"> 

        
<h1 className="w-full text-start font-bold my-4" >{quest.title}</h1>

<div className={`flex justify-between w-full ${quest?.properties?.choices?.length  < 8 ? "flex-col flex-start" : "flex-wrap"}`}>

{quest?.properties?.choices?.map((choice,choiceIndex)=>{
    
    let option = possibleOptions[choiceIndex]
    // if (choiceIndex == 1) {
    //     option = "B"
    // }
    // else if (choiceIndex === 2) {
    //     option = "C"
    // }
    // else if (choiceIndex === 3) {
    //     option = "D"
    // }
    // else if (choiceIndex === 4) {
    //     option = "E"
    // }
    // else if (choiceIndex === 5) {
    //     option = "F"
    // }
    // else if (choiceIndex === 6) {
    //     option = "G"
    // }
    // else if (choiceIndex === 7) {
    //     option = "H"
    // }
    
    // else if (choiceIndex === 8) {
    //     option = "I"
    // }
    // else if (choiceIndex === 9) {
    //     option = "J"
    // }
    
    return (
        
        <aside key={choice.id} className={`my-2 ${choice.length  < 50 ? " w-[30%]" : " w-[100%]"}  rounded-sm text-start text-[0.95rem] border-[2px] border-[navy] flex items-start px-2 py-2 gap-x-2 bg-[#D7DDE8] hover:bg-[#A6BCDA]  cursor-pointer`}
        onClick={()=>{
            if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
                return
            }
            
            setStep(prev => prev + 1)
        }}
        >
  <span className="border-[2px] border-[navy] px-2 rounded-sm " 
  >{option}</span> 
  <p>
     {choice.label}
    </p>
    </aside>
    
)

})}
</div>
<div className='w-full flex flex-start my-6'>

<button
onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    </div>
</aside>
    )
}


// CONTACT INFO
else if (quest.type === "contact_info") {
 return (

    <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" px-64 py-16 text-lg flex flex-col items-center justify-center  h-screen overflow-y-scroll space-y-4 ">
        <header className="text-start w-full">
        <h1 >{quest.title.replace("*","")}</h1>
        <aside>{quest.properties.description?.split("*").map((desc,descIndex)=>{
            if (desc.includes("https:")) {
                return (
                    <a key={descIndex} className="font-bold underline" href={desc.replace("[privacy policy]","").replace("(","").replace(")","")} > privacy policy </a>
                )
            }
return (
    <span key={descIndex}>{desc}</span>
)

        })}</aside>
        </header>
<form className="w-full">
    {quest.properties.fields.map((info,infoIndex)=>{

return (
    <div key={infoIndex} className="w-full my-2">
<label htmlFor={info.title}>{info.title}</label>
<input 
type={info.type === "email" ? "eamil" : "text"}
id={info.title}
className="border-b-2  w-full border-[#403D99] bg-[#EFEFEF] py-2 text-lg outline-none"

 />
</div>
)
    })}
</form>

  <div className='w-full flex flex-start'>

<button
onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    </aside>
 )
    

}



// ADDRESS 
else if (quest.type == "address") {
 return (

    <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" px-64 py-16 text-lg flex flex-col items-center justify-center  h-screen overflow-y-scroll space-y-4 ">
        <header className="text-start w-full font-bold">
        <h1 className="">{quest.title.replace("*","")}</h1>
        <aside>{quest.properties.description?.split("*").map((desc,descIndex)=>{
            if (desc.includes("https:")) {
                return (
                    <a key={descIndex} className="font-bold underline" href={desc.replace("[privacy policy]","").replace("(","").replace(")","")} > privacy policy </a>
                )
            }
return (
    <span key={descIndex}>{desc}</span>
)

        })}</aside>
        </header>
<form className="w-full">
    {quest.properties.fields.map((info,infoIndex)=>{

return (
    <div key={infoIndex} className="w-full my-2">
<label htmlFor={info.title}>{info.title}</label>
<input 
type={info.type === "email" ? "eamil" : "text"}
id={info.title}
className="focus:border-b-2 border-b-[1px]   w-full border-[#403D99] bg-[#EFEFEF] py-2 text-lg outline-none"

 />
</div>
)
    })}
</form>

  <div className='w-full flex flex-start'>

<button
onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    </aside>
 )
    

}


// SHORT TEXT 
else if (quest.type == "short_text") {
 return (

    <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" px-64 py-16 text-lg flex flex-col items-center justify-center  h-screen overflow-y-scroll space-y-4 ">
        <header className="text-start w-full">
        <h1 className="font-bold">{quest.title.replace("*","")}</h1>
        <aside>{quest.properties.description?.split("*").map((desc,descIndex)=>{
            if (desc.includes("https:")) {
                return (
                    <a key={descIndex} className="font-bold underline" href={desc.replace("[privacy policy]","").replace("(","").replace(")","")} > privacy policy </a>
                )
            }
return (
    <span key={descIndex}>{desc}</span>
)

        })}</aside>
        </header>
<form className="w-full">

    <div>
        {/* <label htmlFor={quest.title}>{quest.properties.description}</label> */}
<input 
type={quest.type === "email" ? "eamil" : "text"}
id={quest.title}
className="focus:border-b-2 border-b-[1px]  w-full border-[#403D99] bg-[#EFEFEF] py-2 text-lg outline-none"

 />
    </div>
    {/* {quest.properties.fields.map((info,infoIndex)=>{

return (
    <div key={infoIndex} className="w-full my-2">
<label htmlFor={info.title}>{info.title}</label>
<input 
type={info.type === "email" ? "eamil" : "text"}
id={info.title}
className="border-b-2  w-full border-[#403D99] bg-[#EFEFEF] py-2 text-lg outline-none"

 />
</div>
)
    })} */}
</form>

  <div className='w-full flex flex-start'>

<button
onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    </aside>
 )
    

}


// STATEMENT
else if (quest.type == "statement") {
 return (

    <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className="py-16 text-lg h-screen  overflow-y-scroll ">
         <div className="flex flex-col items-center justify-center w-full px-64 min-h-full space-y-4"> 

        <header className="text-start w-full text-[0.95rem]">
        <h1 className={`${quest.title.length < 30 ? "font-bold" : ""}`}>{quest.title.replace("*","").includes("/") === true ? (
quest.title.replace("*","").split("\n").map((ti,tiIndex)=>{

    return (
        <p className="mt-2" key={tiIndex}>{ti}</p>
    )
})
        ) : (
           quest.title.replace("*","")
        ) }</h1>
        <aside>{ quest.properties.description?.split("*").map((desc,descIndex)=>{
          
return (
    <p key={descIndex}>{desc}</p>
)

        })}</aside>
        </header>
  <div className='w-full flex flex-start'>

<button
onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    </div>
    </aside>
 )
    

}




})}

</div>

}

{/* <div>
   {questionsToDisplay[0]?.placeholder?.fields?.map((item,index)=>{

if (item.type == "statement") {
return (
    <div  ref={el => eachQuestAndFeedback.current[index] = el}   key={item?.id} className="text-center px-64 py-16 text-lg flex flex-col items-center justify-center  h-screen overflow-y-scroll space-y-4">
{item?.title?.split("\n").map((statement,statementIndex)=>{

return (
    <p key={statementIndex} className="text-start w-full text-[0.95rem]">
        {statement}
    </p>
) 

})}
<button
onClick={()=>{
    if (step + 1  == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md" >{item.properties.button_text}</button>
    </div>
)
}

else if (item.type == "multiple_choice") {
  
    return (
    <div  ref={el => eachQuestAndFeedback.current[index] = el}  key={item?.id} className="text-center px-64 text-lg flex flex-col items-center  h-screen  justify-center">
<h1 className="w-full text-start font-bold" >{item.title}</h1>
{item?.properties?.choices?.map((choice,choiceIndex)=>{

let option = "A"
if (choiceIndex == 1) {
    option = "B"
}
else if (choiceIndex === 2) {
    option = "C"
}
else if (choiceIndex === 3) {
    option = "D"
}
else if (choiceIndex === 4) {
    option = "E"
}
else if (choiceIndex === 5) {
    option = "F"
}
else if (choiceIndex === 6) {
    option = "G"
}

return (
   
  <aside key={choice.id} className="my-2 w-full text-start text-[0.95rem] border-[2px] border-[navy] flex items-start px-2 py-2 gap-x-2 bg-[#D7DDE8] hover:bg-[#A6BCDA]  cursor-pointer" 
   onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }

    setStep(prev => prev + 1)
}}
  >
  <span className="border-[2px] border-[navy] px-2 rounded-sm " 
  >{option}</span> 
  <p>
     {choice.label}
    </p>
    </aside>
    
    )

})}
<button
onClick={()=>{
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }

    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    )
}

   })}

</div> */}


    </main>
  )
}

export default NOAB
