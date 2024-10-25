import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className={"flex flex-col justify-center items-center  h-screen bg-[#F7F7F6] "}>

<h1 className="italic underline font-semibold text-lg">Surveys</h1>
<div className="w-full">
{surveyInfos.map((item,index)=>{

  return (
    <Link key={index} href={item.link} className="border-navy flex items-center w-[90%] bg-white rounded-lg mx-auto my-4 py-2 border-[1px] border-[gray] shadow-md cursor-pointer hover:shadow-lg">
      <span className="bg-[#4C86CB] w-[40px] h-[40px] rounded-lg ml-2 mr-2" ></span> {item.name}
    </Link>
  )
})}

</div>

    </main>
  );
}


const surveyInfos = [
  {
    id:"1",
    name:"Survey 1-2",
    link:"/survey-one-two"
  },
  {
    id:"2",
    name:"Survey>3",
    link:"/survey-three"
  },
  {
    id:"3",
    name:"MG HIT 4",
    link:"/typeformquiz"
  },
  {
    id:"4",
    name:"MG HIT 3",
    link:"/mg-hit-three"
  },
  {
    id:"5",
    name:"PNH post-test",
    link:"/pnh-post-test"
  },
  {
    id:"6",
    name:"aHUS post-test",
    link:"/ahus-post-test"
  },
  {
    id:"7",
    name:"N.13.23 ITP Webhooks (copy) {still in process}",
    link:"/itp-webhooks"
  },
]