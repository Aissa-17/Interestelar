document.getElementById("contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Formulario enviado con éxito!");
});
function toggleDropdown() {
    var dropdown = document.getElementById("dropdownContent");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    }

    // Cerrar el desplegable si se hace clic fuera
    window.onclick = function(event) {
        if (!event.target.matches('.dropdown-toggle')) {
            var dropdown = document.getElementById("dropdownContent");
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        }
    }