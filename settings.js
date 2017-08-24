var choiceA = $("#answerA")
var choiceB = $("#answerB")
var choiceC = $("#answerC")
var nextButton = $('.nextButton')


nextButton.hide()

$('.answer-boxes').click(function(){
    localStorage.setItem("difficulty", $(this).text() )
    window.location.href="index.html"
})
