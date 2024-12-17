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
    {
    id:"162",
    name:"CKD-TD2 webhook for cases",
    link:"/ckd-td2-webhook-for-cases"
  },
    {
    id:"163",
    name:"CKD-TD2 webhook for pre-survey",
    link:"/ckd-td2-webhook-for-pre-survey"
  },
    {
    id:"164",
    name:"Kidney Disease",
    link:"/kidney-disease"
  },
    {
    id:"165",
    name:"Kidney Disease Webhooks",
    link:"/kidney-disease-webhooks"
  },
    {
    id:"166",
    name:"Anaemia and CKD webhooks",
    link:"/anaemia-and-ckd-webhooks"
  },
    {
    id:"167",
    name:"IgAN Webhooks II",
    link:"/igan-webhooks-two"
  },
    {
    id:"168",
    name:"Chronic Cough Webhooks",
    link:"/chronic-cough-webhooks"
  },
    {
    id:"169",
    name:"Breast ,Lung Cancer Webhooks",
    link:"/breast-lung-cancer-webhooks"
  },
    {
    id:"170",
    name:"AATD Webhooks II",
    link:"/aatd-webhooks-two"
  },
    {
    id:"171",
    name:"Asthma Webhooks",
    link:"/asthma-webhooks"
  },
    {
    id:"172",
    name:"Influenza Webhooks III",
    link:"/influenza-webhooks-three"
  },
    {
    id:"173",
    name:"Covid-19 Webhooks",
    link:"/covid-nineteen-webhooks"
  },
    {
    id:"174",
    name:"Chronic Cough",
    link:"/chronic-cough"
  },
    {
    id:"175",
    name:"COVID-19",
    link:"/covid-nineteen"
  },
    {
    id:"176",
    name:"Influenza",
    link:"/influenza"
  },
    {
    id:"177",
    name:"Asthma",
    link:"/asthma"
  },
    {
    id:"178",
    name:"iTTP Webhooks",
    link:"/ittp-webhooks"
  },
    {
    id:"179",
    name:"Influenza II",
    link:"/influenza-two"
  },
    {
    id:"180",
    name:"Cytomegalovirus Case 2",
    link:"/cytomegalovirus-case-two"
  },
    {
    id:"181",
    name:"Cytomegalovirus Video",
    link:"/cytomegalovirus-video"
  },
    {
    id:"182",
    name:"Case 4",
    link:"/case-four"
  },
    {
    id:"183",
    name:"Case 3",
    link:"/case-three"
  },
    {
    id:"184",
    name:"Superscript",
    link:"/superscript"
  },
    {
    id:"185",
    name:"Case 2",
    link:"/case-two"
  },
    {
    id:"186",
    name:"AATD II",
    link:"/aatd-two"
  },
    {
    id:"187",
    name:"iTTP Full",
    link:"/ittp-full"
  },
    {
    id:"188",
    name:"Case 1 (dup)",
    link:"/case-one-dup"
  },
    {
    id:"189",
    name:"Lymphoma III",
    link:"/lymphoma-three"
  },
    {
    id:"190",
    name:"Breast Cancer II",
    link:"/breast-cancer-two"
  },
    {
    id:"191",
    name:"Breast, Lung Cancer",
    link:"/breast-lung-cancer"
  },
    {
    id:"192",
    name:"Cytomegalovirus case 1",
    link:"/cytomegalovirus-case-one"
  },
    {
    id:"193",
    name:"Cytomegalovirus post-test part B",
    link:"/cytomegalovirus-post-test-part-b"
  },
    {
    id:"194",
    name:"Cytomegalovirus post-test part A",
    link:"/cytomegalovirus-post-test-part-a"
  },
    {
    id:"195",
    name:"Cytomegalovirus pre-test",
    link:"/cytomegalovirus-pre-test"
  },
    {
    id:"196",
    name:"Multiple sclerosis Case 3",
    link:"/multiple-sclerosis-case-three"
  },
    {
    id:"197",
    name:"Multiple Sclerosis End",
    link:"/multiple-sclerosis-end"
  },
    {
    id:"198",
    name:"Leukemia case 2",
    link:"/leukemia-case-two"
  },
    {
    id:"199",
    name:"Leukemia case 1",
    link:"/leukemia-case-one"
  },
    {
    id:"200",
    name:"Influenza Case 2",
    link:"/influenza-case-two"
  },
    {
    id:"201",
    name:"Influenza Case 1",
    link:"/influenza-case-one"
  },
    {
    id:"202",
    name:"Cytomegalovirus biotest",
    link:"/cytomegalovirus-biotest"
  },
    {
    id:"203",
    name:"Breast Cancer III",
    link:"/breast-cancer-three"
  },
    {
    id:"204",
    name:"ITP case 2",
    link:"/itp-case-two"
  },
    {
    id:"205",
    name:"ITP case 1",
    link:"/itp-case-one"
  },
    {
    id:"206",
    name:"PHN Case 1",
    link:"/pnh-case-one"
  },
    {
    id:"207",
    name:"PHN Case 2",
    link:"/pnh-case-two"
  },
    {
    id:"208",
    name:"Psoriatic diseases case 2",
    link:"/psoriatic-diseases-case-two"
  },
    {
    id:"209",
    name:"Psoriatic diseases case 1",
    link:"/psoriatic-diseases-case-one"
  },
    {
    id:"210",
    name:"Cardiac Surgery case 2",
    link:"/cardiac-surgery-case-two"
  },
    {
    id:"211",
    name:"Cardiac Surgery case 1",
    link:"/cardiac-surgery-case-one"
  },
    {
    id:"212",
    name:"Multiple sclerosis case 2",
    link:"/multiple-sclerosis-case-two"
  },
    {
    id:"213",
    name:"Multiple sclerosis case 1",
    link:"/multiple-sclerosis-case-one"
  },
    {
    id:"214",
    name:"Anaemia and CKD",
    link:"/anaemia-and-ckd"
  },
    {
    id:"215",
    name:"Anaemia And Ckd impact assessment",
    link:"/anaemia-and-ckd-impact-assessment"
  },
    {
    id:"216",
    name:"aTTP case 2",
    link:"/attp-case-two"
  },
    {
    id:"217",
    name:"Hypertrophic Cardiomyopathy Case 2",
    link:"/hypertrophic-cardiomyopathy-case-two"
  },
    {
    id:"218",
    name:"Hypertrophic Cardiomyopathy Case 1",
    link:"/hypertrophic-cardiomyopathy-case-one"
  },
    {
    id:"219",
    name:"aTTP Case 1",
    link:"/attp-case-one"
  },
    {
    id:"220",
    name:"Heart failure obtain certificate",
    link:"/heart-failure-obtain-certificate"
  },
    {
    id:"221",
    name:"Hypertrophic Cardiomyopathy POST-event",
    link:"/hypertrophic-cardiomyopathy-post-event"
  },
    {
    id:"222",
    name:"Hypertrophic Cardiomyopathy PRE-event",
    link:"/hypertrophic-cardiomyopathy-pre-event"
  },
    {
    id:"223",
    name:"IgAN Case 2",
    link:"/igan-case-two"
  },
    {
    id:"224",
    name:"IgAN Case 1",
    link:"/igan-case-one"
  },
    {
    id:"225",
    name:"Heart Failure CASE",
    link:"/heart-failure-case"
  },
    {
    id:"226",
    name:"Acute Myeloid leukaemia",
    link:"/acute-myeloid-leukaemia"
  },
    {
    id:"227",
    name:"IgAN",
    link:"/igan"
  },
    {
    id:"228",
    name:"CKD-TD2 pre-survey-plus-webinar",
    link:"/ckd-td2-pre-survey-plus-webinar"
  },
    {
    id:"229",
    name:"CKD-TD2 post test",
    link:"/ckd-td2-post-test"
  },
    {
    id:"230",
    name:"CKD-TD2 CASES",
    link:"/ckd-td2-cases"
  },
]
