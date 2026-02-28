
  document.addEventListener('DOMContentLoaded', () => {
    
    // --- LÓGICA DEL BOTÓN "VOLVER ARRIBA" ---
    const btnBackToTop = document.getElementById("btnBackToTop");

    if (btnBackToTop) {
        // Mostrar u ocultar el botón al hacer scroll
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) { // Si bajó más de 300px
                btnBackToTop.style.display = "block";
            } else {
                btnBackToTop.style.display = "none";
            }
        });

        // Al hacer clic, subir suavemente
        btnBackToTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
