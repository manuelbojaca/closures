function createGame () {
    var secretNum = Math.floor(Math.random() * (100 - 1) + 1);
    console.log(secretNum);
    return function (num) {
        if (num < secretNum){
            return 'Muy bajo!';
        }else if (num > secretNum){
            return 'Muy alto!';
        }else{
            return 'Lo adivinaste, felicitaciones!';
        }
    }
}

const guess = createGame(); // numero secreto: 5
console.log(guess);
console.log(guess(8)); // "Muy alto!"
console.log(guess(4)); // "Muy bajo!"
console.log(guess(99)); // "Lo adivinaste, felicitaciones!"