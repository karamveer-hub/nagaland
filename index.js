$('.slider ').slick({infinite:!0,speed:300,autoplay:!0,autoplaySpeed:2000,slidesToShow:1,slidesToScroll:1,arrow:!0,dots:!0,prevArrow:"<img class=' slick-prev' src='images/next.png' style='transform:rotate(180deg)'>",nextArrow:"<img class=' slick-next' src='images/next.png'>",});let burgerIcon=document.querySelector("#burger")
let mobsearch=document.querySelector(".mob-header-search")
let mobMenu=document.querySelector(".mob-menu-display")
let searchMobDisplay=document.querySelector(".mob-menu-display #searchMobDisplay")
let searchMobDisplayLi=document.querySelectorAll(".dropdownli")
let searchDeskDisplayLi=document.querySelectorAll(".desktop-menu li")
burgerIcon.addEventListener("click",()=>{mobMenu.classList.toggle("show")
burgerIcon.classList.toggle("activate")})
mobsearch.addEventListener("click",()=>{mobMenu.classList.toggle("show")
burgerIcon.classList.toggle("activate")
searchMobDisplay.classList.add("activate")
searchMobDisplay.children[1].focus()})
searchMobDisplay.children[1].addEventListener("click",()=>{searchMobDisplay.classList.add("activate")
if(!searchMobDisplay.classList.contains("activate"))
searchMobDisplay.children[1].blur()})
searchMobDisplayLi.forEach(item=>{item.addEventListener("click",(e)=>{if(e.currentTarget.nextElementSibling){if(e.currentTarget.nextElementSibling.classList.contains("show")){e.currentTarget.nextElementSibling.classList.remove("show")
e.currentTarget.style.transform=null}else{for(let i=0;i<searchMobDisplayLi.length;i++){searchMobDisplayLi[i].nextElementSibling?.classList.remove("show")
searchMobDisplayLi[i].style.transform=null}
e.currentTarget.nextElementSibling.classList.add("show")
e.currentTarget.style.transform='rotate(180deg)'}}})
item.addEventListener("blur",()=>{})})
let viewMoreBtn=document.querySelectorAll('.viewMore')
let viewMoreHomeBtn=document.querySelectorAll('.viewAllHomeBtn')
let viewMoreDiv=document.querySelectorAll('.viewMoreDiv')
let viewMoreHomeDiv=document.querySelector('.inner1 > div')
let nextView=2;if(window.matchMedia("screen and (max-width: 1000px)").matches){viewMoreDiv.forEach(div=>{if(div.children.length==2){div.nextElementSibling.style.display='none'}else{for(let i=2;i<div.children.length;i++){div.children[i].style.display="none"}}})}
viewMoreBtn.forEach(btn=>{btn.addEventListener("click",()=>{if(nextView<btn.previousElementSibling.children.length){console.log(btn.previousElementSibling.children.length)
if(nextView==btn.previousElementSibling.children.length-1){nextView+=1;console.log(nextView,"true")
for(let i=2;i<nextView;i++){if(btn.previousElementSibling)btn.previousElementSibling.children[i].style.display="block"}
btn.innerText="View Less"}else{nextView+=2;console.log(nextView)
for(let i=2;i<nextView;i++){if(btn.previousElementSibling)btn.previousElementSibling.children[i].style.display="block"}
if(nextView==btn.previousElementSibling.children.length){btn.innerText="View Less"}}}else if(nextView==btn.previousElementSibling.children.length){for(let i=nextView-1;i>=2;i--){if(btn.previousElementSibling)btn.previousElementSibling.children[i].style.display="none"}
nextView=2
btn.innerText="View More"}})})
viewMoreHomeBtn.forEach(btn=>{btn.addEventListener("click",()=>{console.log(nextView)
btn.parentElement.parentElement.classList.toggle("activate")
btn.parentElement.parentElement.classList.contains("activate")?btn.textContent="Compact View":btn.textContent="View All"})})