document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Menghentikan perilaku default dari link
            
            const url = link.getAttribute('href'); // Mengambil URL dari atribut href
            window.location.href = url; // Mengarahkan ke URL yang diambil
        });
    });
});