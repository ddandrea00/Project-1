var currentQuestion = $("#question-box h3")
var choiceA = $("#answerA")
var choiceB = $("#answerB")
var choiceC = $("#answerC")
var choiceD = $("#answerD")
var answerBoxes = $(".answer-boxes")
var startButton = $(".answer-boxes #answerD")

var questions = [{
  question: "What day of the week is the Biblical Sabbath (7th Day)?",
  choices: ["Sunday","Friday","Saturday","Monday"],
  answer: "Saturday",
  hint: "Jesus resurrected on the 1st day of the week and that day was Sunday. - Mark 16:9 NLT"
},{
  question: "What did Jesus call the ceremony when He gave his flesh and blood (bread and wine) to His disciples?",
  choices: ["The Last Supper", "Communion", "Passover", "Eucharest"],
  answer: "Passover",
  hint: "Two of the choices are not even in the Bible."
}]

choiceD.on('click', play);

function play() {
//Display question and answer choices on screen
  currentQuestion.text(questions[0].question)
  choiceA.text(questions[0].choices[0]);
  choiceB.text(questions[0].choices[1]);
  choiceC.text(questions[0].choices[2]);
  choiceD.text(questions[0].choices[3]);

//All choices need click listners. If correct choice is clicked than change css background
//color to green and text in question box to 'Correct'. If incorrect choice is clicked
//then change css background of that to red and display 'Wrong' in question box.
  answerBoxes.on('click', function(){
    console.log($(this).text())
    if ($(this).text() === questions[0].answer){

          console.log("You are correct!")
    }else{
          console.log("You are wrong")
    }
  })
}
