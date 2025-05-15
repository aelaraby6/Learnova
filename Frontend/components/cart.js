export default function Cart() {
  const cart = document.createElement("div");
  cart.innerHTML = `
 <section class=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
       <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div class="grid grid-cols-12">
                <div
                    class="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-16 w-full max-xl:max-w-3xl max-xl:mx-auto">
                    <div class="flex items-center justify-between pb-8 border-b border-gray-300">
                        <h2 class="font-manrope font-bold text-3xl leading-10 text-black">Courses Cart</h2>
                        <h2 class="font-manrope font-bold text-xl leading-8 text-gray-600">3 Items</h2>
                    </div>
                    <div class="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                        <div class="col-span-12 md:col-span-7">
                            <p class="font-normal text-lg leading-8 text-gray-400">Course Details</p>
                        </div>
                    </div>
                    <div class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src="https://pagedone.io/asset/uploads/1701162850.png" alt="perfume bottle image"
                                class="mx-auto rounded-xl object-cover">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-2">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Rose Petals Divine</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-[var(--Primary-1)]">$120.00</h6>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3"></div>
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-[var(--Primary-1)]">$120.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src="https://pagedone.io/asset/uploads/1701162866.png" alt="perfume bottle image"
                                class="mx-auto rounded-xl object-cover">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-2">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Musk Rose Cooper</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-[var(--Primary-1)]">$240.00</h6>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3"></div>
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-[var(--Primary-1)]">$240.00</p>
                            </div>
                        </div>
                    </div>
                    <div  class="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                        <div class="w-full md:max-w-[126px]">
                            <img src="https://pagedone.io/asset/uploads/1701162880.png" alt="perfume bottle image"
                                class="mx-auto rounded-xl object-cover">
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-4 w-full">
                            <div class="md:col-span-2">
                                <div class="flex flex-col max-[500px]:items-center gap-3">
                                    <h6 class="font-semibold text-base leading-7 text-black">Dusk Dark Hue</h6>
                                    <h6 class="font-normal text-base leading-7 text-gray-500">Perfumes</h6>
                                    <h6 class="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-[var(--Primary-1)]">$120.00</h6>
                                </div>
                            </div>
                            <div class="flex items-center max-[500px]:justify-center h-full max-md:mt-3"></div>
                            <div class="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                                <p class="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-[var(--Primary-1)]">$120.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-16">
                    <h2 class="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                        Order Summary</h2>
                    <div class="mt-8">
                        <div class="flex items-center justify-between pb-6">
                            <p class="font-normal text-lg leading-8 text-black">3 Items</p>
                            <p class="font-medium text-lg leading-8 text-black">$480.00</p>
                        </div>
                        <form>
                            <label class="flex items-center mb-1.5 text-gray-400 text-sm font-medium">Promo Code
                            </label>
                            <div class="flex pb-4 w-full">
                                <div class="relative w-full ">
                                    <div class=" absolute left-0 top-0 py-2.5 px-4 text-gray-300">

                                    </div>
                                    <input type="text"
                                        class="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                                        placeholder="xxxx xxxx xxxx">

                                    <div id="dropdown"
                                        class="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdown-button">
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Shopping</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Images</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">News</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Finance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center border-b border-gray-200">
                                <button
                                    class="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">Apply</button>
                            </div>
                            <div class="flex items-center justify-between py-8">
                                <p class="font-medium text-xl leading-8 text-black">3 Items</p>
                                <p class="font-semibold text-xl leading-8 text-[var(--Primary-1)]">$480.00</p>
                            </div>
                            <button
                                class="w-full text-center bg-[var(--Primary-1)] rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-[var(--Primary-2)]">Checkout</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
  return cart;
}
