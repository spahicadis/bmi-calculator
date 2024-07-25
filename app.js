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
const result = document.querySelector('.generatedResult')
console.log(conditionalRenderingMode2);


//dodati jos jednu varijablu state koja se zove trenutnaMjernaJedinica i incirati je sa metric 
//na klik checkboxa postavljam tu varijablu na odgovarajucu vrijednost(metric ili imeprial)
//ako je metric samo promjenim labele da pokazuju na metric 
// a ako je imperial promjenim labele za imperial
//samo mi 2 inputa trebaju
//na oba inputa(za visinu i tezinu. Imam event listenere pomocu kojih sacuvam vrijednosti u varijable height i weight)
//u calculate funkciju upotrijebim odgovarajucu formulu na osnovu varijable trenutneMjerneJedinice
//ovo sve neka se desava na eventSubmit koji cu postavit na formu (inputi ce biti unutar forme)
//ako je checkbox checkiran return

statusMode1.addEventListener('change', function() {
 if(statusMode1.checked == true) {
  conditionalRenderingMode2.forEach((element) => {
    element.style.display = 'block';
    result.innerHTML = ''
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

function calculate() { //u zavisnosti od mjerne jedinice, primjenim jednu ili drugu formulu za rezultat. 
  //how to convert string to a number in javascript
  weight = weightInfo.value 
  height = heightInfo.value

  result.innerHTML = weight % (Math.pow(height, 2));

  resetValues()
}

function resetValues() {
  weight = null;
  height = null;
}

actionCalulcate.addEventListener('click', calculate)

heightInfo.addEventListener('input', function(e) {
  height = e.target.value
  console.log(height);
}) //single binding



