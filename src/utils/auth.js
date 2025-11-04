// Utility functions for handling authentication state changes

export const triggerAuthStateChange = (type) => {
  // Dispatch custom event for same-tab components
  window.dispatchEvent(
    new CustomEvent("authStateChange", {
      detail: { type },
    })
  );
};

export const handleLogin = (response) => {
  if (response.token) {
    localStorage.setItem("authToken", response.token);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", response.user.role);
    localStorage.setItem("userName", response.user?.name || "User");

    // Notify other components about login
    triggerAuthStateChange("login");
  }
};

export const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  localStorage.removeItem("authToken");

  // Notify other components about logout
  triggerAuthStateChange("logout");
};

export const isUserLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

export const getUserName = () => {
  return localStorage.getItem("userName") || "User";
};
