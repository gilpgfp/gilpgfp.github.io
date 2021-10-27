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
         <ol>
          <li>
           <details>
            <summary>
             <h4>
              <a href="/1_fundamentos/index.html">Fundamentos</a>
             </h4>
            </summary>
             <ol type="A">
              <li>
               <p><a href="/1_fundamentos/a_algoritmo.html">Algoritmo</a></p>
              </li>
              <li>
               <p>
                <a href="/1_fundamentos/b_hardware.html">Hardware</a>
               </p>
              </li>
              <li>
               <p><a href="/1_fundamentos/c_software.html">Software</a></p>
              </li>
              <li>
               <p>
                <a href="/1_fundamentos/d_lenguaje.html">Lenguaje de
                 programación</a>
               </p>
              </li>
              <li>
               <p>
                <a href="/1_fundamentos/e_compilador.html">Compilador</a>
               </p>
              </li>
              <li>
               <p><a href="/1_fundamentos/f_interprete.html">Intérprete</a></p>
              </li>
              <li>
               <p>
                <a href="/1_fundamentos/g_pseudocodigo.html">Pseudocódigo</a>
               </p>
              </li>
              <li>
               <p><a href="/1_fundamentos/h_resumen.html">Resumen</a></p>
              </li>
             </ol>
            </details>
           </li>
           <li>
             <details>
               <summary>
               <h4>
                 <a href="/2_conceptos/index.html">Conceptos Básicos</a>
               </h4>
               </summary>
               <ol type="A">
                 <li>
                   <p><a href="/2_conceptos/a_js.html">JavaScript</a></p>
                 </li>
                 <li>
                   <p><a href="/2_conceptos/b_textos.html">Textos</a></p>
                 </li>
                 <li>
                   <p>
                     <a href="/2_conceptos/c_string.html">El tipo string</a>
                   </p>
                 </li>
                 <li>
                   <p><a href="/2_conceptos/d_write.html">document.write</a></p>
                 </li>
                 <li>
                   <p><a href="/2_conceptos/e_orden.html">Orden de ejecución</a></p>
                 </li>
                 <li>
                   <p><a href="/2_conceptos/f_resumen.html">Resumen</a></p>
                 </li>
               </ol>
             </details>
           </li>
           <li>
             <details>
               <summary>
                 <h4>
                   <a href="/3_variables/index.html">Variables</a>
                 </h4>
               </summary>
               <ol type="A">
                 <li>
                   <p>
                     <a
                       href="/3_variables/a_identificadores.html">Identificadores</a>
                   </p>
                 </li>
                 <li>
                   <p><a href="/3_variables/b_variables.html">Variables</a></p>
                 </li>
                 <li>
                   <p><a href="/3_variables/c_constantes.html">Constantes</a></p>
                 </li>
                 <li>
                   <p>
                     <a href="/3_variables/d_duplicadas.html">Variables
                       Duplicadas</a>
                   </p>
                 </li>
                 <li>
                   <p>
                     <a href="/3_variables/e_no_encontradas.html">Variables no
                       encontradas</a>
                   </p>
                 </li>
                 <li>
                   <p>
                     <a href="/3_variables/f_prompt.html">La función prompt</a>
                   </p>
                 </li>
                 <li>
                   <p><a href="/3_variables/g_resumen.html">Resumen</a></p>
                 </li>
               </ol>
             </details>
           </li>
           <li>
             <details>
               <summary>
                 <h4>
                   <a href="/4_numeros/index.html">Números</a>
                 </h4>
               </summary>
               <ol type="A">
                 <li>
                   <p>
                     <a
                       href="/4_numeros/a_recta.html">Recta</a>
                   </p>
                 </li>
               </ol>
             </details>
           </li>
         </ol>
        </li>
       </ul>`;
  }
}

customElements.define("mi-nav", MiNav);