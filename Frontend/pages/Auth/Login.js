// Login component


export default function Login() {

    const container = document.createElement("div");
    container.className = "flex flex-col md:flex-row min-h-screen";

    container.innerHTML = `
        <div id="sign-up-welcome-page"
            class="hidden md:flex w-1/2 bg-[var(--Primary-2)] justify-center items-center relative overflow-hidden">

            <div class="absolute -top-10 -right-10 w-32 h-32 bg-[var(--Secondary-2)] rounded-full"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--Secondary-2)] rounded-full"></div>


            <img src="./assets/images/Login-img.jpg" alt="sign-up-image"
                class="w-128 h-128 object-cover rounded-lg  shadow-2xl">
        </div>

        <div id="user-info" class="w-full md:w-1/2 p-6 md:p-20 position: relative">

        <div class="absolute top-4 right-4">
            <a href="#" class="learnnova-logo text-2xl font-bold text-[var(--Primary-1)]">
                LearnNova
            </a>
        </div>

            <h1 class="text-3xl md:text-4xl font-bold text-center mb-4">
                Access your <span class="text-blue-600">learning journey</span>
            </h1>
            <p class="text-center text-gray-500 text-sm md:text-base mb-8">
                Your next big achievement starts here.
            </p>


            <form id ="signup-form" class="max-w-md mx-auto bg-white p-8  shadow-md space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium mb-1">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>

                <button type="submit"
                    class="w-full bg-[var(--Primary-1)] hover:bg-[var(--Primary-2)] text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                    Create Account
                </button>
            </form>

            <p class="text-center text-sm mt-3">
                Don’t have an account?
                <a href="#signup" class="text-blue-600 hover:underline font-medium">
                    Sign Up
                </a>
            </p>

        </div>
`;

    return container;

}