document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll untuk Link Navigasi
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // 2. Scroll Reveal: Muncul saat di-scroll
    const revealSections = () => {
        const sections = document.querySelectorAll('.section-reveal');
        sections.forEach(sec => {
            const windowHeight = window.innerHeight;
            const revealTop = sec.getBoundingClientRect().top;
            const revealPoint = 150;

            if (revealTop < windowHeight - revealPoint) {
                sec.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Cek saat pertama kali load
});