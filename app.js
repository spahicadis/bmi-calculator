/*
globalne varijable
query selectori
conditional rednering -> npr 2 stejta. Prva varijabla imperial koja je true odmah na pocetku ternary operator i na to DOM
a drugi stejt metric koji je false na pocetku i onda isto ternary operator i prikazivanje
formula izracun BMI

*/

//dodati jos jednu varijablu state koja se zove trenutnaMjernaJedinica i incirati je sa metric 
//na klik checkboxa postavljam tu varijablu na odgovarajucu vrijednost(metric ili imeprial)
//ako je metric samo promjenim labele da pokazuju na metric 
// a ako je imperial promjenim labele za imperial
//samo mi 2 inputa trebaju
//na oba inputa(za visinu i tezinu. Imam event listenere pomocu kojih sacuvam vrijednosti u varijable height i weight)
//u calculate funkciju upotrijebim odgovarajucu formulu na osnovu varijable trenutneMjerneJedinice
//ovo sve neka se desava na eventSubmit koji cu postavit na formu (inputi ce biti unutar forme)
//ako je checkbox checkiran return



let sex = null;
let years = null;
let weight = null;
let height = null;
let conditionalRendering1 = true;
let conditionalRendering2 = true;
let state = null;

//dom
const checkSex = document.querySelectorAll('.sex');
const checkYears = document.querySelector('.yearsInput');
const checkWeight = document.querySelector('.weight');
const checkHeight = document.querySelector('.height');
const modeEu = document.querySelector('.mode1');
const modeUs = document.querySelector('.mode2');
const conditionalRenderingArr = document.querySelectorAll('.conditionalRendering');
const result = document.querySelector('.generatedResult');
const calculateButton = document.querySelector('.action');
const form1 = document.querySelector('.form-check')
console.log(conditionalRenderingArr);


modeEu.checked = true;
//conditionalRendering
modeEu.addEventListener('change', function() {
  if(modeEu.checked) {
    modeEu.disabled = true;
    modeUs.checked = false;
    modeUs.disabled = false;
    state = 'eu'
    console.log(state);
    reset()
    conditionalRenderingArr.forEach(() => {
    conditionalRenderingArr[0].innerHTML = `Vaša teżina kg`
    conditionalRenderingArr[1].innerHTML = `Vaša visina  cm`
      })
    }
})
modeUs.addEventListener('change', function() {
  if(modeUs.checked) {
    modeUs.disabled = true;
    modeEu.checked = false;
    modeEu.disabled = false;
    state = 'us'
    console.log(state);
    reset()
    if(state == 'us') {
    conditionalRenderingArr.forEach(() => {
      conditionalRenderingArr[0].innerHTML = `Vaša teżina lbs`
      conditionalRenderingArr[1].innerHTML = `Vaša visina  in`
    })
  }
  }
})

//single binding
checkWeight.addEventListener('input', function(e) {
  weight = e.target.value;
  console.log(weight);
})
checkHeight.addEventListener('input', function(e) {
  height = e.target.value;
  console.log(height);
})


function calculate() {
  if(state == 'eu') {
   let BMI = weight % (Math.pow(height,2))
   result.innerHTML = `Your BMI is ${BMI}`
  } else if(state == 'us') {
    weight*=2.205
    height%=2.54
    let BMI = weight % (Math.pow(height,1))
    result.innerHTML = `Your BMI is ${BMI}`
  }
}

function reset() {
  checkSex.forEach((e) => {
    e.checked = false;
  })
  years = null;
  weight = null;
  height = null;
  checkYears.value = '';
  checkWeight.value = '';
  checkHeight.value = '';
  result.innerHTML = ``;
}


calculateButton.addEventListener('click', calculate)
//npr kada stavim formu umjesto buttona nista mi ne vraca. kako se forma ponasa?(submit) naravno











