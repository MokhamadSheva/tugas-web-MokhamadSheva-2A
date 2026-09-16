/* ============================================================
   MOKHAMAD SHEVA - DEVELOPER PORTFOLIO JAVASCRIPT
   Responsive Navbar Toggle & Interactive Enhancements
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('article[id]');
    const contactForm = document.getElementById('contactForm');

    // 1. Toggle Menu Navigasi Mobile
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Tutup menu mobile ketika tautan diklik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            });
        });
    }

    // 2. Scrollspy (Highlight Menu Navigasi Aktif saat Scroll)
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Tangani Pengiriman Form Kontak
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('name').value;
            alert(`Terima kasih, ${nameInput}! Pesan Anda telah berhasil dikirim.`);
            contactForm.reset();
        });
    }
});
