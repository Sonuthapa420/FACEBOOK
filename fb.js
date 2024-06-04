const dropdown=document.querySelectorAll(".dd")

dropdown.forEach(dropdown => {
    const select =dropdown.querySelector(".select")
    const caret =dropdown.querySelector(".caret")
    const menu =dropdown.querySelector(".menu")
    

    select.addEventListener("click", ()=> {
caret.classList.toggle("caret-rotate")
menu.classList.toggle("menu-open")
select.classList.toggle("select-end")

    })


})


// STORY SCROLL
let scrollcontainer = document.querySelector(".content")
let previous =document.getElementById("previous-btn")
let next = document.getElementById("next-btn")

next.addEventListener("click", ()=> {
    scrollcontainer.style.scrollBehavior="smooth"
    scrollcontainer.scrollLeft += 500
})
previous.addEventListener("click", ()=> {
    scrollcontainer.style.scrollBehavior = "smooth";
    scrollcontainer.scrollLeft -= 500
})

// SETTING MENU OPEN
var settingmenu = document.querySelector(".setting-menu-box")
function settingMenu(){
    settingmenu.classList.toggle("setting-menu-toggle")
}

//ROTATION WHILE HOVER ON SWITCH ACCOUNT
var rotateit=document.querySelector(".rotate")
function rotation(){
    rotateit.classList.toggle("rotating")
    // alert("hello")
}