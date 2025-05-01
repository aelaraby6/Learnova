import headerComponent from "./components/header.js"
import footerComponent from "./components/footer.js"
import SignUp from "./pages/Auth/SignUp.js"
import Login from "./pages/Auth/Login.js"

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


