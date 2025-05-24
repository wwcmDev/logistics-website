import '../css/styles.scss';
import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel';
import counterUp from 'counterup2';
import AOS from 'aos';
import 'aos/dist/aos.css';



document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  AOS.init();

});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.count');
  const statsSection = document.querySelector('.statistics');

  if (statsSection) {
      const observer = new IntersectionObserver(
          (entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      counters.forEach((counter) => {
                          counterUp(counter, {
                              duration: 2000,
                              delay: 16,
                          });
                      });
                      observer.disconnect();
                  }
              });
          },
          { threshold: 0.5 }
      );

      observer.observe(statsSection);
  }
});

