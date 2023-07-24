//searching code for home page as styling code of pdf files here are different 
let search = document.querySelector(".allSearch")
let searchDesk = document.querySelector(".allSearchDesk")
let pdfs = document.querySelectorAll(".pdfSearch")
// pdfs.forEach(pdf=>console.log(pdf))
let mediaSearch = document.querySelectorAll(".mediaSearch")
let resourcesPage = document.querySelector(".resourcesPage")
let wrapper = document.querySelector(".wrapper").children
let searchElementContainer = document.querySelector(".searchElementContainer")
let addSearchElementsParent = document.createElement("div")
let eventsDiv = document.createElement("div")
let galleryDiv = document.createElement("div")
let searchMobDisplayCallingFunction = document.querySelector(".mob-menu-display #searchMobDisplay") //this is here to calling the search funtoi aagain after making the input empty in mobile view


searchMobDisplayCallingFunction.children[2].addEventListener("click", () => {
    searchMobDisplay.classList.remove("activate")
    searchMobDisplay.children[1].value=""
    console.log("akjklajks",searchMobDisplay)
    searchFunctionality("")
    // if (!searchMobDisplay.classList.contains("activate"))
    //     searchMobDisplay.children[1].blur()
})
search.addEventListener("input", (e) => {
    searchFunctionality(e.currentTarget.value)
})

searchDesk.addEventListener("input", (e) => {
    // console.log("sdlsldl",e.currentTarget.value)
    searchFunctionality(e.currentTarget.value)
})
  

 function searchFunctionality(bothSearch){
     console.log(bothSearch)
    for (let i = 2; i < wrapper.length; i++) {
        wrapper[i].style.display = "none"
    }
    let string = " "
    let string2 = " "
    if (bothSearch != "") {
        console.log(bothSearch,"bothsearch hai")
        if(pdfs.length != 0){
            console.log("pdf hain")
            Array.from(pdfs).forEach(pdf => {
                if (pdf.children[1].children[1].innerText.toLowerCase().includes(bothSearch)) {
                string += `<div class="pdfSearch">
                  <img src="${pdf.children[0].src}" alt="">
                  <div class="display_flex">
                      <a
                      href="${pdf.children[1].children[0].href}"><img
                      src="images/pdfIcon.svg" alt=""></a>
                      <p class="textBlue font700">${pdf.children[1].children[1].innerText}</p>
                      </div>
                      </div>`
            }
            else {

            }
            // eventsDiv.classList.add("eventsDiv")
            eventsDiv.innerHTML = ` <div class="about container ">
      <div class="aboutSection1">
          <div class="display_flex_col eventsDiv resourcesDiv ">
              <h2 class="fontLora">Pdf's</h2>
              <img src="images/Underline1.png" alt="Colored Underline" class="underline">
              <p style="text-align: center;padding:20px 0;">Click on the pdf Icons below to download them</p>
              <div class="display_flex" id="publications">
                  <p class="font700">Searched Pdfs</p>
              </div>
              <div class="display_flex_col ">
                  <div class="display_flex viewMoreDiv searchDisplay">
                  ${string}
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  `
                })
                if(string!=" ") 
                addSearchElementsParent.appendChild(eventsDiv)
                else {eventsDiv.innerHTML=` <div class="about container ">
                <div class="aboutSection1">
                    <div class="display_flex_col eventsDiv resourcesDiv ">
                        <h2 class="fontLora">Pdf's</h2>
                        <img src="images/Underline1.png" alt="Colored Underline" class="underline">
                        <div class="display_flex" id="publications">
                            <p class="font700">Searched Pdfs</p>
                        </div>
                        <div class="display_flex_col ">
                            <div class="display_flex viewMoreDiv searchDisplay">
                            <h2> No Result Found </h2>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>`}

            }
             if(mediaSearch.length!=0){
                Array.from(mediaSearch).forEach(media => {
            if (media.children[1].children[1].innerText.toLowerCase().includes(bothSearch)) {
                // console.log(media.children[1].children[1].innerText.toLowerCase(),"thisi",search)
                string2 += `  <div class="display_flex_col mediaSearch" style="position: relative;filter:none;transform:none;background:white;">
          <video src="${media.children[0].src}" controls alt=""></video>
          <div class="display_flex ">
              <img src="images/videoIcon.svg" alt="Video Icon" class="videoPdfIcon">
              <p class="textBlue font700">${media.children[1].children[1].innerText}</p>
              </div>
      </div>`
    }
            else {
                // string="No Result Found"
                // about.removeChild(AddresourcesPage)
            }
            galleryDiv.innerHTML = ` <div class=" container ">
      <div class="aboutSection1 ">
          <div class="display_flex_col ">
              <h2 class="fontLora">Media's</h2>
              <img src="images/Underline1.png" alt="Colored Underline" class="underline">
              <div class="display_flex">
              
                  <p class="font700">Searched Media</p>
                  </div>
                  <div class="display_flex_col gallery ">
                  <div class="display_flex ">
                  ${string2}
                  </div>
                  </div>
                  </div>
                  </div>
                  `
                })
                if(string2!=" ")
                addSearchElementsParent.appendChild(galleryDiv)
                else  galleryDiv.innerHTML = ` <div class=" container ">
                <div class="aboutSection1 ">
                    <div class="display_flex_col ">
                        <h2 class="fontLora">Media's</h2>
                        <img src="images/Underline1.png" alt="Colored Underline" class="underline">
                        <div class="display_flex">
                        
                            <p class="font700">Searched Media</p>
                            </div>
                            <div class="display_flex_col gallery ">
                            <div class="display_flex ">
                          <h2> No Result Found </h2>
                            </div>
                            </div>
                            </div>
                            </div>
                            `
    }
    // else{
        
    // }
    searchElementContainer.appendChild(addSearchElementsParent)
    wrapper[wrapper.length - 1].style.display = "block"

    }
    else {
        console.log("else mai aay")
    searchElementContainer.removeChild(addSearchElementsParent)

        if (window.matchMedia("(min-width: 1000px)").matches) {
            for (let i = 0; i < wrapper.length; i++) {
                // wrapper[i].style.display = "block"
                wrapper[i].classList.contains("quizBox")? wrapper[i].style.display = "none" : wrapper[i].style.display = "block"
                console.log("askakdk aagyagygayga")
                wrapper[0].style.display = "none"

                // wrapper[wrapper.length-1].style.display="block"
            }
        }
        else {
            for (let i = 0; i < wrapper.length; i++) {
                wrapper[i].classList.contains("quizBox")? wrapper[i].style.display = "none": wrapper[i].style.display = "block"
                
                wrapper[0].style.display = "flex"
                wrapper[1].style.display = "none"

            }
        }
    }
}

