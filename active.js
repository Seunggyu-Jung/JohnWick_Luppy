const article = document.querySelector(".popup");
const btnFool = document.querySelector(".answer");
const btnPicture = document.querySelector(".btn-close");
const answer = document.querySelector("input");
const dim = document.querySelector(".dim");
const picture = document.querySelector(".luppy");
const dead = document.querySelector(".dead");
const afterBtn = document.querySelector(".afterBtn");






function openPopup(){
    article.classList.add("active");
    picture.classList.add("active");
    dead.classList.add("active");
    afterBtn.classList.add("active");
}

function closePopup(){
    article.classList.remove("active");
}

btnFool.addEventListener("click", openPopup);
btnPicture.addEventListener("click",closePopup);

dim.addEventListener("click", closePopup);