// Make an object of questions

$(document).ready(function(){
    // Questions object
    var questions = [{
            ask: "Suppose there is an alien civilization 66 million light-years away from Earth. What would they see if they looked at the Earth right now?",
            answer: ["1a", "1b", "1c", "1d"]
        },{
            ask: "Question 2?",
            answer: ["2a", "2b", "2c", "2d"]
        },{
            ask: "Question 3?",
            answer: ["3a", "3b", "3c", "3d"]
    }];

    // Starts the game
    function start(){
        // Timer variables
        var count = 5;
        var timer;
        var timerOn = false;

        function timedCount() {
            $(".welcome").html('<h2 style="text-align:center">' + count + '</h2>');
            if (count === -1){
                $(".welcome").html('<h2 style="text-align:center">Time is up!</h2>');
                count = 0;
                stopCount();
            } else {
                count -= 1;
                time = setTimeout(timedCount, 1000);
            }
        }
                
        function startCount() {
            if (!timerOn) {
                timerOn = true;
                timedCount();
            }
        }

        function stopCount() {
            console.log("stop count")
            timerOn = false;
            count = 0;
        }

        // Removes welcome text and buttons before inserting questions and answers
        // $(".startButton").prev().addBack().remove();
        $(".startButton").empty();

        // Loop through the questions array and put the questions into HTML
        for (question = 0; question < questions.length; question++){
            $(".questions").append('<h4>'+ questions[question].ask + '</h4><br>');
            $(".questions").append('<h5><label for="radio-1">'+ questions[question].answer + '</label><input type="radio" name="radio-1" id="radio-1"></h5><br>');
                
        }
        

        // Begin timer
        startCount();
        
    }

    // Greet the player
    $(".welcome").append('<h2 style="text-align:center">Welcome! Press start to play!</h2>');
    $(".startButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Start</button>');

    // Start the game once the start button is pressed
    $(".startButton").on("click", function(){
        start();
    })

});