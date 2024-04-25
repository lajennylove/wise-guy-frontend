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
  console.log("hello");

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
        768: {
          fixedWidth: 253,
        },
      },
    });
  }
});
