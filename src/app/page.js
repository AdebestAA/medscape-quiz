import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className={"h-screen bg-[#F7F7F6] overflow-y-scroll"}>
<div className="flex flex-col justify-center items-center">


<h1 className="italic underline font-semibold text-lg mt-4">Surveys [{surveyInfos.length}]</h1>
<div className="w-full">
{surveyInfos.map((item,index)=>{

  return (
    <Link key={index} href={item.link} className="border-navy flex items-center w-[90%] bg-white rounded-lg mx-auto my-4 py-2 border-[1px] border-[gray] shadow-md cursor-pointer hover:shadow-lg">
      <span className="bg-[#4C86CB] w-[40px] h-[40px] rounded-lg ml-2 mr-2" ></span> {item.name}
    </Link>
  )
})}

</div>
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
    link:"/mg-hit-four"
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
    name:"N.13.23 ITP Webhooks (copy)",
    link:"/itp-webhooks"
  },
  {
    id:"8",
    name:"N.15.24 (Asthma)",
    link:"/n-ashtma"
  },
  {
    id:"9",
    name:"N.14.24 (Weight Loss) ",
    link:"/n-weight-loss"
  },
  {
    id:"10",
    name:"N.13.24 (Arthritis)",
    link:"/n-arthritis"
  },
  {
    id:"11",
    name:"NPain",
    link:"/n-pain"
  },
  {
    id:"12",
    name:"NHeadache",
    link:"/n-headache"
  },
  {
    id:"13",
    name:"NDyspnea",
    link:"/n-dyspnea"
  },
  {
    id:"14",
    name:"NGi general",
    link:"/n-gi"
  },
  {
    id:"15",
    name:"N Diarrhea",
    link:"/n-diarrhea"
  },
  {
    id:"16",
    name:"N Cushing",
    link:"/n-cushing"
  },
  {
    id:"17",
    name:"N.06.24 Asthma",
    link:"/n-zero-six-asthma"
  },
  {
    id:"18",
    name:"N MS",
    link:"/n-ms"
  },
  {
    id:"19",
    name:"N CKD",
    link:"/n-ckd"
  },
  {
    id:"20",
    name:"N NMyeloma",
    link:"/n-myeloma"
  },
  {
    id:"21",
    name:"N OAB",
    link:"/n-oab"
  },
  {
    id:"22",
    name:"N Clinic Path 1",
    link:"/n-clinic-path-one"
  },
  {
    id:"23",
    name:"N Clinic Path 2",
    link:"/n-clinic-path-two"
  },
  {
    id:"24",
    name:"N NSCLC",
    link:"/n-nsclc"
  },
  {
    id:"25",
    name:"N Ahus Case 4",
    link:"/n-ahus-case-four"
  },
  {
    id:"26",
    name:"N Ahus Case 3",
    link:"/n-ahus-case-three"
  },
  {
    id:"27",
    name:"N Ahus Case 2",
    link:"/n-ahus-case-two"
  },
  {
    id:"28",
    name:"N Ahus Case 1",
    link:"/n-ahus-case-one"
  },
  {
    id:"29",
    name:"Geoblocking N Case 2",
    link:"/geoblock-n-case-two"
  },
  {
    id:"30",
    name:"Geoblocking N Case 1",
    link:"/geoblock-n-case-one"
  },
  {
    id:"31",
    name:"Ahus case 4",
    link:"/ahus-case-four"
  },
  {
    id:"32",
    name:"Ahus case 3",
    link:"/ahus-case-three"
  },
  {
    id:"33",
    name:"Ahus case 3",
    link:"/ahus-case-two"
  },
]