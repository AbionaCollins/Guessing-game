// Guessing Game site

const number = 70;

let guessingNum = parseInt (prompt('Guess a Number !!'))

if ( guessingNum === number){
    
    alert ( 'Congratulations You Just won 100 million doller' )
}

else if ( guessingNum < number ){

    alert ('Try again The Number is greather than' + guessingNum)
}

else {
    alert ('Try again The Number is less than' + guessingNum)
}