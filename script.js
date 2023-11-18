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

let form = document.getElementById('form');
function scrabbleValueCalculate(event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('controller.php', {
        method: 'post',
        body: 'myworld',
        headers: {
            'Access-Control-Allow-Origin': '*'
         },
    })
    .then(response => { 
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
}

document.getElementById("calculate").addEventListener('click', scrabbleValueCalculate, false);


let overDivs = document.getElementsByClassName('col-sm');
console.log(overDivs);
for(let overDiv of overDivs) {
    overDiv.addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = "lightgreen";
        setTimeout(function () {
            event.target.style.backgroundColor = "";
          }, 300);
    });
}


document.getElementById('itemAdd').addEventListener('click', function(event) {
    event.preventDefault();
    let newLi = document.createElement('li');
    newLi.className = 'list-group-item';
    newLi.textContent = document.getElementById('item').value;
    let ul = document.getElementById('items');
    ul.append(newLi);
    document.getElementById('item').value ="";


    let items = document.getElementsByClassName('list-group-item');
    for(let item of items) {
       

};
})
