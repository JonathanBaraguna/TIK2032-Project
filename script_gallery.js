document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gambar');

    images.forEach(image => {
        image.addEventListener('click', () => {
            if (image.style.transform === 'scale(1.5)') {
                image.style.transform = 'scale(1)';
            } else {
                image.style.transform = 'scale(1.5)';
            }
        });
    });
});
