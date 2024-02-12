

const navLinks = document.querySelectorAll('.header-right a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#ddd';
        link.style.color = 'black';
    });

    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
        link.style.color = 'white';
    });
});

const welcomeText = document.querySelector('.hero-section h1');

welcomeText.addEventListener('mouseenter', () => {
    welcomeText.style.transform = 'scale(1.1)';
});

welcomeText.addEventListener('mouseleave', () => {
    welcomeText.style.transform = 'scale(1)';
});

const galleryImages = document.querySelectorAll('.gallery img');

galleryImages.forEach(image => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
        image.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
    });
});

const tableRows = document.querySelectorAll('.menu-table tr');

tableRows.forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = '#f1f1f1';
    });

    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = '';
    });
});




w

