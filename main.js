// const showMenu = (toggleId, navId) => {
const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav-menu");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    console.log("clicked");
    nav.classList.toggle("show");
  });
}
// };
// showMenu("nav-toggle", "nav-menu");

/* SHOW AND REMOVE MENU */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navLink.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home", {});
// sr.reveal(".button", { delay: 200 });
// sr.reveal(".home__img", { delay: 400 });
// sr.reveal(".home__social-icon", { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal(".about", {});
// sr.reveal(".about__subtitle", { delay: 400 });
// sr.reveal(".about__text", { delay: 400 });

/*SCROLL SKILLS*/
// sr.reveal(".skills__subtitle", {});
// sr.reveal(".skills__text", {});
sr.reveal(".skills__data", { interval: 100 });
// sr.reveal(".skills__img", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work", {});

/*SCROLL EXPERIENCE*/
sr.reveal(".experience", {});

// sr.reveal(".experience__title", {});
// sr.reveal(".experience__company", {});
// sr.reveal(".experience__years", {});
// sr.reveal(".experience__description", {});

/*SCROLL CONTACT*/
// sr.reveal(".contact__input", { interval: 200 });
