import { useNavigate } from "react-router-dom";
import logo from '../assets/image/logo.svg'
import bg1 from '../assets/image/Prop 1 Landing Page.svg'
import bg2 from '../assets/image/Prop 2 Landing Page.svg'
import bg3 from '../assets/image/Prop 3 Landing Page.svg'
import bg4 from '../assets/image/Prop 4 Landing Page.svg'

function LandingPage(){

    // parameter/instance variable untuk fungsi navigasi

    const navigate = useNavigate();

    return(
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            {/* background */}
            <img className=" absolute top-30 left-30 opacity-100 rotate-12 transition-all duration-500 w-60 lg:w-40 md:w-30 sm:w-18 hidden sm:block " src={bg2} alt="prop2" />
            <img className=" absolute bottom-30 left-30 opacity-100 -rotate-12 transition-all duration-500 w-60 lg:w-40 md:w-30 sm:w-18 hidden sm:block " src={bg1} alt="prop1" />
            <img className=" absolute top-30 right-30 opacity-100 -rotate-12 transition-all duration-500 w-60 lg:w-40 md:w-30 sm:w-18 hidden sm:block " src={bg3} alt="prop3" />
            <img className=" absolute bottom-30 right-30 opacity-100 rotate-12 transition-all duration-500 w-60 lg:w-40 md:w-30 sm:w-18 hidden sm:block " src={bg4} alt="prop4" />



            <img src={logo} alt="logo" className="w-20 h-20" />        
            <p className="text-2xl font-semibold">Write It</p>
            <h3 className="text-center text-3xl font-bold text-black">
                Your goals, One Checkmark  <span className="block">Away</span>
            </h3>
            <p className="text-black">
                your personal task note and to do list
            </p>    
            <div className="flex items-center gap-5">
                <button
                className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                onClick={() => navigate("/login")}
                >
                Log In
                </button>
                <span className="text-gray-600 font-medium">or</span>
                <button
                className="bg-white text-blue-600 py-2 px-6 rounded-lg border-1"
                onClick={() => navigate("/register")}
                >
                Sign Up
                </button>
            </div>
        </div>
    );
}

export default LandingPage
