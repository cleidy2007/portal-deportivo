// Evita números o símbolos en los campos de texto
function soloLetras(e) {
  const key = e.key;
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;
  if (!regex.test(key)) {
    e.preventDefault();
  }
}

// Evita que el formulario recargue la página
document.getElementById("form-registro").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("mensaje").textContent = "¡Registro enviado correctamente!";
});// Evita números o símbolos en los campos de texto
function soloLetras(e) {
  const key = e.key;
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;
  if (!regex.test(key)) {
    e.preventDefault();
  }
}

// Evita que el formulario recargue la página
document.getElementById("form-registro").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("mensaje").textContent = "¡Registro enviado correctamente!";
});// Evita números o símbolos en los campos de texto
function soloLetras(e) {
  const key = e.key;
  const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]$/;
  if (!regex.test(key)) {
    e.preventDefault();
  }
}

// Evita que el formulario recargue la página
document.getElementById("form-registro").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("mensaje").textContent = "¡Registro enviado correctamente!";
});