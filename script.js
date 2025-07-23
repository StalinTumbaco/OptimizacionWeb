// Script innecesariamente pesado y bloqueante

// Espera activa para bloquear el hilo principal
function bloqueoPesado() {
  const inicio = Date.now();
  while (Date.now() - inicio < 3000) {
    // Espera activa de 3 segundos
  }
  console.log("Bloqueo artificial completado");
}

// Crear muchos elementos inútiles
function crearMuchosElementos() {
  for (let i = 0; i < 5000; i++) {
    const div = document.createElement("div");
    div.textContent = "Elemento inútil número " + i;
    document.body.appendChild(div);
  }
  console.log("Elementos innecesarios añadidos al DOM");
}

// Ejecutar ambas funciones inmediatamente sin esperar DOMContentLoaded
bloqueoPesado();
crearMuchosElementos();
