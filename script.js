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
