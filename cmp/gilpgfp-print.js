import "../js/config.js"
import { Diapositiva } from "../lib/Diapositiva.js"
import "./gilpgfp-index.js"

export class GilPGFPPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback()
  this.innerHTML = /* html */
   `<gilpgfp-index></gilpgfp-index>
    <mi-footer></mi-footer>
    <section>
     <h1 class="presentación">1. Fundamentos</h1>
     <fundamentos-print></fundamentos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">2. Conceptos básicos</h1>
     <conceptos-print></conceptos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">3. Variables</h1>
     <variables-print></variables-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">4. Comentarios</h1>
     <comentarios-print></comentarios-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">5. Bloques</h1>
     <bloques-print></bloques-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">6. La estructura de control <strong>if</strong></h1>
     <if-print></if-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">
      7. La estructura de control <strong>if-else</strong>
     </h1>
     <if-else-print></if-else-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">8. Condicional múltiple</h1>
     <if-print></if-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">9. Condicional múltiple con <strong>else</strong></h1>
     <multiple-else-print></multiple-else-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">10. Más textos</h1>
     <textos-print></textos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">11. Operadores lógicos</h1>
     <logicos-print></logicos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">12. La estructura de control <strong>do-while</strong></h1>
     <do-while-print></do-while-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">13. Números</h1>
     <numeros-print></numeros-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">14. Más números</h1>
     <mas-numeros-print></mas-numeros-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">15. La estructura de control <strong>while</strong></h1>
     <while-print></while-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">16. La estructura de control <strong>for</strong></h1>
     <for-print></for-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">17. La estructura de control <strong>switch</strong></h1>
     <switch-print></switch-print>
     <mi-footer></mi-footer>
    </section>`
 }
}

customElements.define("gilpgfp-print", GilPGFPPrint)