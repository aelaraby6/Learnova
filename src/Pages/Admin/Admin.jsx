import React, { useState } from "react";
import {
  Home,
  Users,
  MessageSquare,
  Menu,
  X,
  Search,
  Bell,
  Settings,
  TrendingUp,
  UserPlus,
  Mail,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
    avatar: "AJ",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    role: "User",
    status: "Active",
    avatar: "BS",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@example.com",
    role: "Editor",
    status: "Inactive",
    avatar: "CW",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@example.com",
    role: "User",
    status: "Active",
    avatar: "DB",
  },
];

const contacts = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma@example.com",
    message: "Inquiry about services",
    date: "2024-10-28",
  },
  {
    id: 2,
    name: "Frank Miller",
    email: "frank@example.com",
    message: "Support request",
    date: "2024-10-27",
  },
  {
    id: 3,
    name: "Grace Lee",
    email: "grace@example.com",
    message: "Partnership proposal",
    date: "2024-10-26",
  },
];

const stats = [
  {
    label: "Total Users",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "#e1edfb",
  },
  {
    label: "New Contacts",
    value: "89",
    change: "+5%",
    icon: MessageSquare,
    color: "#e1edfb",
  },
  {
    label: "Active Sessions",
    value: "456",
    change: "+8%",
    icon: TrendingUp,
    color: "#e1edfb",
  },
];

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "users", label: "Users", icon: Users },
    { id: "contacts", label: "Contacts", icon: MessageSquare },
  ];

  const renderHome = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ color: "#064ea4" }}>
          Dashboard Overview
        </h1>
        <button
          className="px-4 py-2 rounded-lg text-white font-medium"
          style={{ backgroundColor: "#064ea4" }}
        >
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-xl p-6 shadow-sm"
            style={{ backgroundColor: "#f3f8fc" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className="p-3 rounded-lg"
                style={{ backgroundColor: stat.color }}
              >
                <stat.icon className="w-6 h-6" style={{ color: "#064ea4" }} />
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: "#0f437f" }}
              >
                {stat.change}
              </span>
            </div>
            <h3
              className="text-2xl font-bold mb-1"
              style={{ color: "#064ea4" }}
            >
              {stat.value}
            </h3>
            <p className="text-sm" style={{ color: "#0f437f" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div
          className="rounded-xl p-6 shadow-sm"
          style={{ backgroundColor: "#f3f8fc" }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: "#064ea4" }}>
            Recent Activity
          </h2>
          <div className="space-y-3">
            {[1, 2, 3].map((_, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-lg"
                style={{ backgroundColor: "#e1edfb" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e1edfb" }}
                >
                  <UserPlus className="w-5 h-5" style={{ color: "#064ea4" }} />
                </div>
                <div className="flex-1">
                  <p
                    className="font-medium text-sm"
                    style={{ color: "#064ea4" }}
                  >
                    New user registered
                  </p>
                  <p className="text-xs" style={{ color: "#0f437f" }}>
                    {idx + 1} hour ago
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="rounded-xl p-6 shadow-sm"
          style={{ backgroundColor: "#f3f8fc" }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: "#064ea4" }}>
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {["Add User", "View Reports", "Settings", "Export Data"].map(
              (action, idx) => (
                <button
                  key={idx}
                  className="p-4 rounded-lg font-medium text-sm transition-all hover:shadow-md"
                  style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
                >
                  {action}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ color: "#064ea4" }}>
          Users Management
        </h1>
        <button
          className="px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2"
          style={{ backgroundColor: "#064ea4" }}
        >
          <UserPlus className="w-4 h-4" /> Add User
        </button>
      </div>

      <div
        className="rounded-xl shadow-sm overflow-hidden"
        style={{ backgroundColor: "#f3f8fc" }}
      >
        <div className="p-4" style={{ backgroundColor: "#e1edfb" }}>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              style={{ color: "#0f437f" }}
            />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2"
              style={{ backgroundColor: "white", color: "#064ea4" }}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead style={{ backgroundColor: "#e1edfb" }}>
              <tr>
                <th
                  className="px-6 py-3 text-left text-sm font-semibold"
                  style={{ color: "#064ea4" }}
                >
                  User
                </th>
                <th
                  className="px-6 py-3 text-left text-sm font-semibold"
                  style={{ color: "#064ea4" }}
                >
                  Email
                </th>
                <th
                  className="px-6 py-3 text-left text-sm font-semibold"
                  style={{ color: "#064ea4" }}
                >
                  Role
                </th>
                <th
                  className="px-6 py-3 text-left text-sm font-semibold"
                  style={{ color: "#064ea4" }}
                >
                  Status
                </th>
                <th
                  className="px-6 py-3 text-left text-sm font-semibold"
                  style={{ color: "#064ea4" }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-t"
                  style={{ borderColor: "#e1edfb" }}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm"
                        style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
                      >
                        {user.avatar}
                      </div>
                      <span
                        className="font-medium"
                        style={{ color: "#064ea4" }}
                      >
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4" style={{ color: "#0f437f" }}>
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="px-3 py-1 rounded text-xs font-medium"
                      style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold" style={{ color: "#064ea4" }}>
          Contact Messages
        </h1>
        <button
          className="px-4 py-2 rounded-lg text-white font-medium flex items-center gap-2"
          style={{ backgroundColor: "#064ea4" }}
        >
          <Mail className="w-4 h-4" /> Export
        </button>
      </div>

      <div className="grid gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="rounded-xl p-6 shadow-sm"
            style={{ backgroundColor: "#f3f8fc" }}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4 flex-1">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-medium"
                  style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
                >
                  {contact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1" style={{ color: "#064ea4" }}>
                    {contact.name}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: "#0f437f" }}>
                    {contact.email}
                  </p>
                  <p className="text-sm mb-3" style={{ color: "#0f437f" }}>
                    {contact.message}
                  </p>
                  <span className="text-xs" style={{ color: "#0f437f" }}>
                    {contact.date}
                  </span>
                </div>
              </div>
              <button
                className="px-4 py-2 rounded-lg font-medium text-sm"
                style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
              >
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff" }}>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full transition-all duration-300 z-40 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
        style={{ backgroundColor: "#064ea4" }}
      >
        <div className="p-6 flex items-center justify-between">
          <h2
            className={`text-xl font-bold text-white ${
              !sidebarOpen && "hidden"
            }`}
          >
            Admin Panel
          </h2>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white"
          >
            {sidebarOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 text-white transition-all ${
                activeSection === item.id
                  ? "bg-white bg-opacity-20"
                  : "hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Header */}
        <header
          className="h-16 flex items-center justify-between px-8 shadow-sm"
          style={{ backgroundColor: "#f3f8fc" }}
        >
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-semibold" style={{ color: "#064ea4" }}>
              Welcome back, Admin
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#e1edfb" }}
            >
              <Bell className="w-5 h-5" style={{ color: "#064ea4" }} />
            </button>
            <button
              className="p-2 rounded-lg"
              style={{ backgroundColor: "#e1edfb" }}
            >
              <Settings className="w-5 h-5" style={{ color: "#064ea4" }} />
            </button>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-medium"
              style={{ backgroundColor: "#e1edfb", color: "#064ea4" }}
            >
              AD
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-8">
          {activeSection === "home" && renderHome()}
          {activeSection === "users" && renderUsers()}
          {activeSection === "contacts" && renderContacts()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
