document.addEventListener("DOMContentLoaded", function () {
    const selectBox = document.querySelector(".custom-select");
    const dropdown = document.getElementById("dropdown-list");

    selectBox.addEventListener("click", function () {
        dropdown.classList.toggle("show");
    });

    // Cerrar el menú si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!selectBox.contains(event.target)) {
            dropdown.classList.remove("show");
        }
    });
});

// Función para seleccionar una categoría y mostrarla
function selectCategory(element) {
    document.getElementById("category-label").innerText = element.innerText;
    document.getElementById("dropdown-list").classList.remove("show");
}
