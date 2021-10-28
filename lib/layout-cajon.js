/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

import { SHADOW_HTML } from "./layout-cajon_shadow.js"

const LOCAL_STORAGE_MENU = "menu"
const MENU = "menu"
const XMENU = "xmenu"

class LayoutCajón extends HTMLElement {
 constructor() {
  super()
  this.cambiaMenu = this.cambiaMenu.bind(this)
  this.teclas = this.teclas.bind(this)
  this.iniciaTouch = this.iniciaTouch.bind(this)
  this.desplazaTouch = this.desplazaTouch.bind(this)
  /**@type {string} */
  this.urlAnterior = ""
  /**@type {string} */
  this.urlSiguiente = ""
  /**@type {number|null} */
  this.iniciaX = null
  /**@type {number|null} */
  this.iniciaY = null
 }
 connectedCallback() {
  this.classList.add(XMENU)
  document.addEventListener("keydown", this.teclas)
  document.addEventListener("touchstart", this.iniciaTouch)
  document.addEventListener("touchmove", this.desplazaTouch)
  const shadowRoot = this.attachShadow({ mode: "open" })
  shadowRoot.innerHTML = SHADOW_HTML
  const nav = shadowRoot.querySelector("#nav")
  const abre = shadowRoot.querySelector("#abre")
  /** @type {HTMLAnchorElement[]} */
  const anteriores = Array.from(shadowRoot.querySelectorAll(".anterior"))
  /** @type {HTMLAnchorElement[]} */
  const siguientes = Array.from(shadowRoot.querySelectorAll(".siguiente"))
  if (abre) {
   abre.addEventListener("click", this.cambiaMenu)
  }
  const cambian = Array.from(shadowRoot.querySelectorAll(".cambiaMenú"))
  for (const c of cambian) {
   c.addEventListener("click", this.cambiaMenu)
  }
  const menu = localStorage.getItem(LOCAL_STORAGE_MENU)
  if (menu) {
   if (menu === MENU) {
    this.classList.remove(XMENU)
    this.classList.add(MENU)
   } else {
    this.classList.remove(MENU)
    this.classList.add(XMENU)
   }
  }
  const href = location.href
  document.body.classList.add("visible")
  if (nav) {
   const anclas = Array.from(nav.querySelectorAll("a"))
   for (let i = 0, len = anclas.length; i < len; i++) {
    const ancla = anclas[i]
    if (href === ancla.href || href + "index.html" === ancla.href
     || href.startsWith(ancla.href)) {
     ancla.classList.add("actual")
     const h1 = this.querySelector("h1")
     if (h1) {
      h1.innerHTML = ancla.innerHTML
     }
     if (i === 0) {
      this.urlAnterior = ""
      for (const anterior of anteriores) {
       anterior.classList.add("bye")
      }
     } else {
      this.urlAnterior = anclas[i - 1].href
      for (const anterior of anteriores) {
       anterior.href = this.urlAnterior
      }
     }
     if (i >= len - 1) {
      this.urlSiguiente = ""
      for (const siguiente of siguientes) {
       siguiente.classList.add("bye")
      }
     } else {
      this.urlSiguiente = anclas[i + 1].href
      for (const siguiente of siguientes) {
       siguiente.href = this.urlSiguiente
      }
     }
     for (let details = ancla.closest("details")
      ; details
      ; details = details.parentElement ?
       details.parentElement.closest("details") : null) {
      details.open = true
      const summary = details.querySelector("summary")
      if (summary) {
       summary.classList.add("actual")
      }
     }
    }
   }
  }
 }
 cambiaMenu() {
  this.classList.toggle(XMENU)
  this.classList.toggle(MENU)
  if (this.classList.contains(MENU)) {
   localStorage.setItem(LOCAL_STORAGE_MENU, MENU)
  } else {
   localStorage.setItem(LOCAL_STORAGE_MENU, XMENU)
  }
 }
 /** @param {KeyboardEvent} ev*/
 teclas(ev) {
  switch (ev.key) {
   case "ArrowLeft":
    this.retrocede()
    break
   case "ArrowRight":
    this.avanza()
    break
  }
 }
 retrocede() {
  if (this.urlAnterior) {
   location.href = this.urlAnterior
  }
 }
 avanza() {
  if (this.urlSiguiente) {
   location.href = this.urlSiguiente
  }
 }
 /** @param {TouchEvent} ev*/
 iniciaTouch(ev) {
  const toqueInicial = ev.touches[0]
  this.iniciaX = toqueInicial.clientX
  this.iniciaY = toqueInicial.clientY
 }
 /** @param {TouchEvent} ev*/
 desplazaTouch(ev) {
  if (this.iniciaX && this.iniciaY) {
   const desplazamiento = ev.touches[0]
   var desplazamientoX = desplazamiento.clientX
   var desplazamientoY = desplazamiento.clientY
   var difX = desplazamientoX - this.iniciaX
   var difY = desplazamientoY - this.iniciaY
   // Checa que el movimiento no sea muy corto.
   if (Math.abs(difX) + Math.abs(difY) > 90) {
    if (Math.abs(difX) > Math.abs(difY)) {
     if (difX > 70) {
      this.retrocede()
     } else {
      this.avanza()
     }
     // Reinicia valores.
     this.iniciaX = null
     this.iniciaY = null
    }
   }
  }
 }
}
customElements.define("layout-cajon", LayoutCajón)