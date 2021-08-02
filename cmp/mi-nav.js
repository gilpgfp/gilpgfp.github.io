/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ul>
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
                  <a href="/2_fundamentos/index.html">Conceptos Básicos</a>
                </h4>
                </summary>
                <ol>
                  <li>
                    <p><a href="/d_js/1_js.html">Textos</a></p>
                  </li>
                  <li>
                    <p><a href="/d_js/2_textos.html">Números</a></p>
                  </li>
                  <li>
                    <p>
                      <a href="/d_js/3_string.html">Booleanos</a>
                    </p>
                  </li>
                  <li>
                    <p><a href="/d_js/4_console.html">console.log</a></p>
                  </li>
                  <li>
                    <p><a href="/d_js/5_orden.html">Orden de ejecución</a></p>
                  </li>
                  <li>
                    <p><a href="/d_js/7_resumen.html">Resumen</a></p>
                  </li>
                </ol>
              </details>
            </li>
          </ol>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);