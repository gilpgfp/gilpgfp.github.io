import { Diapositiva } from "../lib/Diapositiva.js";
import "../lib/instrucciones-nav.js"

export class GilPGFPIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
    <h2>por Gilberto Pacheco Gallegos</h2>
    <p class="noPrint">
     <a href="print.html" target="_blank">Versión para Imprimir.</a>
    </p>
    <p>Contenido introductorio sobre programación</p>
    <p>
     Una vez concluidos estos temas, puedes continuar con
     <a href="https://gilpgijs.github.io" target="_blank">GilPGIJS</a>
     para aprender más sobre programación en JavaScript.
    </p>
    <instrucciones-nav></instrucciones-nav>
    <h2>Contenido</h2>
    <mi-nav></mi-nav>
   </div>`
 }
}

customElements.define("gilpgfp-index", GilPGFPIndex)