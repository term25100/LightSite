const carousel=document.querySelector(".carousel");
const carousel2=document.getElementById("news");
const carousel3=document.getElementById("brand");
const carousel4=document.getElementById("style");
const prodWrap = document.getElementById("prodWrap");
const arrowButtons = prodWrap.querySelectorAll("i");
const newWrap = document.getElementById("newWrap");
const arrowButtons2 = newWrap.querySelectorAll("i"); 
const brandWrap = document.getElementById("brandWrap");
const arrowButtons3 = brandWrap.querySelectorAll("i");
const styleWrap = document.getElementById("styleWrap");
const arrowButtons4 = styleWrap.querySelectorAll("i");
const screenWidth=window.innerWidth;
const scrollAmount=(18/100)*screenWidth+35;
const scrollAmount2=(24/100)*screenWidth+20;
let isDragging=false,isDragging2=false,isDragging3=false,isDragging4=false, startX,startX2,startX3,startX4, startScrollLeft, startScrollLeft2, startScrollLeft3,startScrollLeft4;

arrowButtons.forEach(button=>{
    button.addEventListener("click", ()=>{
        carousel.scrollLeft += button.id === "left" ? -scrollAmount : scrollAmount;
    })
});
arrowButtons2.forEach(button2=>{
    button2.addEventListener("click", ()=>{
        carousel2.scrollLeft += button2.id === "left1" ? -scrollAmount : scrollAmount;
    })
});
arrowButtons3.forEach(button3=>{
    button3.addEventListener("click", ()=>{
        carousel3.scrollLeft += button3.id === "left2" ? -scrollAmount : scrollAmount;
    })
});
arrowButtons4.forEach(button4=>{
    button4.addEventListener("click", ()=>{
        carousel4.scrollLeft += button4.id === "left3" ? -scrollAmount2 : scrollAmount2;
    })
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    startX2 = e.pageX || e.touches[0].pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}
const dragStart3 = (e) => {
    isDragging3 = true;
    carousel3.classList.add("dragging");
    startX3 = e.pageX || e.touches[0].pageX;
    startScrollLeft3 = carousel3.scrollLeft;
}
const dragStart4 = (e) => {
    isDragging4 = true;
    carousel4.classList.add("dragging");
    startX4 = e.pageX || e.touches[0].pageX;
    startScrollLeft4 = carousel4.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX || e.touches[0].pageX-startX);
}
const dragging2 = (e) => {
    if(!isDragging2) return;
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2 || e.touches[0].pageX-startX2);
}
const dragging3 = (e) => {
    if(!isDragging3) return;
    carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3 || e.touches[0].pageX-startX3);
}
const dragging4 = (e) => {
    if(!isDragging4) return;
    carousel4.scrollLeft = startScrollLeft4 - (e.pageX - startX4|| e.touches[0].pageX-startX4);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging");
}
const dragStop3 = () => {
    isDragging3 = false;
    carousel3.classList.remove("dragging");
}
const dragStop4 = () => {
    isDragging4 = false;
    carousel4.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
carousel2.addEventListener("touchstart", dragStart2);
carousel2.addEventListener("touchmove", dragging2);


carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("mousemove", dragging3);
carousel3.addEventListener("touchstart", dragStart3);
carousel3.addEventListener("touchmove", dragging3);

carousel4.addEventListener("mousedown", dragStart4);
carousel4.addEventListener("mousemove", dragging4);
carousel4.addEventListener("touchstart", dragStart4);
carousel4.addEventListener("touchmove", dragging4);


document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("touchend", dragStop2);

document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("touchend", dragStop3);

document.addEventListener("mouseup", dragStop4);
carousel4.addEventListener("touchend", dragStop4);

