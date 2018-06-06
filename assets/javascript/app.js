// Make an object of questions

$(document).ready(function() {
    // Questions object
    var questions = {
        firstQuestion: {
            question: "Suppose there is an alien civilization 66 million light-years away from Earth. What would they see if they looked at the Earth right now?",
            answer: "a"
        },
        secondQuestion: {
            question: "Suppose there is an alien civilization 66 million light-years away from Earth. What would they see if they looked at the Earth right now?",
            answer: "b"
        },
        thirdQuestion: {
            question: "Suppose there is an alien civilization 66 million light-years away from Earth. What would they see if they looked at the Earth right now?",
            answer: "c"
        },
    }
    // Test questions
    // console.log(questions.thirdQuestion.answer)

    function start(){
        console.log("in start function")
    }

    // Greet the player
    $(".welcome").append('<h2 style="text-align:center">Welcome! Press start to play!</h2>')
    $(".startButton").append('<button style="" type="button" class="btn btn-danger btn-lg">Start</button>')

    // Start the game once the start button is pressed
    $(".startButton").on("click", function(){
        start();
    })

});