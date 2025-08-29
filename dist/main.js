    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Navbar effect on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) { 
        navbar.classList.add('glass-navbar', 'shadow-lg');
      } else {
        navbar.classList.remove('glass-navbar', 'shadow-lg');
      }
    });

    // Change link colors on scroll
    window.addEventListener('scroll', () => {
      const links = navbar.querySelectorAll("a");
      if (window.scrollY > 50) {
        links.forEach(link => {
          link.classList.add("text-green-600");
          link.classList.remove("text-white");
        });
      } else {
        links.forEach(link => {
          link.classList.add("text-white");
          link.classList.remove("text-green-600");
        });
      }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Typing effect
    document.addEventListener("DOMContentLoaded", function () {
      const text = "Pimpinan Daerah 'Aisyiyah Kota Malang";
      const el = document.getElementById("typing-text");
      let i = 0;
      let forward = true;

      function typeEffect() {
        if (forward) {
          if (i <= text.length) {
            el.textContent = text.substring(0, i++);
          } else {
            forward = false;
            setTimeout(typeEffect, 1500); 
            return;
          }
        } else {
          if (i >= 0) {
            el.textContent = text.substring(0, i--);
          } else {
            forward = true;
          }
        }
        setTimeout(typeEffect, forward ? 100 : 50);
      }

      typeEffect();
    });