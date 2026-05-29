window.addEventListener("scroll", () => {
  document.querySelector(".background").style.transform =
    `translateY(${window.scrollY * 0.1}px)`;
});