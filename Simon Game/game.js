buttonColours = ["red", "blue", "green", "yellow"];
gamePattern = []




function nextSequence(){
    const randomNumber = 0 + Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber]


    gamePattern.push(randomChosenColour);
    randomChosenColour = '#' + randomChosenColour

    $(randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    document.getElementById(randomChosenColour).play();

    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();



}
