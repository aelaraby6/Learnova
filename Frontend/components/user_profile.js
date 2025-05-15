import headerComponent from "./header.js";
import footerComponent from "./footer.js";

export default function UserProfileComponent() {
  const container = document.createElement("div");

  container.appendChild(headerComponent());

  const mainContent = document.createElement("main");
  mainContent.className = "flex-grow w-full py-12 px-4 bg-gray-50";

  mainContent.innerHTML = `
    <div class="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6 mb-0">
      <h1 class="text-3xl font-bold text-center mb-6 text-[var(--Primary-1)]">User Profile</h1>
      <div class="space-y-4 text-gray-800">
        <div class="user-personal-info my-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div class="mb-5 flex justify-between border-b pb-2">
            <div class="font-semibold text-gray-700">Name:</div>
            <div class="text-gray-900">Abdelrahman Elaraby</div>
          </div>
          <div class="mb-5 flex justify-between border-b pb-2">
            <div class="font-semibold text-gray-700">Email:</div>
            <div class="text-gray-900">abdelrahman@example.com</div>
          </div>
          <div class="flex justify-between">
            <div class="font-semibold text-gray-700">Role:</div>
            <div class="text-gray-900">Student</div>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-center mt-16 mb-6 text-[var(--Primary-1)]">Courses Enrolled</h2>
        <div class="max-w-4xl mx-auto flex gap-4">
          <div class="bg-white rounded-lg shadow-md p-6 min-h-[80px] flex items-center justify-center text-gray-400 italic border border-dashed border-gray-300 flex-1">Loading course...</div>
          <div class="bg-white rounded-lg shadow-md p-6 min-h-[80px] flex items-center justify-center text-gray-400 italic border border-dashed border-gray-300 flex-1">Loading course...</div>
          <div class="bg-white rounded-lg shadow-md p-6 min-h-[80px] flex items-center justify-center text-gray-400 italic border border-dashed border-gray-300 flex-1">Loading course...</div>
        </div>
        <button id="logout-button" class="mt-6 mx-auto block bg-[var(--Primary-1)] hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300">Log Out</button>
      </div >
    </div>
  `;

  container.appendChild(mainContent);

  container.appendChild(footerComponent());

  return container;
}
