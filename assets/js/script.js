
// counter run only once when visible in screen

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        let endValue = counter.textContent;
        let startValue = 0;
        let updating = setInterval(() => {
          startValue += endValue / 200;
          counter.textContent = startValue.toFixed(0);
          if (startValue > endValue) {
            counter.textContent = endValue;
            clearInterval(updating);
            observer.unobserve(counter);
          }
        }, 10);
      }
    });
  },
  { threshold: 1 }
);
document
  .querySelectorAll(".counter")
  .forEach((counter) => observer.observe(counter));
  // -------------------------------

var swiper = new Swiper('.swiper-slide-three', {
  slidesPerView: 1,
  loop: true,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  speed:1000,
  autoplay: 
    {
      delay: 2000,
    },	   
   
    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
}); 


