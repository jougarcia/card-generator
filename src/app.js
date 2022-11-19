/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector("#btn").addEventListener("click", generateCard);

window.onload = function() {
  //write your code here

  generateCard();
  document.getElementById("main").style.display = "block";
  document.body.removeChild(document.getElementById("cargando"));
};

function generateCard() {
  let figures = ["♦", "♥", "♠", "♣"];
  let numFig = Math.floor(Math.random() * 3);
  let figure = figures[numFig];
  let color = numFig <= 1 ? "red" : "black";
  let num = Math.floor(Math.random() * 12) + 1;
  switch (num) {
    case 1:
      num = "A";
      break;
    case 11:
      num = "J";
      break;
    case 12:
      num = "Q";
      break;
    case 13:
      num = "K";
      break;
  }
  console.log(`Figura: ${figure} | Color: ${color} | Valor: ${num}`);
  document.querySelectorAll(".figure").forEach(elm => (elm.innerHTML = figure));
  document.getElementById("card").style.color = color;
  document.getElementById("value").innerHTML = num;
}
