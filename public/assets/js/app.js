// Ambil elemen penting
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Navbar effect & link color on scroll
window.addEventListener("scroll", () => {
  const links = navbar.querySelectorAll("a");
  const scrolled = window.scrollY > 50;

  // Tambah/kurangi kelas untuk navbar
  navbar.classList.toggle("glass-navbar", scrolled);
  navbar.classList.toggle("shadow-lg", scrolled);

  // Ubah warna link
  links.forEach(link => {
    link.classList.toggle("text-green-600", scrolled);
    link.classList.toggle("text-white", !scrolled);
  });
});

// Mobile menu toggle
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Typing effect
document.addEventListener("DOMContentLoaded", () => {
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
        setTimeout(typeEffect, 1500); // jeda sebelum hapus
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

// Fade-in effect pakai IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // hanya sekali muncul
      }
    });
  }, { threshold: 0.1 });

  fadeElements.forEach(el => observer.observe(el));
});
