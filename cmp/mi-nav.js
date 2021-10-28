/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
export class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ul>
        <li><p><a href="/index.html">Inicio</a></p></li>
        <li>
         <h3>Lecciones</h3>
         <details>
          <summary>
           <h4>
            <a href="/1_fundamentos/index.html"><span>1.</span>
             <span>Fundamentos</span></a>
           </h4>
          </summary>
          <div>
           <a href="/1_fundamentos/a_algoritmo.html">A. Algoritmo</a>
          </div>
          <div>
           <a href="/1_fundamentos/b_hardware.html">B. Hardware</a>
          </div>
          <div>
           <a href="/1_fundamentos/c_software.html">C. Software</a>
          </div>
          <div>
           <a href="/1_fundamentos/d_lenguaje.html"><span>D.</span>
           <span>Lenguaje de programación</span></a>
          </div>
          <div>
           <a href="/1_fundamentos/e_compilador.html">E. Compilador</a>
          </div>
          <div>
           <a href="/1_fundamentos/f_interprete.html">F. Intérprete</a>
          </div>
          <div>
           <a href="/1_fundamentos/g_pseudocodigo.html">G. Pseudocódigo</a>
          </div>
          <div><a href="/1_fundamentos/h_resumen.html">H. Resumen</a></div>
         </details>
         <details>
          <summary>
           <h4><a href="/2_conceptos/index.html"><span>2.</span>
           <span>Conceptos Básicos</span></a></h4>
          </summary>
          <div><a href="/2_conceptos/a_js.html">JavaScript</a></div>
          <div><a href="/2_conceptos/b_textos.html">Textos</a></div>
          <div><a href="/2_conceptos/c_string.html">El tipo string</a></div>
          <div><a href="/2_conceptos/d_write.html">document.write</a></div>
          <div><a href="/2_conceptos/e_orden.html">Orden de ejecución</a></div>
          <div><a href="/2_conceptos/f_resumen.html">Resumen</a></div>
         </details>
         <details>
          <summary>
           <h4><a href="/3_variables/index.html">3. Variables</a></h4>
          </summary>
          <div>
           <a href="/3_variables/a_identificadores.html">Identificadores</a>
          </div>
          <div><a href="/3_variables/b_variables.html">Variables</a></div>
          <div><a href="/3_variables/c_constantes.html">Constantes</a></div>
          <div>
           <a href="/3_variables/d_duplicadas.html">Variables Duplicadas</a>
          </div>
          <div>
            <a href="/3_variables/e_no_encontradas.html">Variables no
             encontradas</a>
          </div>
          <div><a href="/3_variables/f_prompt.html">La función prompt</a></div>
          <div><a href="/3_variables/g_resumen.html">Resumen</a></div>
         </details>
         <details>
          <summary>
           <h4><a href="/4_numeros/index.html">4. Números</a></h4>
          </summary>
          <div><a href="/4_numeros/a_recta.html">Recta</a></div>
         </details>
        </li>
       </ul>`;
  }
}

customElements.define("mi-nav", MiNav);