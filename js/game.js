// rock, paper, scissors game

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randomRPS());
    console.log('Computer choice', botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomRPS(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['kamien', 'papier', 'nozyce'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDataBase = {
        'kamien': {'nozyce': 1, 'kamien': 0.5, 'papier': 0},
        'papier': {'nozyce': 0, 'kamien': 1, 'papier': 0.5},
        'nozyce': {'nozyce': 0.5, 'kamien': 0, 'papier': 1}
    };

    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0 && computerScore === 1){
        return {'message': 'Nie tym razem!', 'color': 'red'};
    } else if (yourScore === 0.5 && computerScore === 0.5){
        return {'message': 'Remis, spróbuj jeszcze raz!', 'color': 'white'};
    } else {
        return {'message': 'Wygrałeś kod -10%: BARBER', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'kamien' : document.getElementById('kamien').src,
        'papier' : document.getElementById('papier').src,
        'nozyce' : document.getElementById('nozyce').src
    }

    //remove all the images
    document.getElementById('kamien').remove();
    document.getElementById('papier').remove();
    document.getElementById('nozyce').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=180 width=auto style='box-shadow: 0px 10px 50px rgb(81, 81, 252);'>"

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 45px; padding: 25px; '>" + finalMessage['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=180 width=auto style='box-shadow: 0px 10px 50px rgb(240, 66, 66);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}