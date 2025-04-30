import headerComponent from "./components/header.js"
import footerComponent from "./components/footer.js"

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    app.insertAdjacentHTML("beforebegin", addHeader());

    app.insertAdjacentHTML("afterend", addFooter());


    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});

const addHeader = (_) => headerComponent();
const addFooter = (_) => footerComponent();
