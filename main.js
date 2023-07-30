let openmenu=document.querySelector(".open");
let closemenu=document.querySelector(".close");
let menu=document.querySelector(".menu");

function showmenu(){
    openmenu.classList.add("hidden");
    closemenu.classList.remove("hidden");
    menu.classList.remove("hidden");
}

function hidemenu(){
    openmenu.classList.remove("hidden");
    closemenu.classList.add("hidden");
    menu.classList.add("hidden");
}

openmenu.onclick=showmenu;
closemenu.onclick=hidemenu;