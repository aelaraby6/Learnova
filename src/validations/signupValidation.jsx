export const validateSignup = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name || !formData.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  if (!formData.email || !formData.email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email address";
    }
  }

  // Egyptian phone validation
  if (!formData.phone || !formData.phone.trim()) {
    errors.phone = "Phone number is required";
  } else {
    const cleanPhone = formData.phone.replace(/[\s-]/g, "");

    // Egyptian phone regex:
    // Must start with 01 followed by (0,1,2,5) and then 8 digits
    // Total: 11 digits
    const egyptianPhoneRegex = /^01[0125]\d{8}$/;

    if (!egyptianPhoneRegex.test(cleanPhone)) {
      errors.phone =
        "Invalid Egyptian phone number (must start with 010, 011, 012, or 015)";
    }
  }

  // Password validation
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else {
    // Strong password requirements:
    // - At least one uppercase letter
    // - At least one lowercase letter
    // - At least one number
    // - At least one special character
    const hasUpperCase = /[A-Z]/.test(formData.password);
    const hasLowerCase = /[a-z]/.test(formData.password);
    const hasNumber = /\d/.test(formData.password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

    if (!hasUpperCase) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!hasLowerCase) {
      errors.password = "Password must contain at least one lowercase letter";
    } else if (!hasNumber) {
      errors.password = "Password must contain at least one number";
    } else if (!hasSpecialChar) {
      errors.password =
        "Password must contain at least one special character (!@#$%^&*...)";
    }
  }

  // Confirm password validation
  if (!formData.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  return errors;
};
