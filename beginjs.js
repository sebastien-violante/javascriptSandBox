const getRandomNumber = (min, max) => {
    return(Math.floor(Math.random() * (max - min + 1)) + min );
}

const isValidNumber = (number) => {
    return !Number.isNaN(number) && number >= 0 && number <= 100;
}

const game = () => {
    const targetNumber = getRandomNumber(0,100);
    let attemptCount = 0;

    const play = () => {
        let userGuess = Number(prompt('guess which number: '));
        attemptCount++;
        if(!isValidNumber(userGuess)) {
            console.log("Your number is not in the right range");
            return play();
        }
        if(userGuess > targetNumber) {
            console.log('too high. Try again...');
            return play();
        }
        if(userGuess < targetNumber) {
            console.log('too low. Try again...');
            return play();
        }
        console.log(`Well done. You found ${targetNumber} in only ${attemptCount} attemps !`)
    }
}

game();
const restartGame = () => {
    let answer = prompt('Do you want to replay ?');
}