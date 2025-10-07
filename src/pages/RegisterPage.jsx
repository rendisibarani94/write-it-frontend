import { useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterPage() {
  const navigate = useNavigate();

  // Simulasi daftar email yang sudah terdaftar
  const registeredEmails = ["test@example.com", "john@gmail.com", "user@writeit.com"];

  // State field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setPasswordError("");
    setFormError("");

    let isValid = true;

    // Validasi First Name
    if (!firstName.trim()) {
      setFirstNameError("First name cannot be empty");
      isValid = false;
    }

    // Validasi Last Name
    if (!lastName.trim()) {
      setLastNameError("Last name cannot be empty");
      isValid = false;
    }

    // Validasi Email
    if (!email) {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Email format must be valid");
        isValid = false;
      }
    }

    // Validasi Password
    if (!password) {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      isValid = false;
    }

    // Cek apakah email sudah terdaftar
    if (isValid && registeredEmails.includes(email)) {
      setFormError("This email is already registered, please try another one");
      isValid = false;
    }

    if (!isValid) return;

    console.log("Registration successful:", { firstName, lastName, email });
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      {/* Register Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
        <div className="text-center gap-2">
          <p className="text-black text-sm">The first step to organize your tasks</p>
          <h4 className="text-black text-2xl font-bold">Sign Up to Write It</h4>
        </div>

        <form id="registrationForm" onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          {/* First Name */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border ${
                firstNameError ? "border-red-500" : "border-gray-300"
              } focus:border-blue-700 focus:outline-none transition-all duration-300`}
            />
            {firstNameError && <p className="text-red-600 text-sm">{firstNameError}</p>}
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1">
            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border ${
                lastNameError ? "border-red-500" : "border-gray-300"
              } focus:border-blue-700 focus:outline-none transition-all duration-300`}
            />
            {lastNameError && <p className="text-red-600 text-sm">{lastNameError}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border ${
                emailError ? "border-red-500" : "border-gray-300"
              } focus:border-blue-700 focus:outline-none transition-all duration-300`}
            />
            {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } focus:border-blue-700 focus:outline-none transition-all duration-300`}
            />
            {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
          </div>

          {/* Form Error (email sudah terdaftar) */}
          {formError && (
            <p className="text-red-600 text-sm text-center mt-1">{formError}</p>
          )}

          {/* Buttons */}
          <div className="w-full flex flex-col items-center gap-3 mt-2">
            <button
              type="submit"
              form="registrationForm"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
            >
              Sign Up
            </button>

            <p className="text-black text-sm">or</p>

            <button
              type="button"
              className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg border border-blue-600 hover:border-blue-700 hover:text-blue-700 transition"
              onClick={() => navigate("/login")}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
