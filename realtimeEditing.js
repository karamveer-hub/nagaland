let editBtn=document.querySelector(".editbtn")
editMode=false;
editBtn.addEventListener("click",()=>{
    if(editMode==false){ editMode=true;
        editBtn.innerText="Edit Mode On"
        document.body.style.backgroundColor="#bbbbbb"
    }
    else {editMode=false;
        editBtn.innerText="Edit"
        document.body.style.backgroundColor="unset"
    }
console.log("askla")
})

let aboutUs=document.querySelectorAll(".aboutPage .contentEdit")

let gettingDataFromLS=JSON.parse(localStorage.getItem("aboutUsPage"))
if(gettingDataFromLS!=null){
    Object.values(gettingDataFromLS).map((entry,index) => {
       aboutUs[index].innerHTML=entry
    })
}
else{
    let aboutUsPageData={
        aboutus:"The SDG Coordination Centre (SDGCC) of the Planning & Transformation Department, Government of Nagaland was established in October  2019 with technical assistance from the United Nations Development Programme (UNDP) with a mandate to act as a centre for SDG knowledge dissemination, monitoring, policy strengthening and as an accelerator of SDG implementation across the State.",
        vision:"We envisage Nagaland as a well-governed, peaceful, inclusive and prosperous state of India with a sustainable and diverse economy, a skilled and healthy population providing equitable opportunities for all citizens who have a sense of belonging and fulfilment in a safe, clean and green environment where none feels deprived and women are empowered with equal opportunities.",
        mission:"The State of Nagaland is committed to the 2030 Agenda and has set ambitious targets for the State. The State is equipped with the technical knowledge, capacity, resources and system to implement and achieve the Nagaland SDG Vision 2030."
    }
    localStorage.setItem("aboutUsPage",JSON.stringify(aboutUsPageData))
}

    aboutUs.forEach((item,i)=>{
        item.addEventListener("click",()=>{
            if(editMode==true) item.contentEditable=true;
        })
        item.addEventListener("input",()=>{
            aboutUsPageData={
                aboutus:aboutUs[0].innerHTML,
                vision:aboutUs[1].innerText,
                mission:aboutUs[2].innerText
            }
            localStorage.setItem("aboutUsPage",JSON.stringify(aboutUsPageData))
        })
        item.addEventListener("blur",()=>{
            editMode=false;
            document.body.style.backgroundColor="unset"
        editBtn.innerText="Edit"
        })
    })
    

