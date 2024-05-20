// Ambil semua artikel di halaman blog
const blogPosts = document.querySelectorAll('.blog-post');

// Tambahkan event listener untuk setiap artikel
blogPosts.forEach(post => {
    post.addEventListener('click', () => {
        // Perbesar dan pusatkan artikel yang diklik
        zoomIn(post);
    });
});

// Fungsi untuk memperbesar dan pusatkan artikel
function zoomIn(element) {
    // Perbesar artikel yang diklik
    element.style.transform = 'scale(1.2)';
    element.style.transition = 'transform 0.3s ease';

    // Pusatkan artikel yang diklik di tengah layar
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2 - scrollTop;

    window.scrollTo({
        top: centerY - window.innerHeight / 2,
        left: centerX - window.innerWidth / 2,
        behavior: 'smooth'
    });

    // Hapus efek perbesaran setelah beberapa detik
    setTimeout(() => {
        element.style.transform = '';
        element.style.transition = '';
    }, 3000); // Ubah angka 3000 menjadi jumlah milidetik yang diinginkan sebelum kembali ke ukuran normal
}