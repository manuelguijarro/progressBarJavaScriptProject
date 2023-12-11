let numero = document.getElementById("numero");
let contador = 0;
setInterval(() => {
  if (contador === 90) {
    clearInterval();
  } else {
    contador += 1;
    numero.innerHTML = `<span class="num">${contador}%</span>`;
  }

}, 21)