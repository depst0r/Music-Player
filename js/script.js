window.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("section");
  const btns = section.querySelectorAll("i");
  const heart = document.querySelector(".fa-heart");

  const like = (heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("active");
    });
  };

  //   function animation(iterm) {
  //     const start = Date.now();

  //     const timer = setInterval(() => {
  //         let timePassed =
  //     })
  //   }

  fetch("http://localhost:3000/music")
    .then((res) => {
      res.json;
    })
    .then((data) => {
      console.log(data);
    });

  like(heart);
  function playPauseBnts(btns) {}
  kk;
  playPauseBnts(btns);
});
