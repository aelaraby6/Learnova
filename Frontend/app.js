import headerComponent from "./components/header.js"
import footerComponent from "./components/footer.js"

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    app.insertAdjacentHTML('beforebegin' , headerComponent());

    app.insertAdjacentHTML('afterend' , footerComponent());


    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});
