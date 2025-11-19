document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. TYPING ANIMATION (Home Hero) --- */
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const words = ['Websites.', 'Brands.', 'Experiences.'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            if (isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500);
            } else {
                setTimeout(type, isDeleting ? 100 : 150);
            }
        }
        type();
    }

    /* --- 2. SCROLL SYNC (Desktop Sidebar) --- */
    const navLinks = document.querySelectorAll('.side-nav a');
    const sections = document.querySelectorAll('.section');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Trigger when section is 1/3 up the viewport
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            // Only highlight links that point to #ids (not external pages)
            if (link.getAttribute('href').includes('#' + current)) {
                link.classList.add('active');
            }
        });
    });

    /* --- 3. FADE UP ON SCROLL --- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

});