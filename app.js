/*
globalne varijable
query selectori
conditional rednering -> npr 2 stejta. Prva varijabla imperial koja je true odmah na pocetku ternary operator i na to DOM
a drugi stejt metric koji je false na pocetku i onda isto ternary operator i prikazivanje
formula izracun BMI

*/

let sex = null;
let years = null;
let weight = null;
let height = null;
let conditionalRendering1 = true;
let conditionalRendering2 = null;

const sexInfo = document.querySelectorAll('.sex');
const yearsInfo = document.querySelector('.years');
const weightInfo = document.querySelector('.weight');
const heightInfo = document.querySelector('.height');
const actionCalulcate = document.querySelector('.action')
const calculatorBox = document.querySelector('.calculator-box');
const statusMode1 = document.querySelector('.mode1');
const statusMode2 = document.querySelector('.mode2');
const conditionalRenderingMode2 = document.querySelectorAll('.conditionMode2')
const conditionalRenderingMode1 = document.querySelectorAll('.conditionMode1')
console.log(conditionalRenderingMode2);





statusMode1.addEventListener('change', function() {
 if(statusMode1.checked == true) {
  conditionalRenderingMode2.forEach((element) => {
    element.style.display = 'block';
  })
  conditionalRenderingMode1.forEach((element) => {
    element.style.display = 'none';
  })
 } else if (statusMode1.checked == false ) {
  conditionalRenderingMode2.forEach((element) => {
    element.style.display = 'none';
  })
  conditionalRenderingMode1.forEach((element) => {
    element.style.display = 'block';
  })
 }
})

statusMode2.addEventListener('change', function() {
  console.log(`test`);
})






