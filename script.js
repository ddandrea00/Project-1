$(function(){
var questionBox = $("#question-box")
var currentQuestion = $("#question-box h3")
var choiceA = $("#answerA")
var choiceB = $("#answerB")
var choiceC = $("#answerC")
var choiceD = $("#answerD")
var answerBoxes = $(".answer-boxes")
var nextButton = $('.nextButton')

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
},{
    question: "How many tribes of Israel are there?",
    choices: ["100","12","26","144"],
    answer: "12",
    hint: ""
},{
    question: "Which one of these celebrations are not in the Bible?",
    choices: ["Pentecost","Christmas","Feast of Trumpets","Day of Atonement"],
    answer: "Christmas",
    hint: "The answer might shock you."
},{
    question: "What is the oldest book of the Bible?",
    choices: ["Genesis","Revelation","Psalm","Job"],
    answer: "Job",
    hint: "No hints here"
},{
    question: "Which one of these prophets did not enter Canaan?",
    choices: ["Joshua","Moses","Caleb","None of the above"],
    answer: "Moses",
    hint: "Numbers"
},{
    question: "Where is God's dwelling place on earth in the Bible?",
    choices: ["Capernum","Zion","Egypt","Galilee"],
    answer: "Zion",
    hint: "Isa 33:20"
}]

nextButton.hide()

choiceA.on('click', play);

function play() {
//Randomize question

var randomize = questions[Math.floor(questions.length * Math.random())];

//Display question and answer choices on screen
  currentQuestion.text(randomize.question)
  choiceA.text(randomize.choices[0]);
  choiceB.text(randomize.choices[1]);
  choiceC.text(randomize.choices[2]);
  choiceD.text(randomize.choices[3]);

//All choices need click listners. If correct choice is clicked than change css background
//color to green and text in question box to 'Correct'. If incorrect choice is clicked
//then change css background of that to red and display 'Wrong' in question box.
  answerBoxes.on('click', function(){
    console.log($(this).text())
    if ($(this).text() == randomize.answer){
          answerBoxes.css("color", "green")
          questionBox.css("background-color", "green")
          currentQuestion.css("color", "white")
          currentQuestion.text("CORRECT!")
          nextButton.show()
          nextButton.click(function(){
              play();
              answerBoxes.css("color", "white")
              questionBox.css("background-color", "initial")
              currentQuestion.css("color", "white")
              nextButton.hide()

          })

    }else{
          answerBoxes.css("color", "red")
          questionBox.css("background-color", "red")
          currentQuestion.css("color", "white")
          currentQuestion.text("WRONG!")
    }



  })
}
})
