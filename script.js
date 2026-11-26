const nappi = document.querySelector("#nappi");

nappi.addEventListener("click", function() {
    nappi.textContent = "Painoit nappia";
});

const palaute = document.querySelector('#palaute');
const laskuri = document.querySelector('#laskuri');
if (palaute && laskuri) {
  palaute.addEventListener('input', () => {
    laskuri.textContent = `${palaute.value.length} merkkiä`;
  });
}

const tyhjenna = document.querySelector("#tyhjenna");

tyhjenna.addEventListener("click", function() {
    palaute.value = "";
    laskuri.textContent = "0 merkkiä";
});

const lomake = document.querySelector('form');
const virhe = document.querySelector('#virhe');
if (lomake && virhe) {
  lomake.addEventListener('submit', (event) => {
    const nimi = document.querySelector('#nimi').value.trim();
    if (!nimi) {
      event.preventDefault();
      virhe.textContent = 'Kirjoita nimesi.';
    } else if (palaute.value.trim().length < 10) {
      event.preventDefault();
      virhe.textContent = 'Tarkista palautteesi, vähintään 10 merkkiä!';
    } else {
      virhe.textContent = '';
    }
  });
}
