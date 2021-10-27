export class InstruccionesNav extends HTMLElement {
 connectedCallback() {
  this.classList.add("noPrint")
  this.innerHTML = /* html */
   `<h2>Instrucciones de navegación</h2>
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
      <a class="anterior">◀</a>
     </dt>
     <dd>
      <p>Regresa a la página anterior.</p>
     </dd>
     <dt>
      <a class="siguiente">▶</a>
     </dt>
     <dd>
      <p>Avanza a la página siguiente.</p>
     </dd>
    </dl>`;
 }
}

customElements.define("instrucciones-nav", InstruccionesNav);