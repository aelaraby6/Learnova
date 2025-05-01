export default function featuredTeacherComponent() {
  return `
   <!-- Hero -->
  <div class="max-w-[85rem] mx-auto my-2 px-4 sm:px-6 lg:px-8">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h5 class="block font-bold text-blue-600 sm:text-2xl lg:text-5xl lg:leading-tight dark:text-blue-600">Courses taught by industry leaders around the world</h5>
      <p class="mt-3 text-lg text-gray-800 dark:text-neutral-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

      <!-- Buttons -->
      <div class="mt-7 flex flex-col gap-3 w-1/2 sm:inline-flex">
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Browse Teachers
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
        <a class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Become a Teacher
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      </div>
      <!-- End Buttons -->
    </div>
    <!-- End Col -->

    <div class="relative ms-4">

      <img class="w-full h-[670px] border-2 border-gray-800 dark:border-gray-800 rounded-md" src="assets/images/featured-teacher.jpg" alt="Hero Image">

      <div class="w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 block max-w-sm p-6 rounded-3xl  dark:bg-white">
        <div class="w-fit mb-6 px-5 py-[10px] pt-[12px] rounded-full bg-[#e1edfb] text-[#064ea4] text-sm leading-[1.143em] font-bold">Featured Teacher</div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight dark:text-black">“Teaching on Education platform has been an amazing experience”</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Sophie Moore</p>
        <p class="font-normal text-gray-700 dark:text-gray-400">Marketing Lead at Facebook</p>
      </div>

    </div>


    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Hero -->`;
}
