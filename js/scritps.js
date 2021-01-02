const menu = document.querySelector(".menu")
const hamburger = document.querySelector(".hamburger")
const navClose = document.querySelector(".close")
const navBar = document.querySelector(".navBar")
const navHeight = navBar.getBoundingClientRect().height;

const navLeft = menu.getBoundingClientRect().left
hamburger.addEventListener("click", () =>{
    if(navLeft < 0 ){
        menu.classList.add("show")
        document.body.classList.add("show");
        navBar.classList.add("show")
    }
});

navClose.addEventListener("click", () => {
    if(navLeft < 0){
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
    }
})

//Fixed Nav
window.addEventListener("scroll", () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add("fix-nav");
    }else{
        navBar.classList.remove("fix-nav")
    }
})


// scroll to
// const links = [...document.querySelectorAll(".scroll-link")];
// links.map(link => {
//     if(!link) return;
//     console.log(link)
//     link.addEventListener("click", e => {
//         e.preventDefault();
//         const id = e.target.getAttribute("href").slice(1)
//         const el = document.getElementById(id);
//         const fixNav = navBar.classList.contains("fix-nav");
//         let position = el.offsetTop - navHeight;
        
//         window.scrollTo({
//             top: position,
//             left: 0,
//         });

//         navBar.classList.remove("show");
//         menu.classList.remove("show");
//         document.body.classList.remove("show");
//     })
// })