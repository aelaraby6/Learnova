import headerComponent from "./components/header.js";
import footerComponent from "./components/footer.js";
import heroComponents from "./components/hero.js";
import featuredTeacherComponent from "./components/featured_teacher.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  app.insertAdjacentHTML("beforebegin", addHeader());

  app.insertAdjacentHTML("afterbegin", addHero());
  app.insertAdjacentHTML("beforeend", addFeaturedTeacher());

  app.insertAdjacentHTML("afterend", addFooter());

  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

const addHeader = (_) => headerComponent();
const addHero = (_) => heroComponents();
const addFooter = (_) => footerComponent();
const addFeaturedTeacher = (_) => featuredTeacherComponent();
