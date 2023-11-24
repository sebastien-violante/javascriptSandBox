/* Fonctions relatives aux Dates  */
/* générer une Date avec new Date() */
document.querySelector('#generateDate').addEventListener('click', () => {
    const myDate = new Date();
    let pDate = document.createElement('p');
    pDate.textContent = myDate;
    document.querySelector('#myDate').append(pDate);
})

/* transformer date en timestamp */
const changeDateToTimestamp = () => {
    let myDate = new Date();
    let myTimestamp = myDate.getTime();
    let p = document.createElement('p');
    p.textContent = myTimestamp;
    document.querySelector('#dateToTimestamp').append(p);
}

/* transformer date en string */
const changeDateToString = () => {
    let myDate = new Date();
    let myDateString = myDate.toUTCString();
    let p = document.createElement('p');
    p.textContent = myDateString;
    document.querySelector('#dateToTimestamp').append(p);
}
