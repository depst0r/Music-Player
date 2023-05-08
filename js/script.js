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

  function dataBaseMusic(data) {
    fetch(data)
      .then((dataJSON) => dataJSON.json())
      .then((res) => console.log(res));
  }

  class MyMysic {
    constructor(id, artistName, nameOfTheSong, img, duration) {
      this.id = id;
      this.artistName = artistName;
      this.nameOfTheSong = nameOfTheSong;
      this.img = img;
      this.duration = duration;
      this.parent = document.querySelector(parentSelector);
    }
  }

  like(heart);
  function playPauseBnts(btns) {}
  playPauseBnts(btns);
});
