import { useNavigate } from "react-router-dom";

function LoginPage() {

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      {/* Login Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center gap-6">
        <div className="text-center gap-2">
          <p className="text-black text-sm">Welcome Back</p>
          <h4 className="text-black text-2xl font-bold">Log in to Write It</h4>
        </div>

        <form className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-blue-700 focus:outline-none transition-all duration-300"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-blue-700 focus:outline-none transition-all duration-300"
          />
        </form>

        <div className="w-full flex flex-col items-center gap-3 mt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
            Log In
          </button>
          <p className="text-black text-sm">or</p>
          <button className="w-full bg-green bg-white text-blue-600 font-medium py-2         rounded-lg border-1 border-blue-600 hover:border-blue-700 hover:text-blue-700 "
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

