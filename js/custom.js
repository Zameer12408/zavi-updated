
(function ($) {

  "use strict";

  // HERO SLIDE
  $('.hero-slide').backstretch([
    "images/slideshow/banner/banner-1.png",
    "images/slideshow/banner/marble-min.html"
  ], { duration: 2000, fade: 750 });

  // REVIEWS CAROUSEL
  $('.reviews-carousel').owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  // CUSTOM LINK
  $('.smoothscroll').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

})(window.jQuery);


function redirectToWhatsApp(productName) {

  // const productContainer = button.closest(".shop-thumb");
  const phoneNumber = "9911994328"; 
  const message = `Hello! I'm interested in purchasing your Products `;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, '_blank');
}

function sendDetailToWhatsApp() {
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const fullMessage = `Hello Name: ${firstName} ${lastName} Email: ${email} Message: ${message}`;
    const phoneNumber = '9911994328'; 

    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(whatsappUrl, '_blank');
  });
}


document.addEventListener('DOMContentLoaded', sendDetailToWhatsApp);


const categoryLinks = document.querySelectorAll(".category-link");

  categoryLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // stop normal link
      const category = this.getAttribute("data-category");

      // Redirect with category parameter
      window.location.href = "product-category.html?category=" + category;
    });
  });
