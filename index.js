const ujJatekGomb = document.querySelector("#ujj");
const jatekterElem = document.getElementsByClassName("jatekter");
ujJatekGomb.addEventListener("click", megjelenit);

function megjelenit() {
  const htmlKod = `
      <h2>Játékos választása</h2>
      <div class="gombok">
        <button id="ko">K</button>
        <button id="papir">P</button>
        <button id="ollo">O</button>
      </div>
      <section id="tippek">
        <div id="Jtipp">
          <h2>Játékos:</h2>
              <img src="" alt="">
        </div>

        <div id="Gtipp">
          <h2>Gép:</h2>
              <img src="" alt="">
        </div>
      </section>


    `;

  jatekterElem[0].innerHTML = "";
  jatekterElem[0].insertAdjacentHTML("beforeEnd", htmlKod);
  const gombElemek = document.querySelectorAll(".gombok button");
  console.log(gombElemek);
  gombElemek[0].addEventListener("click", kivalaszt);
  gombElemek[1].addEventListener("click", kivalaszt);
  gombElemek[2].addEventListener("click", kivalaszt);
}
function kivalaszt() {
  const kep = document.querySelector("#Jtipp img");

  console.log("Kiválaszt");
  console.log(event.target.id);
  console.log(event.target);
  kep.src = "kepek/ko.PNG";
  kep.src = "kepek/papir.PNG";
  kep.src = "kepek=ollo.PNG";
  kep.src = `kepek/${event.target.id}.PNG`;
  gepValasztas(event.target.id);
}

function gepValasztas(jatekosTipp) {
  const gepKep = document.querySelector("#Gtipp img");
  let veletlen = Math.floor(Math.random() * 3);
  console.log(veletlen);

  if (veletlen == 0) {
    gepKep.src = "kepek/ko.PNG";
    console.log("ko");
  } else if (veletlen == 1) {
    gepKep.src = "kepek/papir.PNG";
    console.log("papir");
  } else {
    gepKep.src = "kepek/ollo.PNG";
    console.log("ollo");
  }
  ellenorzes(veletlen, jatekosTipp);
}
let jGyozelem = 0;
let gGyozelem = 0;
function ellenorzes(veletlen, jatekosTipp) {
  
  if (jatekosTipp == "papir" && veletlen == 0) {
    jGyozelem++;
  } else if (jatekosTipp == "ollo" && veletlen == 1) {
    jGyozelem++;
  } else if (jatekosTipp == "ko" && veletlen == 2) {
    jGyozelem++;
  } else if (jatekosTipp == "papir" && veletlen == 2) {
    gGyozelem++;
  } else if (jatekosTipp == "ollo" && veletlen == 0) {
    gGyozelem++;
  } else if (jatekosTipp == "ko" && veletlen == 1) {
    gGyozelem++;
  } else {
  }

  const kiirElem = document.getElementById("WW");
  kiirElem.innerHTML = `<p>Játékos győzelmek:${jGyozelem}<p>`;
  kiirElem.innerHTML += `<p>Gép győzelmek:${gGyozelem}<p>`;
}
