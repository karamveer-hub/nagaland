  //searching code for home page as styling code of pdf files here are different 
  let search = document.querySelector(".desk-search input")
  let pdfs = document.querySelectorAll(".pdfSearch")
  let mediaSearch = document.querySelectorAll(".mediaSearch")
  let resourcesPage = document.querySelector(".resourcesPage")
  let wrapper = document.querySelector(".wrapper").children
  let searchElementContainer = document.querySelector(".searchElementContainer")
  let addSearchElementsParent = document.createElement("div")
  let eventsDiv = document.createElement("div")
  let galleryDiv = document.createElement("div")
  // mediaSearch.forEach(media=>{console.log(media)})

  search.addEventListener("input", () => {
      for (let i = 2; i < wrapper.length; i++) {
          wrapper[i].style.display = "none"
        //   wrapper[wrapper.length - 1].style.display = "block"
        //   wrapper[wrapper.length - 2].style.display = "block"
      }
      let string = " "
      let string2 = " "
      if (search.value != "") {
          Array.from(pdfs).forEach(pdf => {
              if (pdf.children[1].children[1].innerText.toLowerCase().includes(search.value)) {
                  console.log(pdf)
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
              eventsDiv.classList.add("eventsDiv")
              eventsDiv.innerHTML = ` <div class="about container ">
      <div class="aboutSection1">
          <div class="display_flex_col eventsDiv resourcesDiv ">
              <h2 class="fontLora">Pdf's</h2>
              <p style="text-align: center;padding:20px 0;">Click on the pdf Icons below to download them</p>
              <img src="images/Underline1.png" alt="Colored Underline" class="underline">
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
              addSearchElementsParent.appendChild(eventsDiv)
          })


          Array.from(mediaSearch).forEach(media => {
              if (media.children[1].innerText.toLowerCase().includes(search.value)) {
                  console.log(media)
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
              // galleryDiv.classList.add("gallery")
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
              addSearchElementsParent.appendChild(galleryDiv)
          })
      // mediaSearch.forEach(media=>{console.log(media)})
          // searchElementContainer.appendChild(eventsDiv)
          searchElementContainer.appendChild(addSearchElementsParent)
          searchElementContainer.lastChild.style.display="block"
          // document.querySelector("footer").style.display="block"
          // searchElementContainer.appendChild(document.querySelector("footer"))
      }
      else {
          searchElementContainer.removeChild(addSearchElementsParent)
          if (window.matchMedia("(min-width: 1000px)").matches) {
              for (let i = 0; i < wrapper.length; i++) {
                  wrapper[i].style.display = "block"
                  wrapper[0].style.display = "none"
              }
          }
          else {
              for (let i = 0; i < wrapper.length; i++) {
                  wrapper[i].style.display = "block"
                  wrapper[1].style.display = "none"
              }
          }
      }
  }
  )