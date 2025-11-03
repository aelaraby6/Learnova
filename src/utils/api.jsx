const API_BASE_URL = "https://web-production-5be4a.up.railway.app/api/v1/";

class ApiError extends Error {
  constructor(message, status, response) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.response = response;
  }
}

async function apiCall(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const { headers = {}, token, isFormData = false, ...restOptions } = options;

  const config = {
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token && { Authorization: `Bearer ${token}` }),
      ...headers,
    },
    ...restOptions,
  };

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Log full error details for debugging
      console.error("API Error Details:", {
        status: response.status,
        url,
        errorData,
      });

      throw new ApiError(
        errorData.message || `HTTP Error! Status: ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    console.error("API Call Error:", error);
    throw new ApiError(error.message || "Network error occurred", null, null);
  }
}

// Standard HTTP methods
export const get = (endpoint, token = null) =>
  apiCall(endpoint, { method: "GET", token });

export const post = (endpoint, data, token = null) =>
  apiCall(endpoint, {
    method: "POST",
    body: JSON.stringify(data),
    token,
  });

export const put = (endpoint, data, token = null) =>
  apiCall(endpoint, {
    method: "PUT",
    body: JSON.stringify(data),
    token,
  });

export const patch = (endpoint, data, token = null) =>
  apiCall(endpoint, {
    method: "PATCH",
    body: JSON.stringify(data),
    token,
  });

export const del = (endpoint, token = null) =>
  apiCall(endpoint, { method: "DELETE", token });

// Form data handler
export const postFormData = (endpoint, formData, token = null) =>
  apiCall(endpoint, {
    method: "POST",
    body: formData,
    token,
    isFormData: true,
  });

export const getWithAuth = (endpoint, token) => get(endpoint, token);
export const postWithAuth = (endpoint, data, token) =>
  post(endpoint, data, token);

export default {
  get,
  post,
  put,
  patch,
  del,
  postFormData,
  getWithAuth,
  postWithAuth,
  apiCall,
  ApiError,
};
