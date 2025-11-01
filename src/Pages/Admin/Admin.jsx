import React, { useState } from "react";
import { Users, Mail, Menu, X } from "lucide-react";
import UsersSection from "./users";
import ContactsSection from "./contacts";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { id: "users", label: "Users", icon: Users },
    { id: "contacts", label: "Contacts", icon: Mail },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersSection />;
      case "contacts":
        return <ContactsSection />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen flex"
      style={{
        background:
          "linear-gradient(135deg, #e1edfb 0%, #f8fbff 50%, #ffffff 100%)",
      }}
    >
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="h-full flex flex-col bg-white shadow-xl border-r border-gray-100">
          {/* Logo/Header */}
          <div
            className="p-6 border-b border-gray-100"
            style={{ backgroundColor: "#064ea4" }}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Admin Panel</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto bg-blue-100">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => {
                        setActiveTab(item.id);
                        setSidebarOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "text-white shadow-md"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      style={isActive ? { backgroundColor: "#064ea4" } : {}}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mb-6 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
            style={{ color: "#064ea4" }}
          >
            <Menu size={24} />
          </button>

          {/* Page Header */}
          <div className="mb-8">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: "#064ea4" }}
            >
              {menuItems.find((item) => item.id === activeTab)?.label ||
                "Admin Dashboard"}
            </h1>
            <p className="text-gray-600">
              {activeTab === "users"
                ? "Manage your users"
                : "Manage contact submissions"}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-6">{renderContent()}</div>
        </div>
      </main>
    </div>
  );
}
