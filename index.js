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
          <img src="" alt="" />
        </div>

        <div id="Gtipp">
          <h2>Gép:</h2>
          <img src="" alt="" />
        </div>
      </section>

      <div id="WW">
        <h3>Győztes:</h3>
      </div>
    `;
  const jatekGombok=document.querySelectorAll(".gombok")
  
  jatekterElem[0].innerHTML = "";
  jatekterElem[0].insertAdjacentHTML("beforeEnd", htmlKod);
  jatekGombok[0].addEventListener("click", kivalaszt)
}
function kivalaszt(){
    console.log("Kiválaszt")
    console.log(event.target.id)

}