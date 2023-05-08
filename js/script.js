window.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("section");
  const btns = section.querySelectorAll("i");
  const heart = document.querySelector(".fa-heart");

  const like = (heart) => {
    heart.addEventListener("click", () => {
      heart.classList.toggle("active");
    });
  };

  class MySongs {
    constructor(artistName, nameOfTheSong, img, duration, ...classes) {
      this.artistName = artistName;
      this.nameOfTheSong = nameOfTheSong;
      this.img = img;
      // this.duration = duration;
      this.parent = document.querySelector(".songs");
      this.classes = classes;
    }

    render() {
      const element = document.createElement("div");

      if (this.classes.length === 0) {
        this.classes = "icon3";
        element.classList.add(this.classes);
      } else {
        this.classes.map((className) => element.classList.add(className));
      }

      element.innerHTML = `
      <p class="name">${this.nameOfTheSong}</p>
      <i class="fa fa-play"></i>
      `;
      this.parent.append(element);
    }
  }

  const getPlayList = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fets ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getPlayList("http://localhost:3000/music").then((data) => {
    data.forEach(({ artistName, nameOfTheSong, img }) => {
      new MySongs(artistName, nameOfTheSong, img, ".songs .song").render();
    });
  });

  like(heart);
  function playPauseBnts(btns) {}
  playPauseBnts(btns);
});
