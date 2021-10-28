export class InstruccionesNav extends HTMLElement {
 connectedCallback() {
  this.classList.add("noPrint")
  this.innerHTML = /* html */
   `<section>
     <h1>Instrucciones de navegación</h1>
     <ul>
      <li>
       <p>
        Los siguientes controles te permitirán navegar por todo el contenido del
        sitio.
       </p>
      </li>
     </ul>
     <dl>
      <dt>
       <button type="button" title="Cierra">&#x2715;</button>
      </dt>
      <dd>
       <p>Oculta el menú de navegación.</p>
      </dd>
      <dt>
       <button type="button" title="Menú">&#x2630;</button>
      </dt>
      <dd>
       <p>Muestra el menú de navegación.</p>
      </dd>
      <dt>
       <a class="anterior" title="Página anterior">◀</a>
      </dt>
      <dd>
       <p>Regresa a la página anterior.</p>
      </dd>
      <dt>
       <a class="siguiente" title="Página siguiente">▶</a>
      </dt>
      <dd>
       <p>Avanza a la página siguiente.</p>
      </dd>
     </dl>
    </section>`;
 }
}

customElements.define("instrucciones-nav", InstruccionesNav);