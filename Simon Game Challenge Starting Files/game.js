var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var gamelevel = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + gamelevel);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  // console.log(userClickedPattern);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});


function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();

      }, 1000);

    }
  } else {
    game_over();

  }
}


function nextSequence() {
  userClickedPattern = [];
  gamelevel++;
  $("#level-title").text("Level " + gamelevel);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoseColor = buttonColors[randomNumber];
  gamePattern.push(randomChoseColor);
  $("#" + randomChoseColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChoseColor);

}

function animatePress(currentColour) {
  $('.' + currentColour).addClass("pressed");
  setTimeout(function() {
    $('.' + currentColour).removeClass("pressed");
  }, 100);


}

function game_over()
 {

    $("body").addClass("game-over");
    var audio = new Audio("sounds/wrong.mp3")
    audio.play();
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
  $("#level-title").text("Game over, Press Any Key to Restart");
  startOver();
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3")
  audio.play();
}

function startOver() {
  gamelevel = 0;
  gamePattern = [];
  started = false;
}



// //My thinking for question 4
// function handler(){
//   var userChosenColor=$(".btn").click(function(){
//     userClickedPattern.push(this.id);
//     console.log(userClickedPattern);
//   });
// }
// handler();

// My thinking for 1 and 2 and 3
// var gamePattern=[];
// var buttonColors=["red","blue","green","yellow"];
// const randomNumber =function nextSequence(){
//   return Math.floor(Math.random()*4);
// }
// var randomChoseColor=buttonColors[randomNumber()];
// gamePattern.push(randomChoseColor);
//
// var randomChoseColor=
// $("#green").click(function(){
//   $(".green").fadeOut(100);
//   $(".green").fadeIn(100);
//   $(".green").fadeOut(100);
//   $(".green").fadeIn(100);
//   new Audio("sounds/green.mp3").play();
// });
// var randomChoseColor=
// $("#red").click(function(){
//   $(".red").fadeOut(100);
//   $(".red").fadeIn(100);
//   $(".red").fadeOut(100);
//   $(".red").fadeIn(100);
//   new Audio("sounds/red.mp3").play();
// });
//
// var randomChoseColor=
// $("#yellow").click(function(){
//   $(".yellow").fadeOut(100);
//   $(".yellow").fadeIn(100);
//   $(".yellow").fadeOut(100);
//   $(".yellow ").fadeIn(100);
//   new Audio("sounds/yellow.mp3").play();
// });
//
// var randomChoseColor=
// $("#blue").click(function(){
//   $(".blue").fadeOut(100);
//   $(".blue").fadeIn(100);
//   $(".blue").fadeOut(100);
//   $(".blue").fadeIn(100);
//   new Audio("sounds/blue.mp3").play();
// });
