// Sign Up component

export default function SignUp() {

    const container = document.createElement("div");
    container.className = "flex flex-col md:flex-row min-h-screen";

    container.innerHTML = `
    <div id="user-info" class="w-full md:w-1/2 p-6 md:p-20 position: relative">

        <div class="absolute top-4 left-4">
            <a href="#" class="learnnova-logo text-2xl font-bold text-[var(--Primary-1)]">
                LearnNova
            </a>
        </div>
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-4">
                Create An Account
            </h1>
            <p class="text-base md:text-xl text-center text-gray-500 mb-6 leading-relaxed">
                Start your learning journey today
            </p>

            <form id ="signup-form" class="max-w-md mx-auto bg-white p-8  shadow-md space-y-6">
                <div>
                    <label for="name" class="block text-sm font-medium mb-1">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div>
                    <label for="email" class="block text-sm font-mediummb-1">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium  mb-1">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div>
                    <label for="confirm-password" class="block text-sm font-medium mb-1">Confirm
                        Password</label>
                    <input type="password" id="confirm-password" name="confirm-password"
                        placeholder="Confirm your password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span id="password-error" class="text-red-500 text-sm hidden">Passwords do not match</span>

                </div>

                <button type="submit"
                    class="w-full bg-[var(--Primary-1)] hover:bg-[var(--Primary-2)] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                    Create Account
                </button>
            </form>

            <p class="text-center text-sm mt-3">
                Already have an account?
                <a href="#login" class="text-blue-600 hover:underline font-medium">
                    Login
                </a>
            </p>

        </div>

        <div id="sign-up-welcome-page"
            class="hidden md:flex w-1/2 bg-[var(--Primary-2)] justify-center items-center relative overflow-hidden">

            <div class="absolute -top-10 -right-10 w-32 h-32 bg-[var(--Secondary-2)] rounded-full"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--Secondary-2)] rounded-full"></div>


            <img src="./assets/images/signup-img.jpg" alt="sign-up-image"
                class="w-128 h-128 object-cover rounded-lg  shadow-2xl">
        </div>
`;

    setTimeout(() => {
        document.querySelector("#signup-form").addEventListener("submit", async (e) => {
            e.preventDefault();

            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;
            const confirmPassword = document.querySelector("#confirm-password").value;

            if (confirmPassword != password) {
                document.querySelector("#confirm-password").classList.add("border-red-500");
                document.querySelector("#password-error").classList.remove("hidden");
            }

            else {
                document.querySelector("#confirm-password").classList.remove("border-red-500");
                document.querySelector("#password-error").classList.add("hidden");
            }


        });

    }, 0);
    return container;

}
