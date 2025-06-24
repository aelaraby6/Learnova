function handleSignupForm() {
    const form = document.querySelector("#signup-form");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirm-password").value;

        if (confirmPassword !== password) {
            document.querySelector("#confirm-password").classList.add("border-red-500");
            document.querySelector("#password-error").classList.remove("hidden");
        } else {
            document.querySelector("#confirm-password").classList.remove("border-red-500");
            document.querySelector("#password-error").classList.add("hidden");
        }
    });
}

document.addEventListener("DOMContentLoaded", handleSignupForm);
