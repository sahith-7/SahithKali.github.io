function toggleMenu(){

let menu = document.querySelector(".nav-links");
menu.classList.toggle("active");

}



function toggleDetails(index){

let items = document.querySelectorAll(".more");

if(items[index].style.maxHeight){
items[index].style.maxHeight = null;
}

else{
items[index].style.maxHeight = items[index].scrollHeight + "px";
}

}