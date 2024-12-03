import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <main className={"h-screen bg-[#F7F7F6] overflow-y-scroll"}>
<div className="flex flex-col justify-center items-center">


<h1 className="italic underline font-semibold text-lg mt-4">Surveys 
  [{surveyInfos.length}]
  </h1>
<div className="w-full">
{surveyInfos.reverse().map((item,index)=>{

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
  {
    id:"34",
    name:"Multiple Myeloma",
    link:"/multiple-myeloma"
  },
  {
    id:"35",
    name:"COPD",
    link:"/copd"
  },
  {
    id:"36",
    name:"Ulcerative Colitis",
    link:"/ulcerative-colitis"
  },
  {
    id:"37",
    name:"Waldenström Macroglobulinaemia",
    link:"/waldenstrom-macro"
  },
  {
    id:"38",
    name:"Refractory Epilepsy",
    link:"/refractory-epilepsy"
  },
  {
    id:"39",
    name:"Primary Myelofibrosis",
    link:"/primary-myelofibrosis"
  },
  {
    id:"40",
    name:"Postpartum Hemorrhage",
    link:"/postpartum-hemorrhage"
  },
  {
    id:"41",
    name:"Delete Dup",
    link:"/delete-dup"
  },
  {
    id:"42",
    name:"Hemophilia",
    link:"/hemophilia"
  },
  {
    id:"43",
    name:"Trauma Surgery (not Done)",
    link:"/trauma-surgery"
  },
  {
    id:"44",
    name:"Epilepsy",
    link:"/epilepsy"
  },
  {
    id:"45",
    name:"Paracentesis",
    link:"/paracentesis"
  },
  {
    id:"46",
    name:"Paracentesis CN",
    link:"/paracentesis-cn"
  },
  {
    id:"47",
    name:"Intracranial Haemorrhage",
    link:"/intracranial-haemorrhage"
  },
  {
    id:"48",
    name:"Intracranial Hemorrhage Jp",
    link:"/intracranial-hemorrhage-jp"
  },
  {
    id:"49",
    name:"Hypothyroidism",
    link:"/hypothyroidism"
  },
  {
    id:"50",
    name:"CKD MBD",
    link:"/ckd-mbd"
  },
  {
    id:"51",
    name:"Hypoparathyroidism",
    link:"/hypoparathyroidism"
  },
  {
    id:"52",
    name:"Hypoalbuminemia Cardiovascular ",
    link:"/hypoalbuminemia-cardiovascular"
  },
  {
    id:"53",
    name:"Hypoalbuminemia-One",
    link:"/hypoalbuminemia-one"
  },
  {
    id:"54",
    name:"Hypoalbuminemia-Two",
    link:"/hypoalbuminemia-two"
  },
  {
    id:"55",
    name:"Hypoalbuminemia CN",
    link:"/hypoalbuminemia-three"
  },
  {
    id:"56",
    name:"IGAN post-test",
    link:"/igan-post-test"
  },
  {
    id:"57",
    name:"Skin Cancer Geoblock",
    link:"/skin-cancer-geoblock"
  },
  {
    id:"58",
    name:"HIV",
    link:"/hiv"
  },
  {
    id:"59",
    name:"Skin Cancer Webhook",
    link:"/skin-cancer-webhook"
  },
  {
    id:"60",
    name:"Skin Cancer Case Four",
    link:"/skin-cancer-case-four"
  },
  {
    id:"61",
    name:"Skin Cancer Case Three",
    link:"/skin-cancer-case-three"
  },
  {
    id:"62",
    name:"Skin Cancer Case Two",
    link:"/skin-cancer-case-two"
  },
  {
    id:"63",
    name:"Skin Cancer Case One",
    link:"/skin-cancer-case-one"
  },
  {
    id:"64",
    name:"Amyloidosis",
    link:"/amyloidosis"
  },
  {
    id:"65",
    name:"Lymphoma Geoblock",
    link:"/lymphoma-geoblock"
  },
  {
    id:"66",
    name:"Crohn's Diseases",
    link:"/crohn-diseases"
  },
  {
    id:"67",
    name:"Heart Failure",
    link:"/heart-failure"
  },
  {
    id:"68",
    name:"Choroidal Neovascularization",
    link:"/choroidal-neovascularization"
  },
  {
    id:"69",
    name:"Pompe Disease Webhook",
    link:"/pompe-disease-webhook"
  },
  {
    id:"70",
    name:"Pompe Disease",
    link:"/pompe-disease"
  },
  {
    id:"71",
    name:"Fibry Disease Webhooks",
    link:"/fibry-disease-webhook"
  },
  {
    id:"72",
    name:"Crohn's Disease Post Test",
    link:"/crohn-disease-post-test"
  },
  {
    id:"73",
    name:"Fibry Disease",
    link:"/fibry-disease"
  },
  {
    id:"74",
    name:"ADPKD",
    link:"/adpkd"
  },
  {
    id:"75",
    name:"Atopic Dermatitis",
    link:"/atopic-dermatitis"
  },
  {
    id:"76",
    name:"Leukemia Webhooks",
    link:"/leukemia-webhooks"
  },
  {
    id:"77",
    name:"ASMD",
    link:"/asmd"
  },
  {
    id:"78",
    name:"Leukaemia",
    link:"/leukaemia"
  },
  {
    id:"79",
    name:"LymphomaCaseOne",
    link:"/lymphoma-case-one"
  },
  {
    id:"80",
    name:"Lymphoma Webhooks",
    link:"/lymphoma-webhooks"
  },
  {
    id:"81",
    name:"Leukemia",
    link:"/leukemia"
  },
  {
    id:"82",
    name:"Lymphoma Case 2",
    link:"/lymphoma-case-two"
  },
  {
    id:"83",
    name:"Hepatitis",
    link:"/hepatitis"
  },
  {
    id:"84",
    name:"Anticoagulation",
    link:"/anticoagulation"
  },
  {
    id:"85",
    name:"AATD Webhooks",
    link:"/aatd-webhooks"
  },
  {
    id:"86",
    name:"AATD",
    link:"/aatd"
  },
  {
    id:"87",
    name:"Coagulopathy",
    link:"/coagulopathy"
  },
  {
    id:"88",
    name:"Postpartum haemorrhage",
    link:"/postpartum-haemorrhage"
  },
  {
    id:"89",
    name:"AL amyloidosis Webhooks",
    link:"/al-amyloidosis-webhooks"
  },
  {
    id:"90",
    name:"AL amyloidosis",
    link:"/al-amyloidosis"
  },
  {
    id:"91",
    name:"Coagulation",
    link:"/coagulation"
  },
  {
    id:"92",
    name:"Transfusional",
    link:"/transfusional"
  },
  {
    id:"93",
    name:"Prostate Cancer Webhooks",
    link:"/prostate-cancer-webhooks"
  },
  {
    id:"94",
    name:"Prostate Cancer",
    link:"/prostate-cancer"
  },
  {
    id:"95",
    name:"Polycythemia Vera Webhooks",
    link:"/polycythemia-vera-webhooks"
  },
  {
    id:"96",
    name:"Polycythemia Vera",
    link:"/polycythemia-vera"
  },
  {
    id:"97",
    name:"Polycythemia Vera MPNs Webhooks",
    link:"/polycythemia-vera-mpns-webhooks"
  },
  {
    id:"98",
    name:"Polycythemia Vera MPNs",
    link:"/polycythemia-vera-mpns"
  },
  {
    id:"99",
    name:"Bladder Cancer Webhooks",
    link:"/bladder-cancer-webhooks"
  },
  {
    id:"100",
    name:"Bladder Cancer",
    link:"/bladder-cancer"
  },
  {
    id:"101",
    name:"Hepatocellular Carcinoma Webhooks",
    link:"/hepatocellular-carcinoma-webhooks"
  },
  {
    id:"102",
    name:"Hepatocellular Carcinoma",
    link:"/hepatocellular-carcinoma"
  },
  {
    id:"103",
    name:"Hemophilia Webhooks",
    link:"/hemophilia-webhooks"
  },
  {
    id:"104",
    name:"Hemophilia Case 1",
    link:"/hemophilia-case-one"
  },
  {
    id:"105",
    name:"Myelodysplastic Syndrome Webhooks",
    link:"/myelodysplastic-syndrome-webhooks"
  },
  {
    id:"106",
    name:"Hematopoietic stem-cell transplantation ",
    link:"/hematopoietic-stem-cell-transplantation"
  },
  {
    id:"107",
    name:"Lymphoma",
    link:"/lymphoma"
  },
  {
    id:"108",
    name:"CLL Webhooks",
    link:"/cll-webhooks"
  },
  {
    id:"109",
    name:"CLL ",
    link:"/cll"
  },
  {
    id:"110",
    name:"Breast Cancer Webhooks ",
    link:"/breast-cancer-webhooks"
  },
  {
    id:"111",
    name:"Breast Cancer",
    link:"/breast-cancer"
  },
  {
    id:"112",
    name:"PNH Webhooks",
    link:"/pnh-webhooks"
  },
  {
    id:"113",
    name:"PSORIATIC Diseases Webhooks",
    link:"/psoriatic-diseases-webhooks"
  },
  {
    id:"114",
    name:"Cardiac Surgery Webhooks",
    link:"/cardiac-surgery-webhooks"
  },
  {
    id:"115",
    name:"ATTP Webhooks",
    link:"/attp-webhooks"
  },
  {
    id:"116",
    name:"Lymphoma Webhooks chemoimmunotherapy",
    link:"/lymphoma-webhooks-chemo"
  },
  {
    id:"117",
    name:"Cytomegalovirus Webhook",
    link:"/cytomegalovirus-webhook"
  },
  {
    id:"118",
    name:"Leukemia 61 years-old",
    link:"/leukemia-sixty-one-year"
  },
  {
    id:"119",
    name:"Lymphoma 66 years-old",
    link:"/lymphoma-sixty-six-year"
  },
  {
    id:"120",
    name:"Leukemia 9 years-old",
    link:"/leukemia-nine-year"
  },
  {
    id:"121",
    name:"NSCLC Webhooks",
    link:"/nsclc-webhooks"
  },
  {
    id:"122",
    name:"NSCLC",
    link:"/nsclc"
  },
  {
    id:"123",
    name:"GVHD webhooks",
    link:"/gvhd-webhooks"
  },
  {
    id:"124",
    name:"GVHD ",
    link:"/gvhd"
  },
  {
    id:"125",
    name:"spinal muscular atrophy webhooks ",
    link:"/spinal-muscular-atrophy-webhooks"
  },
  {
    id:"126",
    name:"spinal muscular atrophy",
    link:"/spinal-muscular-atrophy"
  },
  {
    id:"127",
    name:"Heart Failure and Iron Deficiency webhooks",
    link:"/hfaidw"
  },
  {
    id:"128",
    name:"Heart Failure and Iron Deficiency",
    link:"/hfaid"
  },
  {
    id:"129",
    name:"influenza webhooks",
    link:"/influenza-webhooks"
  },
  {
    id:"130",
    name:"lung cancer webhooks",
    link:"/lung-cancer-webhooks"
  },
  {
    id:"131",
    name:"Lung Cancer",
    link:"/lung-cancer"
  },
  {
    id:"132",
    name:"Osteoporosis Webhooks",
    link:"/osteoporosis-webhooks"
  },
  {
    id:"133",
    name:"Osteoporosis",
    link:"/osteoporosis"
  },
  {
    id:"134",
    name:"Hemophilia challenges",
    link:"/hemophilia-challenges"
  },
  {
    id:"135",
    name:"Gaucher Disease",
    link:"/gaucher-disease"
  },
  {
    id:"136",
    name:"Non-small cell lung cancer (NSCLC)",
    link:"/non-small-cell-lung-cancer"
  },
  {
    id:"137",
    name:"Parkinson's",
    link:"/parkinson"
  },
  {
    id:"138",
    name:"Immunodeficiency",
    link:"/immunodeficiency"
  },
  {
    id:"139",
    name:"Diabetic Retinopathy",
    link:"/diabetic-retinopathy"
  },
  {
    id:"140",
    name:"Gaucher Disease Webhooks",
    link:"/gaucher-disease-webhooks"
  },
  {
    id:"141",
    name:"NSCLC Webhooks II",
    link:"/nsclc-webhooks-two"
  },
  {
    id:"142",
    name:"Parkinson's Webhooks",
    link:"/parkinson-webhooks"
  },
  {
    id:"143",
    name:"Immunodeficiency Webhooks",
    link:"/immunodeficiency-webhooks"
  },
  {
    id:"144",
    name:"Diabetic Retinopathy Webhooks",
    link:"/diabetic-retinopathy-webhooks"
  },
  {
    id:"145",
    name:"Myasthenia gravis",
    link:"/myasthenia-gravis"
  },
  {
    id:"146",
    name:"Myasthenia Gravis webhooks",
    link:"/myasthenia-gravis-webhooks"
  },
  {
    id:"147",
    name:"Leukemia Webhooks II",
    link:"/leukemia-webhooks-two"
  },
  {
    id:"148",
    name:"Influenza Webhooks II",
    link:"/influenza-webhooks-two"
  },
  {
    id:"149",
    name:"Breast Cancer Webhooks II",
    link:"/breast-cancer-webhooks-two"
  },
  {
    id:"150",
    name:"Lymphoma webhooks II",
    link:"/lymphoma-webhooks-two"
  },
  {
    id:"151",
    name:"Acute Myeloid Leukaemia Webhooks",
    link:"/acute-myeloid-leukaemia-webhooks"
  },
  {
    id:"152",
    name:"Webhooks",
    link:"/webhooks"
  },
  {
    id:"153",
    name:"Lymphoma webhooks III",
    link:"/lymphoma-webhooks-three"
  },
  {
    id:"154",
    name:"aTTP",
    link:"/attp"
  },
  {
    id:"155",
    name:"Lymphoma II",
    link:"/lymphoma-two"
  },
  {
    id:"156",
    name:"aHUS Webhooks",
    link:"/ahus-webhooks"
  },
  {
    id:"157",
    name:"aHUS Case 1",
    link:"/ahus-case-one"
  },
  {
    id:"158",
    name:"Hypertrophic Cardiomyopathy",
    link:"/hypertrophic-cardiomyopathy"
  },
  {
    id:"159",
    name:"IgAN Webhooks",
    link:"/igan-webhooks"
  },
  {
    id:"160",
    name:"Crohn's Disease II",
    link:"/crohn-diseases-two"
  },
    {
    id:"161",
    name:"Cytomegalovirus Webhook II",
    link:"/cytomegalovirus-webhook-two"
  },
]
