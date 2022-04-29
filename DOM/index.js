// SELECTEURS
let question = document.querySelector('.click-event');
// question.style.background = 'yellow';
let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let reponse = document.querySelector('p');
// let btn2 = document.getElementById('btn-2');
// console.log(btn1,btn2);
function onClick(){
    console.log("click !");
}
question.addEventListener('click',onClick);
// console.log(question);
// question.classList.add("Class-A-Ajouter");
// question.classList.toggle("Class");


btn1.addEventListener('click', () => {
    reponse.style.visibility="visible";
    question.style.background="red";
    reponse.innerHTML = "Mauvaise réponse !";
});
btn2.addEventListener('click', () => {
    reponse.style.visibility="visible";
    question.style.background="green";
    reponse.innerHTML = "Bonne réponse !";

    
});

