window.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("section");
  const btns = section.querySelectorAll("i");
  const heart = document.querySelector(".fa-heart");

  const like = (heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("active");
    });
  };

  function animation(iterm) {
    const start = Date.now();
  }

  console.log(Date.now());

  like(heart);
  function playPauseBnts(btns) {}

  playPauseBnts(btns);
});
