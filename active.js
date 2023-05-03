const article = document.querySelector(".popup");
const btnFool = document.querySelector(".answer");
const btnPicture = document.querySelector(".btn-close");
const answer = document.querySelector("input");
const dim = document.querySelector(".dim");


function openPopup(){
    article.classList.add("active");
}

function closePopup(){
    article.classList.remove("active");
}

btnFool.addEventListener("click", openPopup);
btnPicture.addEventListener("click",closePopup);

dim.addEventListener("click", closePopup);