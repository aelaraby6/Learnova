import headerComponent from "./components/header.js"
import footerComponent from "./components/footer.js"
import SignUp from "./pages/Auth/SignUp.js"
import Login from "./pages/Auth/Login.js"
import heroComponents from "./components/hero.js"
import featuredTeacherComponent from "./components/featured_teacher.js"
import AboutUS from "./components/aboutus.js"
import Cart from "./components/cart.js"
import userProfile from "./components/user_profile.js"

const app = document.getElementById("app");

function render(component) {
    app.innerHTML = "";
    app.appendChild(component());
}

render(SignUp);

document.addEventListener("click", (e) => {
    const target = e.target;

    if(target.matches("a[href='#signup']")){
        e.preventDefault();
        render(SignUp);
    }

    if(target.matches("a[href='#login']")){
        e.preventDefault();
        render(Login);
    }
})
