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
    xhr.open('GET', './texte.txt', true);
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