/**
 * Verify if the DOM is ready
 * @param {function} fn
 * @return {void}
 */
function domReady(fn) {
  // If we're early to the party
  document.addEventListener("DOMContentLoaded", fn);
  // If late; I mean on time.
  if (
    document.readyState === "interactive" ||
    document.readyState === "complete"
  ) {
    fn();
  }
}

/**
 * Application entrypoint
 */
domReady(() => {
  console.log("The Dom is ready! 🚀");

  if (document.querySelector(".my-slider")) {
    var slider = tns({
      container: ".my-slider",
      slideBy: "page",
      autoplay: true,
      controlsText: [
        '<img src="/assets/src/images/next_icon.png" />',
        '<img src="/assets/src/images/next_icon.png" />',
      ],
      loop: true,
      mouseDrag: true,
      gutter: 10,
      controls: true,
      fixedWidth: 86,
      responsive: {
        600: {
          fixedWidth: 253,
        },
      },
    });
  }

  /**
   * Video slider home page with thumbnails
   */

  //thumbnails
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1.5,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    breakpoints: {
      460: {
        slidesPerView: 2.5,
      },

      768: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 4.5,
      },
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
  });

  /**
   * Basics container Slider
   */

  var swiper = new Swiper(".basicSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    breakpoints: {
      769: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /**
   * Featured Games container Slider
   */

  var swiper = new Swiper(".featuredSwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    breakpoints: {
      769: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
