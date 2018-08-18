let numOfSquares = 6;

let colors = [];

let pickedColor;

let squares = document.querySelectorAll('.square');

let colorDisplay = document.getElementById('colorDisplay');

let messageDisplay = document.querySelector('#message');

let h1 = document.querySelector("h1");

let resetButton= document.querySelector("#reset");

let modeButtons = document.querySelectorAll(".mode");
//all variables above this line

init();

function init(){
  //mode button listener
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for( let i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click" , function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent ==="Easy" ? numOfSquares = 3 : numOfSquares = 6;
      reset();
    });
  }

}

function setupSquares(){
  for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener('click' , function(){
      //grab color of clicked squares
      let clickedColor = this.style.backgroundColor;

      //compare color of pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent= "Correct";
        resetButton.textContent = "Try Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor= clickedColor;
      }else{
        this.style.backgroundColor ="grey";
        messageDisplay.textContent = "Try Again";
      }
    });

  }
}


function reset(){
  //generate all new Colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor= pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(let i = 0 ; i < squares.length; i++ ){
    if(colors[i]){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }else{
      squares[i].style.display = "none";
    }

  }
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";


}
// easyBtn.addEventListener('click' , function(){
//   hardBtn.classList.remove("selected");
//   easyBtn.classList.add("selected");
//   numOfSquares = 3;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//
//     }else{
//       squares[i].style.display = "none";
//     }
//
//   };
//
// });
//
// hardBtn.addEventListener('click' , function(){
//   hardBtn.classList.add("selected");
//   easyBtn.classList.remove("selected");
//   numOfSquares = 6;
//   colors = generateRandomColors(numOfSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for (let i = 0; i < squares.length; i++){
//
//       squares[i].style.backgroundColor = colors[i];
//
//       squares[i].style.display = "block";
//     };
//
// });




resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  // loop through all squares
  for(let i=0; i < squares.length; i++){
    //change each color to match given colors
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];

}

function generateRandomColors(num){
  //make an array
  let arr =[];
  // add num random colors to array
  for(let i =0; i < num; i++){
    //get random color push innto array
    arr.push( randomColor() );
  }
  return arr;
  //return that array
}



function randomColor(){
  // pick a red from 0-255
  let r= Math.floor(Math.random() * 256);
 // pick a red from 0-255
  let g= Math.floor(Math.random() * 256);
// pick a red from 0-255
  let b= Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";

}
