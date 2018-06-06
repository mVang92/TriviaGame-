// Make an object of questions

$(document).ready(function(){
    // Questions object
    var questions = [{
            ask: "Suppose there is an alien civilization 66 million light-years away from Earth. What would they see if they looked at the Earth right now?",
            answer: "a"
        },{
            ask: "Question 2?",
            answer: "b"
        },{
            ask: "Question 3?",
            answer: "c"
        },{
            ask: "Question 4?",
            answer: "d"
    }];

    // Starts the game
    function start(){
        // Removes welcome text and buttons before inserting questions and answers
        
        $(".startButton").prev().addBack().remove();

        // Loop through the questions array and put the questions into HTML
        for (var i = 0; i < questions.length; i++){
            $(".questions").append('<h4>'+ questions[i].ask + '</h4><br>');
        }
        
        // var timer = duration, minutes, seconds;
        // setInterval(function () {
        //     minutes = parseInt(timer / 60, 10)
        //     seconds = parseInt(timer % 60, 10);
    
        //     minutes = minutes < 10 ? "0" + minutes : minutes;
        //     seconds = seconds < 10 ? "0" + seconds : seconds;
    
        //     display.textContent = minutes + ":" + seconds;
    
        //     if (--timer < 0) {
        //         timer = duration;
        //     }
        // }, 1000);
        
    }

    // Greet the player
    $(".welcome").append('<h2 style="text-align:center">Welcome! Press start to play!</h2>');
    $(".startButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Start</button>');

    // Start the game once the start button is pressed
    $(".startButton").on("click", function(){
        start();
    })

});