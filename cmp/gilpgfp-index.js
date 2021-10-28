import { Diapositiva } from "../lib/Diapositiva.js";
import "../lib/instrucciones-nav.js"

export class GilPGFPIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
    <address><p>por Gilberto Pacheco Gallegos</p></address>
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
    <section>
     <h1>Contenido</h1>
     <mi-nav></mi-nav>
    </section>
   </div>`
 }
}

customElements.define("gilpgfp-index", GilPGFPIndex)