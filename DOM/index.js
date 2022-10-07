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

const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove', (e) => {
    // console.log("Mousemove!!");
    // console.log(e);
    mousemove.style.left =e.pageX + "px";
    mousemove.style.top =e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
    mousemove.style.border = "2px solid teal";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    
    mousemove.style.border = "2px solid red";
});
question.addEventListener('mouseenter', () => {
    question.style.background= "rgba(0,0,0,0.6)";
});
question.addEventListener('mouseout', () => {
    question.style.background= "rgba(0,0,0,1)";
});
reponse.addEventListener("mousemove", () => {
reponse.style.transform="rotate(20deg)";
});


const keypress = document.querySelector('.keypress');
const key = document.getElementById('key');
const ring = (key) => {
    const audio = new Audio();
    audio.src= key + ".mp3";
    audio.play();
};
document.addEventListener('keypress',(e) => {
    key.textContent = e.key;
    // if (e.key === "j"){
    //     keypress.style.color= "pink";
    // }
    switch (e.key) {
        case 'j': 
        keypress.style.color= "pink";
            break;
        case 'k': 
            keypress.style.color= "teal";
            ring('k');
            break;
        case 'l': 
            keypress.style.color= "yellow";
            break;
    
        default:
            keypress.style.color= "red";
            break;
    }
});

nav = document.querySelector('nav');

window.addEventListener("scroll", () => {
    if (window.scrollY > 120){
        nav.style.top = "0";
    } else {
        nav.style.top = "-50px";
    }
});

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector('form');
let pseudo = [];
let language = [];
inputName.addEventListener('input', (e) => {
    pseudo.push(e.target.value);
    // pseudo += e.target.value;
    console.log(pseudo);
});
select.addEventListener('input', (e) => {
    language.push(e.target.value);
    console.log(language);
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(cgv.checked){
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo =  ${pseudo} </h3>
        <h4>Language préféré = ${language}</h4>`;
    } else {
        alert('Veuillez accepter les CGV');
    }
    
});

//--------------------------------
window.addEventListener("load", () => {
    console.log("document chargé");
});

//------------
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log(e.target);
    });
});

document.body.onclick = () => {
    console.log('Click !');  
}, true; // TRUE = usecapture (déclechement au début)
// De base, c'est false, se déclanche à la fin (bubbling)

//----------------------------------------------------------

question.addEventListener("click", (e) => {
    alert("Test ! ");
    e.stopPropagation();
})