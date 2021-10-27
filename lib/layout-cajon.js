/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { SHADOW_HTML } from "./layout-cajon_shadow.js";

const LOCAL_STORAGE_MENU = "menu";
const MENU = "menu";
const XMENU = "xmenu";

class LayoutCajón extends HTMLElement {
 constructor() {
  super();
  this.cambiaMenú = this.cambiaMenú.bind(this);
  /**@type {HTMLElement|null} */
  this.nav = null;
  /**@type {HTMLElement|null} */
  this.principal = null;
 }
 connectedCallback() {
  this.classList.add(XMENU);
  const shadowRoot = this.attachShadow({ mode: "open" });
  shadowRoot.innerHTML = SHADOW_HTML;
  this.nav = shadowRoot.querySelector("#nav");
  this.principal = shadowRoot.querySelector("#principal");
  const botón = shadowRoot.querySelector("#abre");
  /** @type {HTMLAnchorElement[]} */
  const anteriores = Array.from(shadowRoot.querySelectorAll(".anterior"));
  /** @type {HTMLAnchorElement[]} */
  const siguientes = Array.from(shadowRoot.querySelectorAll(".siguiente"));
  if (botón) {
   botón.addEventListener("click", this.cambiaMenú);
  }
  const cambian = Array.from(shadowRoot.querySelectorAll(".cambiaMenú"));
  for (const c of cambian) {
   c.addEventListener("click", this.cambiaMenú);
  }
  const menu = localStorage.getItem(LOCAL_STORAGE_MENU);
  if (menu) {
   if (menu === MENU) {
    this.classList.remove(XMENU);
    this.classList.add(MENU);
   } else {
    this.classList.remove(MENU);
    this.classList.add(XMENU);
   }
  }
  /**@type {HTMLSlotElement|null} */
  const slotNav = shadowRoot.querySelector("#slotNav");
  if (slotNav) {
   slotNav.addEventListener("slotchange", () => {
    document.body.classList.add("visible");
    const assignedElements = slotNav.assignedElements();
    const href = location.href;
    for (const element of assignedElements) {
     const anclas = Array.from(element.querySelectorAll("a"));
     for (let i = 0, len = anclas.length; i < len; i++) {
      const ancla = anclas[i];
      if (href === ancla.href || href + "index.html" === ancla.href
       || href.startsWith(ancla.href)) {
       ancla.classList.add("actual");
       // const h1 = this.querySelector("h1");
       // if (h1) {
       //  h1.innerHTML = ancla.innerHTML;
       // }
       if (anteriores.length > 0) {
        if (i === 0) {
         for (const anterior of anteriores) {
          anterior.classList.add("bye");
         }
        } else {
         for (const anterior of anteriores) {
          anterior.href = anclas[i - 1].href;
         }
        }
       }
       if (siguientes. length > 0) {
        if (i >= len - 1) {
         for (const siguiente of siguientes) {
          siguiente.classList.add("bye");
         }
        } else {
         for (const siguiente of siguientes) {
          siguiente.href = anclas[i + 1].href;
         }
        }
       }
       for (let details = ancla.closest("details");
        details;
        details = details.parentElement ?
         details.parentElement.closest("details") : null) {
        details.open = true;
        const summary = details.
         querySelector("summary");
        if (summary) {
         summary.classList.add("actual");
        }
       }
      }
     }
    }
   });
  }
 }
 cambiaMenú() {
  this.classList.toggle(XMENU);
  this.classList.toggle(MENU);
  if (this.classList.contains(MENU)) {
   localStorage.setItem(LOCAL_STORAGE_MENU, MENU);
  } else {
   localStorage.setItem(LOCAL_STORAGE_MENU, XMENU);
  }
 }
}
customElements.define("layout-cajon", LayoutCajón);