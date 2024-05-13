// import { Howl, Howler } from "howler";

let numberOfButtons = document.querySelectorAll(".drum");

for (let i = 0; i < numberOfButtons.length; i++) {
  numberOfButtons[i].addEventListener("click", function () {
    let letter = numberOfButtons[i].innerHTML;
    makeSound(letter);
    buttonAnimation(letter);
  });
}

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(numberOfButtons.innerHTML);
      break;
  }
}

document.addEventListener("keydown", function (event) {
  let key = event.key;
  let arr = ["w", "a", "s", "d", "k", "l", "j"];
  if (arr.includes(key)) {
    makeSound(key);
    buttonAnimation(key);
  }
});
function buttonAnimation(current) {
  let activeBut = document.querySelector("." + current);
  activeBut.classList.add("pressed");
  setTimeout(function () {
    activeBut.classList.remove("pressed");
  }, 100);
}
