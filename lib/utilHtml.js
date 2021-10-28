/**
 * Asigna el título de la página usando el valor de h1.
 * @param {string} app nombre de la app.
 */
export function setTitle(app) {
 let h1 = document.querySelector("h1")
 if (h1) {
  document.title = `${h1.textContent} - ${app}`
 }
}

/**
 * Registra el service worker con la url de parámetro.
 * @param {string} url del service worker.
 */
export async function registraServiceWorker(url) {
 try {
  if (navigator.serviceWorker) {
   const registro = await navigator.serviceWorker.register(url)
   console.log("Service Worker registrado.")
   console.log(registro)
  }
 } catch (e) {
  muestraError(e)
 }
}

/**
 * Muestra una excepción en la consola y despliega un cuadro de alerta con el
 * valor de la propiedad message de la excepción.
 * @param {Error} e excepción que se muestra.
 */
function muestraError(e) {
 console.error(e)
 alert(e.message)
}
