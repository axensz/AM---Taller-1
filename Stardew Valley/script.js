document.addEventListener("DOMContentLoaded", function () {
    // --- Leer más / Leer menos funcionalidad ---
    const readMoreLink = document.getElementById("read-more");
    const fullText = document.getElementById("full-text");
    const shortText = document.getElementById("short-text");

    if (readMoreLink) {
        readMoreLink.addEventListener("click", function (event) {
            event.preventDefault();

            if (fullText.style.display === "none") {
                fullText.style.display = "block"; // Cambiado de inline a block
                shortText.style.display = "none";
                readMoreLink.innerHTML = '<i class="fa fa-plus"></i> Read less';
            } else {
                fullText.style.display = "none";
                shortText.style.display = "inline"; 
                readMoreLink.innerHTML = '<i class="fa fa-plus"></i> Read more';
            }
        });
    }

    // --- Manejo del dropdown personalizado ---
    const customSelect = document.querySelector(".custom-select");
    const dropdownList = document.getElementById("dropdown-list");

    if (customSelect && dropdownList) {
        customSelect.addEventListener("click", function () {
            dropdownList.classList.toggle("show");
        });

        // Cerrar el dropdown al hacer clic fuera de él
        window.addEventListener("click", function (event) {
            if (!event.target.matches(".custom-select *")) {
                dropdownList.classList.remove("show");
            }
        });

        // Seleccionar una categoría
        window.selectCategory = function (element) {
            const categoryLabel = document.getElementById("category-label");
            if (categoryLabel) {
                categoryLabel.textContent = element.textContent;
            }
            dropdownList.classList.remove("show");
        };
    }
});
