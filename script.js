$(function start(){
var questionBox = $("#question-box")
var currentQuestion = $("#question-box h3")
var choiceA = $("#answerA")
var choiceB = $("#answerB")
var choiceC = $("#answerC")
var choiceD = $("#answerD")
var answerBoxes = $(".answer-boxes")
var nextButton = $('.nextButton')
var mainLevel = $(".level")
var level = $(".level span")
var levelCount = 0

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
    question: "How many books are in the Bible",
    choices: ["27","49","66","37"],
    answer: "66",
    hint: "Count"
},{
    question: "Jesus Christ is the High Priest in the order of?",
    choices: ["Moses","Melchizedek","Aaron","David"],
    answer: "Melchizedek",
    hint: "Hebrews"
},{
    question: "Where did God appear to Abraham?",
    choices: ["Jerusalem","Sodom and Gomorrah","Mt. Sinai","Trees of Mamre"],
    answer: "Trees of Mamre",
    hint: "Genesis"
},{
    question: "What is inside the ark of the covenant",
    choices: ["Staff of Moses","Two Stone Tablets","Golden Censer","None of the Above"],
    answer: "Two Stone Tablets",
    hint: "1 Kings 8:9"
},{
    question: "Which of these items is not in the Holy Place?",
    choices: ["Golden Lampstand","Altar of Incense","Table of Showbread","Bronze Basins"],
    answer: "Bronze Basins",
    hint: "Isa 33:20"
},{
    question: "Which of these items is not in the Most Holy Place?",
    choices: ["Ark of the Covenant","Aaron's Staff","Altar of Incesne","None of the Above"],
    answer: "Altar of Incesne",
    hint: "Isa 33:20"
},{
    question: "What is the name of Moses' mother?",
    choices: ["Miriam","Rebecca","Ruth","Jochebed"],
    answer: "Jochebed",
    hint: "Isa 33:20"
},{
    question: "Where did God command Abraham to sacrifice Isaac?",
    choices: ["Mt. Sinai","Horeb","Egypt","Mt. Moriah"],
    answer:"Mt. Moriah",
    hint: "Isa 33:20"
},{
    question: "How old was Sarah when she died?",
    choices: ["114","87","127","49"],
    answer: "127",
    hint: "Genesis 23:1"
},{
    question: "Where was Apostle John when writing the book of Revelation?",
    choices: ["Rome","Patmos","Jerusalem","Samaria"],
    answer: "Patmos",
    hint: "Rev 1"
},{
    question: "But the Jersalem that is above is free and she is our? - Galatians 4:26",
    choices: ["Hope","Glory","Mother","Savior"],
    answer: "Mother",
    hint: "Isa 33:20"
},{
    question: "Where did Jesus celebrate the Passover with his disciples?",
    choices: ["Jerusalem Temple","Mark's Upper Room","Mt. Hermon","None of the above"],
    answer: "Mark's Upper Room",
    hint: "Isa 33:20"
}]
mainLevel.hide()
nextButton.hide()
choiceA.on('click', play);
choiceB.on('click', instructions)
choiceC.on('click', function(){
  window.location.href="settings.html"
})
choiceD.on('click', about)

function play() {
  mainLevel.show()
  nextButton.off()
  choiceA.off()
  choiceC.off()
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
      answerBoxes.off()
    if ($(this).text() == randomize.answer){
          levelCount++
          level.text(levelCount)
          answerBoxes.css("color", "green")
          questionBox.css("background-color", "green")
          currentQuestion.css("color", "white")
          currentQuestion.text("CORRECT!")
          nextButton.show()
          nextButton.click(function(){
            answerBoxes.ready()
              play()
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
          nextButton.show()
          nextButton.click(function(){
            answerBoxes.ready()
            play()
            answerBoxes.css("color", "white")
            questionBox.css("background-color", "initial")
            currentQuestion.css("color", "white")
            nextButton.hide()
            })
        }
     })
   }
function instructions() {
    currentQuestion.text("Test your Bible knowledge by answering as many questions correctly as you can.")
}

function about() {
    currentQuestion.text("Magically developed by some guy named Drew.")
}
})
