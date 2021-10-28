/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const SHADOW_HTML = /* html */
  `<style>
    :host {
     display: block;
    }
    #nav {
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     box-sizing: border-box;
     overflow: auto;
     color: var(--colLetra, black);
     background-color: var(--colFondoNav);
     padding: var(--padMiNav);
     transition: transform 0.7s ease-in-out;
    }
    #nav>header {
     text-align: end
    }
    #nav>header>h1 {
     text-align: start;
     font-family: var(--fontSans);
     color: var(--colTituloLetra);
     text-shadow: var(--colTituloShadow);
    }
    #principal {
     background-color: var(--colBk, white);
    }
    :host(:not(.pres)) #principal {
     animation-timing-function: var(--introFuncion, ease-out);
     animation-duration: var(--introDuracion, 3s);
     animation-name: desplaza;
    }
    .controles {
     display: flex;
     margin 1rem;
     gap: var(--gap);
    }
    .anterior,
    .siguiente {
     display: inline-block;
     text-decoration: none;
     padding: var(--padCtrl);
     border: var(--borderCtrl)
    }
    .anterior.bye,
    .siguiente.bye {
      display: none;
    }
    .siguiente {
     margin-left: auto
    }

    @media screen and (max-width: 999px) {
     #cierra {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: var(--colSombra);
      transform: translateX(-150%);
      transition: transform 0.7s ease-out;
     }
     :host>#nav {
      width: min(var(--anchoNav), 70%);
      box-shadow: var(--navSombra);
     }
     :host(.xmenu)>#nav {
      transform: translateX(-150%);
     }
     :host(.menu)>#nav,
     :host(.menu)>#cierra {
       transform: translateX(0);
     }
    }
    @media screen and (min-width: 1000px) {
     #cierra {
      display: none;
     }
     #nav {
      width: var(--anchoNav, 200px);
     }
     :host(.menu)>#nav {
      transform: translateX(-150%);
     }
     #principal {
      transition: margin-left 0.7s ease-in-out;
     }
     :host(.xmenu)>#principal {
      margin-left: calc(var(--anchoNav, 200px));
     }
     :host(.xmenu) #abre {
      display: none
     }
    }
    @keyframes desplaza {
     from {
      transform: translateX(150%);
     }
     to {
      transform: translateX(0);
     }
    }
    @media print {
     #nav,
     .controles {
      display: none;
     }
    }
  </style>
  <div id=principal>
   <div class="controles">
    <button id="abre" type="button" title="Menú" class="cambiaMenú">
     &#x2630;
    </button>
    <a class="anterior" title="Página anterior">◀</a>
    <a class="siguiente" title="Página siguiente">▶</a>
   </div>
   <slot id=contenido></slot>
   <slot name="footer"></slot>
  </div>
  <div id="cierra" class="cambiaMenú"></div>
  <nav id="nav">
   <header>
    <button type="button" title="Cierra" class="cambiaMenú">
     &#x2715;
    </button>
    <h1>Contenido</h1>
   </header>
   <slot id=slotNav name=nav></slot>
  </nav>`;