// Your code here
let animals={};
let selectedAnimal = null;
fetchAnimals()
function fetchAnimals(){
      fetch("http://localhost:3000/characters", requestOptions)
        .then(response => response.json())
        .then((data)=>{
             console.log(data);
        animals =data;
        characterBarAnimals();

        });
}

function characterBarAnimals(){
    let bar = document.getElementById("character-bar");

    let str = "";
    for (let i =0; i<animals.length; i++){
        let animal =animals[i];
        str = str + '<span onclick="showAnimal(${i})"id="${animal.id}">${animal.name}</span>';
    }
    console.log (str);
    bar.innerHTML =str;
    showAnimal(0);
}

function showAnimal(id){
let animal =animals[id];
selectedAnimal=id;

let characterName=document.getElementById("name");
let characterImg=document.getElementById("image");
let characterVotes=document.getElementById("vote-count");

characterName.innerText=animal.name;
characterImg.src =characterImg;
characterVotes.innerText=characterVotes;
}

let votesForm =document.getElementById("votes-form");
votesForm.addEventListener("submit",function(e){
e.preventDefault();

let inputVotes= document.getElementById("votes");
let votes=parseInt(inputVotes.value);
if(!votes) return;

let animal = animal[selectedAnimal];
animal.votes+=votes;

showAnimal(selectedAnimal);
inputVotes= "";
});

let resetBtn=document.getElementById("reset-btn");

resetBtn.addEventListener("click",function(){
    let animal=animals[selectedAnimal];
    character.Votes=0;
    showAnimal(selectedAnimal);
})