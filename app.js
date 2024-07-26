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
let state = `eu`;

const checkSex = document.querySelectorAll('.sex');
const checkYears = document.querySelector('.checkYears');
const checkWeight = document.querySelector('.weight');
const checkHeight = document.querySelector('.height');
const modeEu = document.querySelector('.mode1');
const modeUs = document.querySelector('.mode2');
const conditionalRenderingArr = document.querySelectorAll('.conditionalRendering');
console.log(conditionalRenderingArr);



modeEu.addEventListener('change', function() {
  if(modeEu.checked == true) {
    
  }
})
modeUs.addEventListener('change', function() {
  if(modeUs.checked == true) {
    state = 'us'
    if(state == 'us') {
      conditionalRenderingArr.forEach((e) => {
        e[0].innerHTML = `Vaša težina lbs`
        e[1].innerHTML = `Vaša visina in`

      })
    }
  }
})

