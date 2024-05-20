// Ambil semua elemen gambar di galeri
const galleryItems = document.querySelectorAll('.gallery-item');

// Tambahkan efek transisi ketika gambar dihover
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1)';
        item.style.transition = 'transform 0.3s ease';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
        item.style.transition = 'transform 0.3s ease';
    });
});

// Tampilkan pesan ketika gambar diklik
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked image ${item.dataset.imageId}`);
    });
});