
window.addEventListener("scroll",()=>{

const nav = document.querySelector(".navbar");

if(window.scrollY > 50){
nav.style.background = "#000";
}else{
nav.style.background = "rgba(0,0,0,.45)";
}

});
