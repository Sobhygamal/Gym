// scroll to top and show butoom
let topScroll = document.querySelector("footer div");
topScroll.onclick = () => {
  window.scrollTo(0, 0);
};
// for style of header and show him and color liks
let header = document.getElementById("header"),
  links = document.querySelectorAll("header .nav a"),
  gym = document.querySelector("header .navbar .gym a");

// change color for active link when scroll
let Sections = document.querySelectorAll("section[id]");

window.onscroll = () => {
  if (window.scrollY >= 550) {
    header.className = "fixed";
    gym.className = "black";
    links.forEach((link) => {
      link.classList.add("black");
    });
  } else {
    header.className = " ";
    gym.className = "";
    links.forEach((link) => {
      link.classList.remove("black");
    });
  }
  if (window.scrollY >= 700) {
    topScroll.classList.remove("hide");
  } else {
    topScroll.classList.add("hide");
  }
  // change color for active link when scroll
  Sections.forEach((current) => {
    const sectionId = current.getAttribute("id");
    if (window.pageYOffset >= current.offsetTop - 250) {
      links.forEach((link) => {
        link.classList.remove("red");
      });
      document
        .querySelector(`header .nav a[href="#${sectionId}"]`)
        .classList.add("red");
    }
  });
};

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("red");
    });
    link.classList.add("red");
  });
});

// in small media show nav
let Icon = document.querySelector("header .navbar .gym div"),
  ulList = document.querySelector("header .nav ul"),
  changeIcon = document.querySelectorAll("header .navbar .gym i"),
  containerlinks = document.querySelector("header .nav");
Icon.onclick = () => {
  containerlinks.classList.toggle("hide");
  changeIcon[0].classList.toggle("disp");
  changeIcon[1].classList.toggle("disp");
  // ulList.classList.toggle("view");
};

// Start for Dark mode
let IconDark = document.querySelector("header div.dark"),
  changeDark = document.querySelectorAll("header .dark i"),
  body = document.querySelector("body"),
  texthome = document.querySelector("div.text p"),
  texth3 = document.querySelector("div.text h3"),
  divH2 = document.querySelectorAll("div h2"),
  ps = document.querySelectorAll("p"),
  ems = document.querySelectorAll("em"),
  divs = document.querySelectorAll(".class1 .left div"),
  trainers = document.querySelectorAll(".trainers>div"),
  Input = document.querySelector(".contact .inputs"),
  Inputs = document.querySelectorAll(".contact input"),
  textArea = document.querySelector(".contact textarea"),
  Footer = document.querySelector("footer");
IconDark.onclick = () => {
  body.classList.toggle("back-dark");
  changeDark[0].classList.toggle("display");
  changeDark[1].classList.toggle("display");
  texthome.classList.toggle("black-dark");
  texth3.classList.toggle("black-dark");
  divH2.forEach((h2) => {
    h2.classList.toggle("white");
  });
  ps.forEach((p) => {
    p.classList.toggle("white");
  });
  ems.forEach((em) => {
    em.classList.toggle("white");
  });
  divs.forEach((div) => {
    div.classList.toggle("box-shadow");
  });
  trainers.forEach((trainer) => {
    trainer.classList.toggle("box-shadow");
  });
  Input.classList.toggle("back-dark");
  Inputs.forEach((e) => {
    e.classList.toggle("color");
  });
  textArea.classList.toggle("color");
  Footer.classList.toggle("white");
};
