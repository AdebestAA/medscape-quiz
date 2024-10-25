"use client"
import React, { useEffect } from 'react'

const JustChecking = ({noNextExtention,dataFromTypeForm,nextExt}) => {

    useEffect(()=>{
console.log();

    console.log(dataFromTypeForm);
        console.log("environement varibale with next extnesion",nextExt)
        console.log("environement varibale no next entension",noNextExtention)
        console.log("just log");
        
    },[noNextExtention,dataFromTypeForm,nextExt])
  return (
    <div>
      from just checking
    </div>
  )
}

export default JustChecking
