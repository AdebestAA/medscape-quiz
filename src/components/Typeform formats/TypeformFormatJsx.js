"use client"

import React from 'react'
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GraphQLClient, gql, } from 'graphql-request';
import useLocalStorage from "@/CustomHooks/UseLocalStorage";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import VimeoPlayer from '../VimeoComponents/VimeoPlayer';


export default function TypeformFormatJsx({possibleOptions,optionsChecked
,setOptionsChecked,handleScroll,questionsToDisplay,setQuestionsToDisplay,step,
setStep,startQuiz,setStartQuiz,eachQuestAndFeedback}) {


 return (
  <main className={"bg-[#EFEFEF] text-[#403D99]  h-[100%]"}>
{/* scroll up and down btn */}

{startQuiz && <div className=" fixed space-x-[2px] bottom-[10%] right-[5%] z-50">
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
</div>}

{questionsToDisplay[0]?.placeholder?.welcome_screens && <div className="text-center  text-lg  h-screen overflow-y-scroll">
   <div className=" w-full xl:px-64 sm:px-16 px-2 flex flex-col items-center justify-center">

  
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

{questionsToDisplay[0]?.placeholder?.welcome_screens?.map((welItem,welIndex)=>{
if (welItem?.attachment?.type == "video") {
    return (
<article className="w-[80%] text-2xl w-scroll my-6 " key={welItem.id}>
<div style={{ position: 'relative',width:"90%",height:"70vh" }} className=" mx-auto">
{/* 
<VimeoPlayer  videoUrl={welItem?.attachment?.href} />  */}
   <iframe
          src={`${welItem?.attachment?.href.replace('vimeo.com', 'player.vimeo.com/video')}`}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          //   allowFullScreen
        //   style={{ position: 'absolute', top: 0, left: 0 }}
          />


</div>
{welItem.title.split("").filter(item => item != "*").join("").split("\n").map((titleItem,index)=>{
    if (index === 0) {
        return (
            <p className=" font-bold w-full my-4 " key={index}>{titleItem}</p>
        )
    }
return (
<h1 key={index} className="font-extrabold text-center py-2 text-[red]">
    {titleItem.replace("*", "")}
</h1>
)

})}
<article className="text-[0.95rem] w-full my-2  leading-loose">{welItem.properties?.description?.split("\n").map((welcomeDescItem,index) =>{
return (
    <p className="my-2 " onClick={()=> console.log(welcomeDescItem.split("*"))} key={index}>{welcomeDescItem.trim().split("*").map((z,zIndex)=>{
if (zIndex % 2 == 1 ) {
    if (z.includes("http")) {
        return <a key={zIndex} href={z.split("(")[1]?.replace("(","").replace(")","").replace("[").replace("]","")} className="font-bold">{z.split("(")[0]?.replace("(","")?.replace(")","").replace("[","").replace("]","")}</a>
    }
    return <span key={zIndex} className="font-bold">{z}</span>
}
return <span key={zIndex} className="">{z.split("_[").map((zp,zpIndex)=>{
if (zp.includes("www") || zp.includes("http")) {
    
    return (
        <a key={zpIndex} href={zp.split("](")[1]?.replace("(","").replace(")","").replace("[").replace("]","").replace("_","")}>{zp.split("](")[0]?.replace("(","").replace(")","").replace("[").replace("]","").replace("_","")}</a>
    )
}
    return (
<span key={zpIndex}>{zp}</span>

    )
})}</span>

    })}</p>
)

})}</article>
{welItem.properties.show_button && 
<footer>

<button className="bg-green-800 text-white py-2 sm:px-4 sm:max-w-[100px] w-full   rounded-md"
onClick={()=>{
    setStartQuiz(true)
}}
>{questionsToDisplay[0]?.placeholder?.welcome_screens[0]?.properties.button_text}</button>

</footer>
}
</article>

    )
}


return (

<article className="w-[80%] text-2xl w-scroll my-6" key={welItem.id}>
{welItem.title.split("").filter(item => item != "*").join("").split("\n").map((titleItem,index)=>{
    if (index === 0) {
        return (
            <p className=" font-bold w-full my-4 " key={index}>{titleItem}</p>
        )
    }
return (
<h1 key={index} className="font-extrabold text-center py-2 text-[red]">
    {titleItem.replace("*", "")}
</h1>
)

})}
<article className="text-[0.95rem] w-full my-2  leading-loose">{welItem.properties?.description?.split("\n").map((welcomeDescItem,index) =>{
return (
    <p className="my-2 " onClick={()=> console.log(welcomeDescItem.split("*"))} key={index}>{welcomeDescItem.trim().split("*").map((z,zIndex)=>{
if (zIndex % 2 == 1 ) {
    if (z.includes("http")) {
        return <a key={zIndex} href={z.split("(")[1].replace("(","").replace(")","").replace("[").replace("]","")} className="font-bold">{z.split("(")[0]?.replace("(","")?.replace(")","").replace("[","").replace("]","")}</a>
    }
    return <span key={zIndex} className="font-bold">{z}</span>
}
return <span key={zIndex} className="">{z.split("_[").map((zp,zpIndex)=>{
if (zp.includes("www") || zp.includes("http")) {
    
    return (
        <a key={zpIndex} href={zp.split("](")[1]?.replace("(","").replace(")","").replace("[").replace("]","").replace("_","")}>{zp.split("](")[0]?.replace("(","").replace(")","").replace("[").replace("]","").replace("_","")}</a>
    )
}
    return (
<span key={zpIndex}>{zp}</span>

    )
})}</span>

    })}</p>
)

})}</article>
{welItem.properties.show_button && 
<footer>

<button className="bg-green-800 text-white py-2 sm:px-4 sm:max-w-[100px] w-full rounded-md"
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
</div>}


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

    // with video
if (quest?.attachment?.type === "video") {

    return (
          <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className="h-screen flex ">

         {/* <div className="flex flex-col items-center justify-center w-[60%] px-12 min-h-full space-y-4  "> 
            
            </div> */}
                <aside  ref={el => eachQuestAndFeedback.current[index] = el}  key={quest?.id} className=" text-lg w-[60%]  overflow-y-scroll h-screen ">
        <div className="flex flex-col items-center justify-center px-16 min-h-screen "> 

        
<h1 className="w-full text-start my-4 flex" ><span className="">{index + 1}</span> <span className="h-[30px] flex items-center"><IoIosArrowRoundForward /></span> <span>{quest.title.split("*").map((qItem,qItemIndex)=>{
    if (qItemIndex % 2 == 1 )  {
              if (qItem.includes("http")) {
             return <a href={qItem.split("(")[1].replace("(","").replace(")","").replace("[").replace("]","")} className="font-bold" key={qItem}>{qItem.split("(")[0]?.replace("(","")?.replace(")","").replace("[","").replace("]","")}</a>
        }
        return <span className="font-semibold" key={qItemIndex}>{qItem}</span>
    }
    return <span key={qItemIndex}>{qItem}</span>
})}</span></h1>

<div className={`flex justify-between w-full ${quest?.properties?.choices?.length  < 8 ? "flex-col flex-start" : "flex-wrap"}`}>

{quest?.properties?.choices?.map((choice,choiceIndex)=>{
    
    let option = possibleOptions[choiceIndex]
    
    return (
        
        <aside key={choice.id} className={`my-2 ${quest?.properties?.choices?.length > 30 ? " w-[30%]" : " w-[100%]"}  rounded-sm text-start text-[0.95rem] border-[2px] border-[navy] flex items-start px-2 py-2 gap-x-2 bg-[#D7DDE8] hover:bg-[#A6BCDA]  cursor-pointer`}
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
        setStartQuiz(true)
    if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
        return
    }
    
    setStep(prev => prev + 1)
}}
className="bg-green-800 text-white py-2 px-4 rounded-md">ok</button>
    </div>
    </div>
</aside>
 <div style={{ position: 'relative',width:"40%" }} className="flex items-center justify-center">

    <VimeoPlayer  videoUrl={quest.attachment.href} /> 

 
   </div>
            
            </aside>
    )
}


// without videos
     return (
    <aside  ref={el => eachQuestAndFeedback.current[index] = el}  key={quest?.id} className=" text-lg  h-screen overflow-y-scroll">
        <div className="flex flex-col items-center justify-center w-full xl:px-64 sm:px-16 px-4  min-h-screen "> 

        
<h1 className="w-full text-start my-4 flex" ><span className="">{index + 1}</span> <span className="h-[30px] flex items-center"><IoIosArrowRoundForward /></span> <span>{quest.title.split("*").map((qItem,qItemIndex)=>{
    if (qItemIndex % 2 == 1 )  {
        if (qItem.includes("http")) {
             return <a href={qItem.split("(")[1].replace("(","").replace(")","").replace("[").replace("]","")} className="font-bold" key={qItemIndex}>{qItem.split("(")[0]?.replace("(","")?.replace(")","").replace("[","").replace("]","")}</a>
        }
        return <span className="font-semibold" key={qItemIndex}>{qItem}</span>
    }
    return <span key={qItemIndex}>{qItem}</span>
})}</span></h1>

<div className={`flex justify-between w-full ${quest?.properties?.choices?.length  > 20 ? "flex-wrap " : "flex-col flex-start"}`}>

{quest?.properties?.choices?.map((choice,choiceIndex)=>{
    
    let option = possibleOptions[choiceIndex]
    
    return (
        
        <aside key={choice.id} className={`my-2 ${quest?.properties?.choices?.length  > 20 ? " w-[30%] mx-[2px] " : " w-[100%]"}  rounded-sm text-start text-[0.95rem] border-[2px] border-[navy] flex items-start px-2 py-2 gap-x-2 bg-[#D7DDE8] hover:bg-[#A6BCDA]  cursor-pointer`}
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
        setStartQuiz(true)
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
className="bg-green-800 text-white py-2 px-4 rounded-md">{quest.properties.button_text}</button>
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
className="bg-green-800 text-white py-2 px-4 rounded-md">{quest.properties.button_text}</button>
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
className="bg-green-800 text-white py-2 px-4 rounded-md">{quest.properties.button_text}</button>
    </div>
    </aside>
 )
    

}

// YES_NO
else if (quest.type == "yes_no") {

return (
<aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" text-lg h-screen   flex ">
  <div className="flex flex-col items-center justify-center w-full px-64 min-h-full space-y-4 "> 
    <header className="text-start w-full text-[0.95rem]">
<h1 className="w-full text-start my-4 flex font-bold" ><span className="">{index + 1}</span> <span className="h-[30px] flex items-center"><IoIosArrowRoundForward /></span>{quest.title.replace("*","").replace("*","")}</h1>
    </header>
    <div className={`flex justify-between w-full  flex-col `}>
    
        <aside  className={`my-2 w-[30%] rounded-sm text-start text-[0.95rem] border-[2px] border-[navy] flex items-start px-2 py-2 gap-x-2 bg-[#D7DDE8] hover:bg-[#A6BCDA]  cursor-pointer`}
        onClick={()=>{
            if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
                return
            }
            
            setStep(prev => prev + 1)
        }}
        >
         <span className="border-[2px] border-[navy] px-2 rounded-sm " 
  >Y</span> 
  <p>
     Yes
    </p>
        </aside>
        <aside  className={`my-2 w-[30%] rounded-sm text-start text-[0.95rem] border-[2px] border-[navy] flex items-start px-2 py-2 gap-x-2 bg-[#D7DDE8] hover:bg-[#A6BCDA]  cursor-pointer`}
        onClick={()=>{
            if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
                return
            }
            
            setStep(prev => prev + 1)
        }}
        >
          <span className="border-[2px] border-[navy] px-2 rounded-sm " 
  >N</span> 
  <p>
     No
    </p>
        </aside>
    </div>
  
  </div>
</aside>
)
}

// STATEMENT
else if (quest.type == "statement") {
if (quest?.attachment?.type === "video") {
if (quest?.layout?.placement !== "right") {
    

    return (
        <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" text-lg h-screen flex flex-col items-center justify-center">
 <div className="flex flex-col items-center justify-center w-[70%] space-y-4 "> 
<header className="text-start w-[65%] text-[0.95rem]">
        <h1 className={` ${quest.title.length < 30 ? "font-bold" : ""}`}>{quest.title.replace("*","").includes("\n") === true ? (
quest.title.replace("*","").split("\n" || "\n\n").map((ti,tiIndex)=>{

    if (ti.includes("(_*") || ti.includes("_")) {
        return (
            <p key={tiIndex}>{ti.replace("(_","").replace("_)","").replace("_","").split("*").map((linkInsideParagraph,indexLinkSideParagraph)=>{
                if (linkInsideParagraph.includes("http")) {
                    return(
                        <a key={indexLinkSideParagraph} className="font-bold" href={linkInsideParagraph.split("](" || "(")[1].replace("[","").replace("]","").replace("(","").replace(")","")}>{linkInsideParagraph.split("](" || "(")[0].replace("[","").replace("]","").replace("(","").replace(")","")}</a>
                    )
                }

                return (
                    <span key={indexLinkSideParagraph}>{linkInsideParagraph}</span>
                )
            })}</p>
        )
        
    }
    if (ti.includes("http")) {
              if (ti.includes("http") || ti.trim().toLowercase().includes("here")) {
             return <a key={tiIndex} href={ti.split("(")[1].replace("(","").replace(")","").replace("[").replace("]","")} className="font-bold">{ti.split("(")[0]?.replace("(","")?.replace(")","").replace("[","").replace("]","")}</a>
        }
        if (ti.includes("](")) {
            return (
               <p className="" key={tiIndex} >{ ti.split("[").map((tiInner,tiInnerIndex)=>{
if (tiInner.includes("](")) {
    return <a key={tiInnerIndex} href={tiInner.split("](")[1].replace((")",""),replace("(",""))}>{tiInner.split("](")[1].replace((")",""),replace("(",""))}</a>
}
                return (
                    <span key={tiInnerIndex}>{tiInner}</span>
                )

               })}</p>
            )

        }
        return (
            <a className="underline font-bold italic " key={tiIndex} href={ti.split("(")[1].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}>{ti.split("(")[0].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}</a>
        )
    }
    return (
        <p className={`mt-2  ${tiIndex === 0? "font-bold" : ""}`} key={tiIndex}>{ti.split("*").map((boItem,index)=>{
if (index % 2 == 1) {
    return (
        <span className="font-bold" key={index}>{boItem}</span>
    )
}
            return (
                <span key={index}>
                    {boItem}
                </span>
            )
        })}</p>
    )
})
) : (
    quest.title.replace("*","")
) }</h1>
        <aside >{ quest.properties.description?.split("*").map((desc,descIndex)=>{
          
            return (
                <p key={descIndex}  >{desc}</p>
            )
            
        })}</aside>
        </header>
 </div>
           <div style={{ position: 'relative',width:"70%",height:"70vh" }} className="flex items-center justify-center ">

    <VimeoPlayer  videoUrl={quest?.attachment?.href} /> 

 
   </div>
        </aside>
    )
}


    return (
<aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" text-lg h-screen   flex ">

         <div className="flex flex-col items-center justify-center w-[60%] px-12 min-h-full space-y-4  "> 
    <div className="overflow-y-scroll py-16">

        <header className="text-start w-full text-[0.95rem]">
        <h1 className={` ${quest.title.length < 30 ? "font-bold" : ""}`}>{quest.title.replace("*","").includes("\n") === true ? (
quest.title.replace("*","").split("\n" || "\n\n").map((ti,tiIndex)=>{

    if (ti.includes("(_*") || ti.includes("_")) {
        return (
            <p key={tiIndex}>{ti.replace("(_","").replace("_)","").replace("_","").split("*").map((linkInsideParagraph,indexLinkSideParagraph)=>{
                if (linkInsideParagraph.includes("http")) {
                    return(
                        <a key={indexLinkSideParagraph} className="font-bold" href={linkInsideParagraph.split("](" || "(")[1].replace("[","").replace("]","").replace("(","").replace(")","")}>{linkInsideParagraph.split("](" || "(")[0].replace("[","").replace("]","").replace("(","").replace(")","")}</a>
                    )
                }

                return (
                    <span key={indexLinkSideParagraph}>{linkInsideParagraph}</span>
                )
            })}</p>
        )
        
    }
    if (ti.includes("http")) {
              if (ti.includes("http") || ti.trim().toLowercase().includes("here")) {
             return <a key={tiIndex} href={ti.split("(")[1].replace("(","").replace(")","").replace("[").replace("]","")} className="font-bold">{ti.split("(")[0]?.replace("(","")?.replace(")","").replace("[","").replace("]","")}</a>
        }
        if (ti.includes("](")) {
            return (
               <p className="" key={tiIndex} >{ ti.split("[").map((tiInner,tiInnerIndex)=>{
if (tiInner.includes("](")) {
    return <a key={tiInnerIndex} href={tiInner.split("](")[1].replace((")",""),replace("(",""))}>{tiInner.split("](")[1].replace((")",""),replace("(",""))}</a>
}
                return (
                    <span key={tiInnerIndex}>{tiInner}</span>
                )

               })}</p>
            )

        }
        return (
            <a className="underline font-bold italic " key={tiIndex} href={ti.split("(")[1].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}>{ti.split("(")[0].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}</a>
        )
    }
    return (
        <p className={`mt-2  ${tiIndex === 0? "font-bold" : ""}`} key={tiIndex}>{ti.split("*").map((boItem,index)=>{
if (index % 2 == 1) {
    return (
        <span className="font-bold" key={index}>{boItem}</span>
    )
}
            return (
                <span key={index}>
                    {boItem}
                </span>
            )
        })}</p>
    )
})
) : (
    quest.title.replace("*","")
) }</h1>
        <aside >{ quest.properties.description?.split("*").map((desc,descIndex)=>{
          
            return (
                <p key={descIndex}  >{desc}</p>
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
className="bg-green-800 text-white py-2 px-4 rounded-md">{quest.properties.button_text}</button>
    </div>
    </div>
</div>

{/* Video */}
   <div style={{ position: 'relative',width:"40%" }} className="flex items-center justify-center">

    <VimeoPlayer  videoUrl={quest.attachment.href} /> 

 
   </div>
   
    
    </aside>

    )
}


// without video attachment
 return (

    <aside ref={el => eachQuestAndFeedback.current[index] = el} key={quest?.id} className=" text-lg h-screen overflow-y-scroll ">
         <div className="flex flex-col items-center justify-center w-[100%]  min-h-full xl:px-64 sm:px-16 px-4 space-y-4 py-16"> 

        <header className="text-start w-full  text-[0.95rem]">
        <h1 className={` ${quest.title.length < 30 ? "font-bold " : ""}`}>{quest.title.replace("*","").includes("\n") === true ? (
quest.title.split("\n").map((ti,tiIndex)=>{

    if (ti.includes("(_*") || ti.includes("_") && ti.includes("http") || ti.includes("www")) {
        return (
            <p key={tiIndex}>{ti.replace("(_","").replace("_)","").replace("_","").split("*").map((linkInsideParagraph,indexLinkSideParagraph)=>{
                if (linkInsideParagraph.includes("http")) {
                    return(
                        <a key={indexLinkSideParagraph} className="" href={linkInsideParagraph?.split("](" || "(")[1]?.replace("[","").replace("]","").replace("(","").replace(")","")}>{linkInsideParagraph.split("](" || "(")[0]?.replace("[","").replace("]","").replace("(","").replace(")","")}</a>
                    )
                }

                return (
                    <span key={indexLinkSideParagraph}>{linkInsideParagraph}</span>
                )
            })}</p>
        )
        
    }

if (ti.includes("http") || ti.includes("www")) {
 
return  (
    <article key={tiIndex}>
        {ti.split("[").map((sepItem,sepItemIndex)=>{

if (sepItem.includes("www") || sepItem.includes("http")) {
    return (
        <span key={sepItemIndex}>{sepItem.split("]").map((pasteLink,pasteLinkIndex)=>{
if (pasteLinkIndex !== 0) {
    return <span key={pasteLinkIndex} ></span>
}

            return(
                <a href={pasteLink} key={pasteLinkIndex}>{pasteLink}</a>
            )
        })}</span>
    )
}
return (
    <span key={sepItemIndex}>{sepItem}</span>
)

        })}
    </article>
)

        // return (
        //     <a className="underline font-bold italic "  href={ti.split("(")[1].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}>{ti.split("(")[0].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}</a>
        // )
    }


  

if (ti.includes("https")) {
   return (
            <a className="underline font-bold italic" key={tiIndex} href={ti.split("(")[1].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}>{ti.split("(")[0].replace("[","").replace("]","").replace("_","").replace(")","").replace("*","")}</a>
        )
}

    return (
        <p className="mt-2" key={tiIndex}>{ti.split("*").map((tipText,tipIndex)=>{
if (tipIndex % 2 == 1) {
    return (
        <span className="font-bold " key={tipIndex}>{tipText}</span>
    )
}
return (
    <span key={tipIndex}>{tipText}</span>
)
        })}</p>
    )
})
        ) : (
           quest.title.replace("*","")
        ) }</h1>
        <aside>{ quest.properties.description?.split("*").map((desc,descIndex)=>{
          if (descIndex % 2 == 1 ) {
            return (
                <span className="font-bold" key={descIndex}>
                    {desc}
                </span>
            )
          }
return (
    <span key={descIndex}>{desc}</span>
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
className="bg-green-800 text-white py-2 px-4 rounded-md">{quest.properties.button_text}</button>
    </div>
    </div>
    
    </aside>
 )
    

}
// OPINION SCALE
else if (quest.type == "opinion_scale") {
 return (

       <aside  ref={el => eachQuestAndFeedback.current[index] = el}  key={quest?.id} className=" text-lg  h-screen overflow-y-scroll">
        <div className="flex flex-col items-center justify-center w-full px-64 min-h-screen">

<h1 className="w-full text-start font-bold my-4" >{quest.title}</h1>

<div className={`flex justify-evenly w-full gap-x-2`}>
{Array(quest.properties.steps).fill("").map((_,index)=>{

return (
    <span key={index} 
      onClick={()=>{
            if (step + 1 == questionsToDisplay[0]?.placeholder?.fields?.length) {
                return
            }
            
            setStep(prev => prev + 1)
        }}
    className="w-[15%] h-[60px] flex items-center justify-center border-[1px] rounded-md border-[#403D99] bg-[#D7DDE8] hover:bg-[#A6BCDA]">{index + 1}</span>
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
className="bg-green-800 text-white py-2 px-4 rounded-md">{quest.properties.button_text}</button>
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
