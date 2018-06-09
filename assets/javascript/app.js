$(document).ready(function(){
    $(".welcome").append('<h2 style="text-align:center">Welcome! Press start to play!</h2>');
    $(".startButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Start</button>');
    $(".trivia").hide();
    $(".nextButton").hide();
    $(".nextBox").hide();
    $(".triviaBox").hide();

    $(".startButton").click(function(){
        $(".nextButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Next Question</button>');
        $(".nextButton").fadeIn();
        $(".triviaBox").fadeIn();
        $(".nextBox").fadeIn();
        $(".trivia").fadeIn();
        $(".welcome").html('<h2 style="text-align:center">Question 1</h2>')
        // Start the game
        start();
    });

    //Total number of questions
    var totalNumQuestions = $(".questions");
    //Display current question, sets it at first question
    var currentQuestion = 0;
    //jQuery variable
    $questions = $(".questions");
    //Hide all of the questions
    $questions.hide();
    //Show the first question
    $($questions.get(currentQuestion)).fadeIn();

    //Click listener to get next question
    $(".nextButton").click(function() {
        //Current question disappears
        $(this).prop("disabled",true);
        $($questions.get(currentQuestion)).fadeOut(function() {
            //Increment current question by 1. Parse to int to prevent cascade
            currentQuestion++;
            $(".welcome").html('<h2 style="text-align:center">Question ' + parseInt(currentQuestion  + 1) + '</h2>')
            //Next question
            $($questions.get(currentQuestion)).fadeIn();
            if (currentQuestion == 3){
                $(".nextButton").hide();
                $('.trivia').text(score);
            }
        });
    });

    // Scoring function
    function setScore() {
        var score = $("input:checked[value=right]").length;
        // $('#score').text(score);
        score++;
        console.log(score);
    }
    
    //Set score when user chooses right choice
    $("input").change(setScore);

    // Starts the game
    function start(){
        // Timer variables
        var count = 5;
        var timer;
        var timerOn = false;

        function timedCount() {
            $(".startButton").html('<h2 style="text-align:center">' + count + '</h2>');
            if (count === -1){
                $(".startButton").html('<h2 style="text-align:center">Time is up!</h2>');
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

    // Begin timer
    startCount();
    //Set score when initialized
    setScore();
        
    }

});