import { useState } from "react";
import Header from "../../components/Header";

export default function ProfilePage() {
  const [form, setForm] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Password: "",
    newPassword: "",
  });

  const [activeTab, setActiveTab] = useState("Profile");
  const [preview, setPreview] = useState(null);

  const handleUpload = () => {
    console.log("Uploading photo...");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navItems = [{ name: "Profile" }, { name: "Photo" }];

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-50 mt-17">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-2xl font-bold">
            AE
          </div>
          <h2 className="mt-4 font-semibold text-center">
            Abdelrahman Elaraby
          </h2>

          <nav className="mt-6 w-full">
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <li
                  key={i}
                  className={`px-3 py-2 rounded cursor-pointer hover:bg-gray-100 ${
                    activeTab === item.name ? "bg-gray-200" : ""
                  }`}
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-10 flex justify-between items-start">
          <div className="w-full max-w-2xl">
            {activeTab === "Profile" && (
              <>
                <h1 className="text-2xl font-bold">Public profile</h1>
                <p className="text-gray-600 mb-6">
                  Add information about yourself
                </p>

                <form className="space-y-6 max-w-xl">
                  <div>
                    <h3 className="font-semibold mb-2">Basics:</h3>
                    <div className="flex flex-col gap-4 max-w-md">
                      <input
                        type="text"
                        name="Name"
                        value={form.Name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300"
                      />
                      <input
                        type="text"
                        name="Email"
                        value={form.Email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300"
                      />
                      <input
                        type="text"
                        name="Phone"
                        value={form.Phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300"
                      />

                      <input
                        type="text"
                        name="Password"
                        value={form.Password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300"
                      />
                      <input
                        type="text"
                        name="newPassword"
                        value={form.newPassword}
                        onChange={handleChange}
                        placeholder="New Password"
                        className="border rounded p-2 w-full focus:outline-none focus:border-[var(--Primary-1)] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-[var(--Primary-1)] text-white px-4 py-2 rounded hover:bg-[var(--Primary-2)]"
                  >
                    Save
                  </button>
                </form>
              </>
            )}

            {activeTab === "Photo" && (
              <div className="max-w-md">
                <h1 className="text-2xl font-bold mb-2">Edit Photo</h1>
                <p className="text-gray-600 mb-6">
                  Upload or change your profile photo
                </p>

                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300 mb-3">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-gray-400">No photo selected</span>
                      )}
                    </div>

                    <div className="flex gap-3 mt-3">
                      <label className="cursor-pointer bg-white border-2 border-gray-300 rounded px-3 py-1.5 text-sm hover:bg-gray-50 transition">
                        Select Photo
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setPreview(URL.createObjectURL(file));
                            }
                          }}
                        />
                      </label>

                      <button
                        className="bg-[var(--Primary-1)] text-white px-3 py-1.5 text-sm rounded hover:bg-[var(--Primary-2)]"
                        onClick={handleUpload}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Img */}
          <div className="w-full flex justify-center mt-10">
            <div className="relative w-[25rem] h-[25rem] rounded-full bg-[var(--Primary-1)] flex items-center justify-center shadow-2xl drop-shadow-2xl">
              <img
                src="/assets/images/profile.png"
                alt="Decoration"
                className="w-72 h-72 rounded-full object-cover shadow-2xl"
              />

              <div className="absolute top-1 right-3 w-16 h-16 rounded-full bg-[var(--Secondary-2)] shadow-lg"></div>

              <div className="absolute bottom-1 left-3 w-16 h-16 rounded-full bg-[var(--Secondary-2)] shadow-lg"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
