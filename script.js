/* REQUETE XML */
document.getElementById("xmlLoadData").addEventListener('click', function(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                document.getElementById('xmlResult').innerHTML = xhr.responseText;
            } else {
                console.error('Erreur ! Statut de la requête : '+xhr.status);
            }
        }
    }
    xhr.open('GET', 'texte.txt', true);
    xhr.send();
});


/* REQUETE FETCH  */
document.getElementById("fetchLoadData").addEventListener('click', function(){
    fetch("texte.txt")
    .then(response => {
        if(!response.ok) {
            throw new Error('Erreur ! Statut de la réponse : '+ response.status);
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('fetchResult').innerHTML = data;
    })
    .catch(error => {
        console.error('Erreur lors de la requête fetch :', error)
    });
});


/* METHODE POST */
let form = document.getElementById('form');
function scrabbleValueCalculate(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('controller.php', {
        method: 'post',
        body: 'world',
    })
    .then(response => { 
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
}
document.getElementById("calculate").addEventListener('click', scrabbleValueCalculate, false);


/* MOUSE OVER */
let overDivs = document.getElementsByClassName('col-sm');
for(let overDiv of overDivs) {
    overDiv.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = "lightgreen";
        setTimeout(function () {
            event.target.style.backgroundColor = "";
        }, 300);
    });
}


/* LISTE DES COURSES */
document.getElementById('itemAdd').addEventListener('click', function(event) {
    event.preventDefault();
    let newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.textContent = document.getElementById('item').value;
    let myList = document.getElementById('myList');
    myList.append(newItem);
    document.getElementById('item').value ="";
})

setInterval(() => {
    document.querySelector('#blinkCircle').classList.toggle('blinkColor');
}, 300);

/* DANS LE BON ORDRE */

const firstStory = [
    'Jeannot Lapin se lève,',
    'il boit son bol de carottes,',
    'et s\'habille à toute vitesse,',
    'puis part travailler.'
]
const secondStory = [
    'Le chat de la mère Michelle,',
    'se sauve de la maison,',
    'puis le père Lustrucru le retrouve,',
    'et le ramène à sa propriétaire.'
];
const thirdStory = [
    'Le père Noêl se réveille,',
    'et s\'aperçoit qu\'il a oublié,',
    'de distribuer les cadeaux aux enfants,',
    'alors il s\'habille très vite et part.'
];

function remove() {
    let afterSentences = document.querySelectorAll('#afterStory li');
    for(let afterSentence of afterSentences){
        afterSentence.addEventListener('click', function() {
            let left = document.querySelector('#left');
            left.addEventListener('click', function(event) {
                event.preventDefault();
                /* moving the sentence in a direction depending on clicked button */
                beforeStory.appendChild(afterSentence);
                afterSentence.style.backgroundColor='white';
            });
        });
    }
}
function move() {    
    /* targeting the lists of sentences */
    let beforeSentences = document.querySelectorAll('#beforeStory li');
    /* looping on sentences to listen to click event */
    for(let beforeSentence of beforeSentences) {
        beforeSentence.addEventListener('click', function() {
            /* change the sentence color to highlight it */
            beforeSentence.style.backgroundColor = 'lightgreen';
            /* targeting the action buttons */
            let right = document.querySelector('#right');
            right.addEventListener('click', function(event) {
                event.preventDefault();
                /* moving the sentence in a direction depending on clicked button */
                afterStory.appendChild(beforeSentence);
                remove();
            });
           
        }); 
    };

    
}        

function addLis() {
    /* determine a random display sequence */
    const answers = [0,1,2,3];
    let sequence = [];
    while(answers.length > 0) {
        let rand = Math.random() * answers.length | 0;
        let randomValue = answers[rand];
        sequence.push(randomValue);
        answers.splice(rand, 1);
    }
    console.log('tableau de sequence: '+sequence);

    /* Determine the array choosen by random */
    let targetArrayNumber = Math.floor(Math.random() *3)+1;
    console.log('numero de tableau: '+targetArrayNumber);
    let targetArray = null;
    switch(targetArrayNumber) {
        case 1:
            targetArray = firstStory;
            break;
        case 2:
            targetArray = secondStory;
            break;    
        default :
            targetArray = thirdStory;
            break;    
    }

    /* display the sentences according to the random sequence */
    let story = document.querySelector('#beforeStory');
    sequence.forEach(function(item) {
        let newLi = document.createElement('li');
        newLi.className = 'list-group-item';
        newLi.textContent = targetArray[item];
        story.append(newLi);
    });
      
   
}
    
document.querySelector('#storyGenerate').addEventListener('click', function(event) {
    event.preventDefault();
    addLis();
    move();
});
