num1 = Math.floor(1 + Math.random() * 6);
num2 = Math.floor(1 + Math.random() * 6);
// console.log(num1, num2)

if (num1 > num2) {
    document.querySelector('.winner').innerHTML = "Player 1 wins!";
} else if (num2 > num1) {
    document.querySelector('.winner').innerHTML = "Player 2 wins!";
} else {
    document.querySelector('.winner').innerHTML = "Draw!";
}

function imgDice1(str, number) {
    var string = ''
    if (str) {
        string = '/images/dice' + number + '.png';
    }
    // console.log(string)
    document.getElementById(str).src = string;
}

imgDice1("img1", num1);
imgDice1("img2", num2);

// console.log(document.querySelector('.img1'));
// console.log(document.querySelector('.img2'));
  
// jAVASCRIPT END