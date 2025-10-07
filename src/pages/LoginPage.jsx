import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const navigate = useNavigate();

  // State untuk input dan error
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  // Simulasi daftar email terdaftar
  // debug only
  const registeredEmails = ["user@example.com", "test@gmail.com"];

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError("");
    setPasswordError("");
    setFormError("");

    let isValid = true;

    // Validasi email
    if (!email) {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setEmailError("Email form must be valid");
        isValid = false;
      }
    }

    // Validasi password
    if (!password) {
      setPasswordError("Password cannot be empty");
      isValid = false;
    }

    // Cek apakah email terdaftar
    if (isValid && !registeredEmails.includes(email)) {
      setFormError("Email not registered yet, please try another email");
      isValid = false;
    }

    if (!isValid) return;

    console.log("Login Success:", { email,});
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
        <div className="text-center gap-2">
          <p className="text-black text-sm">Welcome Back</p>
          <h4 className="text-black text-2xl font-bold">Log in to Write It</h4>
        </div>

        {/* Form Login */}
        <form id="loginForm" onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
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

          {/* Error umum (email belum terdaftar) */}
          {formError && <p className="text-red-600 text-sm text-center mt-1">{formError}</p>}
        </form>

        {/* Tombol di luar form */}
        <div className="w-full flex flex-col items-center gap-2 mt-2">
          <button
            type="submit"
            form="loginForm"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
          >
            Log In
          </button>

          <p className="text-black text-sm">or</p>

          <button
            className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg border border-blue-600 hover:border-blue-700 hover:text-blue-700"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
