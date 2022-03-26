/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
//me llevo esto
let i = 0;
let num = 0;
let numerosQueYaSalieron = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
while (i < 12) {
  while (numerosQueYaSalieron[i - 1] == num) {
    num = Math.floor(Math.random() * 12);
  }
  numerosQueYaSalieron[i] = num;
  console.log(numerosQueYaSalieron[i]);
  i++;
}
