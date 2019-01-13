// STUFF THAT GETS ASSIGNED STUFF
//----------------------------------------------------------------------------

    // store a "score" for each fruit
    var fruitScore = {
        apple: 
        {
            name: "Apple",
            value: 0
        },
        avocado:
        {
            name: "Avocado",
            value: 0
        },
        grapes:
        {
            name: "Grapes",
            value: 0
        },
        orange:
        {
            name: "orange",
            value: 0
        }
    };

    // store the running sum for player clicks of each fruit
    var runningScore;

    // store the Target Score for player to match to win the game
    var targetScore;

    // store the number of wins
    var winCount = 0;

    // store the number of losses
    var lossCount = 0;


// // FUNCTIONS
// //----------------------------------------------------------------------------

    // get random numbers between a range to get a value to assign to something else
    var getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // start and reset the game
    var startGame = function () {

        // set and reset the runningScore
        runningScore = 0;

        // set a new targetScore between 19 and 120
        targetScore = getRandomNumber (19, 120);

        // set a new value for each fruit between 1 and 12
        fruitScore.apple.value = getRandomNumber (1, 12);
        fruitScore.avocado.value = getRandomNumber (1, 12);
        fruitScore.grapes.value = getRandomNumber (1, 12);
        fruitScore.orange.value = getRandomNumber (1, 12);

        // update HTML to show changes
        $("#playerScore").html(runningScore);
        $("#targetScore").html(targetScore);

        // testing
        console.log("----------------------------------------------")
        console.log("Target Score: " + targetScore);
        console.log("Apple: " + fruitScore.apple.value + " | Avocado: "+ fruitScore.avocado.value + " | Grapes: " + fruitScore.grapes.value + " | Orange: " + fruitScore.orange.value)
        console.log("----------------------------------------------")
    };

    // generate 4 random, unique values to assign to each fruit from 1 to 12
    var addValues = function (fruitScore) {

        // update runningScore
        runningScore = runningScore + fruitScore.value;

        // update HTML to reflect updates to runningScore
        $("#playerScore").html(runningScore);

        // check to see if round = win by calling checkWin function
        checkWin();

        // testing
        console.log("Player Score: " + runningScore);

    };

    // evaluate win v. loss for each round, and eventually reset the game
    var checkWin = function () {

        // check if runningScore is greater than targetScore
        if (runningScore > targetScore) {
            alert("The salad is ruined! You lost the game.");
            console.log("You lost");
            lossCount ++;

            // update HTML to show the loss
            $("#lossCount").html(lossCount);

                // restart the game
                startGame();
        }

        // check if runningScore matches targetScore, because that's a win!
        else if (runningScore == targetScore) {
            alert("You made a great fruit salad! You win!");
            console.log("You win!")
            winCount ++;
            console.log(winCount);

            // update HTML to show the win
            $("#winCount").text(winCount);

            // restart the game
            startGame();

        }

    }



// OPERATIONS
//----------------------------------------------------------------------------

    // start and reset the game
    startGame();

    // effect when player clicks on any fruit image
    $("#apple").click(function() {
        addValues(fruitScore.apple);
    });

    $("#avocado").click(function() {
        addValues(fruitScore.avocado);
    });

    $("#grapes").click(function() {
        addValues(fruitScore.grapes);
    });

    $("#orange").click(function() {
        addValues(fruitScore.orange);
    });



















