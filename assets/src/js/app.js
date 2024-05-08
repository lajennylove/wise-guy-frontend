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

  /** Search bar in navigation js */
  const searchInput = document.getElementById("searchInput");
  const searchIcon = document.getElementById("searchIcon");
  const closeIcon = document.getElementById("closeIcon");

  searchIcon.addEventListener("click", function () {
    closeIcon.style.display = "block";
    searchIcon.style.display = "none";
    searchInput.style.display = "block";
  });

  closeIcon.addEventListener("click", function () {
    searchIcon.style.display = "block";
    closeIcon.style.display = "none";
    searchInput.style.display = "none";
  });

  /**
   *
   * On hover yellow line on navbar
   */

  // Function to handle mouseover event
  function handleMouseOver(event) {
    event.target.classList.remove("nav-bg");
  }

  // Function to handle mouseout event
  function handleMouseOut(event) {
    event.target.classList.add("nav-bg");
  }

  // Add event listeners to all list items with the class 'nav-bg'
  const navItems = document.querySelectorAll(".nav-bg");
  navItems.forEach((item) => {
    item.addEventListener("mouseover", handleMouseOver);
    item.addEventListener("mouseout", handleMouseOut);
  });

  /** logo slider */

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
      300: {
        slidesPerView: 1.25,
      },

      460: {
        slidesPerView: 1.75,
      },

      600: {
        slidesPerView: 2.25,
      },

      768: {
        slidesPerView: 2.5,
      },
      991: {
        slidesPerView: 3.5,
      },
      1200: {
        slidesPerView: 4.5,
      },

      1500: {
        slidesPerView: 5.5,
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
      420: {
        slidesPerView: 2,
      },

      480: {
        slidesPerView: 2.5,
      },

      620: {
        slidesPerView: 3,
      },

      880: {
        slidesPerView: 3.5,
      },

      1024: {
        slidesPerView: 4,
      },

      1200: {
        slidesPerView: 4.5,
      },

      1320: {
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
      400: {
        slidesPerView: 3,
      },

      540: {
        slidesPerView: 3.5,
      },

      640: {
        slidesPerView: 4.5,
      },

      768: {
        slidesPerView: 3.5,
      },

      1024: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
