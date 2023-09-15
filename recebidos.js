document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = ["./recebidos/01.png", "./recebidos/02.jpg", "./recebidos/05.jpg","./recebidos/loick01.jpg","./recebidos/loick02.jpg","./recebidos/rafael01.jpg","./recebidos/rafael02.jpg"];
    const descriptions = ["De: Vovó, bisa e Leticya", "De: Vovó, bisa e Leticya", "De: Vovó, bisa e Leticya","De: Loick","De: Loick","De: Rafael","De: Rafael"];

    function openLightbox(index) {
        currentImageIndex = index;
        const lightbox = document.getElementById("lightbox");
        const lightboxImage = document.getElementById("lightbox-image");
        const imageDescription = document.querySelector(".image-description");

        lightboxImage.src = images[index];
        imageDescription.textContent = descriptions[index];
        lightbox.style.display = "block";
    }

    function closeLightbox() {
        const lightbox = document.getElementById("lightbox");
        lightbox.style.display = "none";
    }

    function prevImage() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            openLightbox(currentImageIndex);
        }
    }

    function nextImage() {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
            openLightbox(currentImageIndex);
        }
    }

    // Configurar manipuladores de eventos para miniaturas
    const thumbnails = document.querySelectorAll(".thumbnails img");
    thumbnails.forEach(function (thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            openLightbox(index);
        });
    });

    // Configurar manipulador de evento para o botão "X" no lightbox
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", closeLightbox);

    // Configurar manipuladores de eventos para setas de navegação
    document.querySelector(".prev").addEventListener("click", prevImage);
    document.querySelector(".next").addEventListener("click", nextImage);
});
