const mainImage = document.querySelector("#mainJumbo");
const mainTitle = document.querySelector("#mainTitle");
const mainP = document.querySelector("#mainP");
const colour = ["green", "red", "yellow"];
const array = [
  {
    title: "Explore",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, perspiciatis! ",
    image: "pic1.jpg",
  },
  {
    title: "Fun",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, obcaecati illum? Cupiditate tempora doloribus laborum dolore tempore eaque, temporibus nemo?",
    image: "pic2.jpg",
  },
  {
    title: "World",
    quote:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint, perspiciatis!",
    image: "pic3.jpg",
  },
];
mainTitle.style.color = colour[0];
mainTitle.innerHTML = array[0].title;
mainP.innerHTML = array[0].quote;
mainP.style.color = colour[0];

let i = 1;
setInterval(function () {
  mainImage.animate([{ opacity: "0.1" }, { opacity: "0.8" }], {
    duration: 1000,
    fill: "forwards",
  });
  mainImage.style.backgroundImage = "url(" + array[i].image + ")";
  for (let j = 0; j < colour.length; j++) {
    mainTitle.style.color = colour[i];
    mainTitle.innerHTML = array[i].title;
    mainP.style.color = colour[i];
    mainP.innerHTML = array[i].quote;
  }
  i++;

  if (i == array.length) {
    i = 0;
  }
}, 5000);
