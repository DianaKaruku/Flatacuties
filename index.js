// Your code here
let animals=[
    {
        "id": 1,
        "name": "Mr. Cute",
        "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 2,
        "name": "Mx. Monkey",
        "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ];
    
      let selectedAnimal = 0;
      
      characterBarAnimals();
      
      function characterBarAnimals() {
        let bar = document.getElementById("character-bar");
        let str = "";
      
        for (let i = 0; i < animals.length; i++) {
          let animal = animals[i];
          str += `<span onclick="showAnimal(${i})" id="${animal.id}">${animal.name}</span>`;
        }
      
        bar.innerHTML = str;
        showAnimal(0);
      }
      
      function showAnimal(id) {
        let animal = animals[id];
        selectedAnimal = id;
      
        let characterName = document.getElementById("name");
        let characterImg = document.getElementById("image");
        let characterVotes = document.getElementById("vote-count");
      
        characterName.innerText = animal.name;
        characterImg.src = animal.image; 
        characterVotes.innerText = animal.votes; 
      }
      
      let votesForm = document.getElementById("votes-form");
      votesForm.addEventListener("submit", function (e) {
        e.preventDefault();
      
        let inputVotes = document.getElementById("votes");
        let votes = parseInt(inputVotes.value);
        if (!votes || isNaN(votes)) return;
      
        let animal = animals[selectedAnimal];
        animal.votes += votes;
      
        showAnimal(selectedAnimal);
        inputVotes.value = ""; 
      });
      
      let resetBtn = document.getElementById("reset-btn");
      resetBtn.addEventListener("click", function () {
        let animal = animals[selectedAnimal];
        animal.votes = 0; 
        showAnimal(selectedAnimal);
      });
      