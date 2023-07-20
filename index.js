$('.slider ').slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    dots: true,
    prevArrow: "<img class=' slick-prev' src='images/next.png' style='transform:rotate(180deg)'>",
    nextArrow: "<img class=' slick-next' src='images/next.png'>",

});

let burgerIcon = document.querySelector("#burger")
let mobsearch = document.querySelector(".mob-header-search")
let mobMenu = document.querySelector(".mob-menu-display")
let searchMobDisplay = document.querySelector(".mob-menu-display #searchMobDisplay")
let searchMobDisplayLi = document.querySelectorAll(".dropdownli")
let searchDeskDisplayLi = document.querySelectorAll(".desktop-menu li")

burgerIcon.addEventListener("click", () => {
    mobMenu.classList.toggle("show")
    burgerIcon.classList.toggle("activate")
})
mobsearch.addEventListener("click", () => {
    mobMenu.classList.toggle("show")
    burgerIcon.classList.toggle("activate")
    searchMobDisplay.classList.toggle("activate")

    searchMobDisplay.children[1].focus()
})
searchMobDisplay.addEventListener("click", () => {
    searchMobDisplay.classList.toggle("activate")
    if (!searchMobDisplay.classList.contains("activate"))
        searchMobDisplay.children[1].blur()
})
searchMobDisplayLi.forEach(item => {
    item.addEventListener("click", (e) => {

        if (e.currentTarget.nextElementSibling) {
            if (e.currentTarget.nextElementSibling.classList.contains("show")) {
                e.currentTarget.nextElementSibling.classList.remove("show")
                e.currentTarget.style.transform = null;
            }
            else {
                for (let i = 0; i < searchMobDisplayLi.length; i++) {
                    searchMobDisplayLi[i].nextElementSibling?.classList.remove("show")
                    searchMobDisplayLi[i].style.transform = null;
                }
                e.currentTarget.nextElementSibling.classList.add("show")
                e.currentTarget.style.transform = 'rotate(180deg)'
            }
        }
    })
    item.addEventListener("blur", () => {
    })
})

let contentEdit = document.querySelectorAll(".contentEdit")
contentEdit.forEach(item => {
    item.addEventListener("input", (e) => {
        // Save the edited HTML content into innerText
        // Add an event listener to save the content when it's being edited
        e.currentTarget.innerText = e.currentTarget.innerHTML;

    })
})

//   viewmore functionality
let viewMoreBtn = document.querySelectorAll('.viewMore')
let viewMoreHomeBtn = document.querySelectorAll('.viewAllHomeBtn')
let viewMoreDiv = document.querySelectorAll('.viewMoreDiv')
let viewMoreHomeDiv = document.querySelector('.inner1 > div')

let nextView = 1;
if (window.matchMedia("(max-width: 1000px)").matches) {
    
        viewMoreDiv.forEach(div => {
            if(div.children.length==2){
                div.nextElementSibling.style.display='none'
            }
            else{

                for (let i = 2; i < div.children.length; i++) {
                    div.children[i].style.display = "none"
                    
                }
            }
        })

    
}

viewMoreBtn.forEach(btn => {
    btn.addEventListener("click", () => {
    //    nextView==btn.previousElementSibling.children.length?btn.innerText="View Less":"View More"
        if(nextView < btn.previousElementSibling.children.length){
            if(nextView==btn.previousElementSibling.children.length-1){
                nextView+=1;
                console.log(nextView)

                for (let i = 2; i < nextView; i++) {
                    // console.log(nextView, btn.previousElementSibling.children.length, "i")
                    if (btn.previousElementSibling) btn.previousElementSibling.children[i].style.display = "block"
                }
            }
            else{
                nextView+=2;
                console.log(nextView)
                for (let i = 2; i < nextView; i++) {
                    // console.log(nextView, btn.previousElementSibling.children.length, "i")
                    if (btn.previousElementSibling) btn.previousElementSibling.children[i].style.display = "block"
                }
            }
        }
        else if(nextView==btn.previousElementSibling.children.length){
            for (let i = nextView-1; i >= 2; i--) {
                // console.log(nextView, btn.previousElementSibling.children.length, "i")
                if (btn.previousElementSibling) btn.previousElementSibling.children[i].style.display = "none"
                
            }
            nextView=2
            // console
            }
    })
})
viewMoreHomeBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log(nextView)
        btn.parentElement.parentElement.classList.toggle("activate")
        btn.parentElement.parentElement.classList.contains("activate") ? btn.textContent = "Compact View" : btn.textContent = "View All"
    })
})



// let deskSearch = document.querySelector(".desk-search")
// deskSearch.addEventListener("keyup", (e) => {
//     console.log(e.keyCode)

// })


