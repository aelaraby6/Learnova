export default function AboutUS() {
  const aboutUs = document.createElement("div");
  aboutUs.innerHTML = `
  <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
       <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
           <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
               <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                   <div class="w-full flex-col justify-center items-start gap-8 flex">
                       <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                           <h6 class="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                           <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                               <h2
                                   class="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                   Our Journey of Impact and Innovation</h2>
                               <p
                                   class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                 At LearnNova, our story is built on collaboration, determination, and a shared passion for transforming education. We've navigated challenges, celebrated milestones, and shaped a legacy of learning and growth.
                               </p>
                           </div>
                       </div>
                       <div class="w-full flex-col justify-center items-start gap-6 flex">
                           <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                               <div
                                   class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">33+ Years</h4>
                                   <p class="text-gray-500 text-base font-normal leading-relaxed">Empowering Learners in the Digital Age</p>
                               </div>
                               <div
                                   class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">125+ Projects
                                   </h4>
                                   <p class="text-gray-500 text-base font-normal leading-relaxed">Shaping the Future of Online Education</p>
                               </div>
                           </div>
                           <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                               <div
                                   class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">26+ Awards</h4>
                                   <p class="text-gray-500 text-base font-normal leading-relaxed">Recognized for Excellence in EdTech Innovation</p>
                               </div>
                               <div
                                   class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                   <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">99% Happy
                                       Clients</h4>
                                   <p class="text-gray-500 text-base font-normal leading-relaxed">Reflecting Our Commitment to Quality and Student Success</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <button
                       class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                       <span
                           class="px-1.5 text-[#064EA4] text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read
                           More</span>
                       <svg class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                           xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                           <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#064EA4" stroke-width="1.6"
                               stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                   </button>
               </div>
              <div class="w-full flex justify-center items-center">
                  <div class="sm:w-[564px] w-full sm:h-[646px] h-auto bg-gray-100 rounded-3xl sm:border border-gray-200 overflow-hidden">
                      <img src="assets/images/About_Us.png" alt="About Us image" class="w-full h-full px-4 rounded-2xl object-contain" />
                  </div>
              </div>
           </div>
       </div>
   </section>
 `;
  return aboutUs;
}
