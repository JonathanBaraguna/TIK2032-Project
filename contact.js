// Ambil semua tombol kontak di halaman
const contactButtons = document.querySelectorAll('.contact-button');

// Tambahkan efek highlight ketika tombol dihover
contactButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#4caf50';
        button.style.transition = 'background-color 0.3s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '';
        button.style.transition = 'background-color 0.3s ease';
    });
});

// Tampilkan pesan sesuai jenis kontak ketika tombol diklik
contactButtons.forEach(button => {
    button.addEventListener('click', () => {
        const contactType = button.dataset.contactType;
        let message = '';

        switch(contactType) {
            case 'phone':
                message = 'You clicked the phone button!';
                break;
            case 'email':
                message = 'You clicked the email button!';
                break;
            case 'facebook':
                message = 'You clicked the Facebook button!';
                break;
            case 'instagram':
                message = 'You clicked the Instagram button!';
                break;
            case 'telegram':
                message = 'You clicked the Telegram button!';
                break;
            default:
                break;
        }

        alert(message);
    });
});