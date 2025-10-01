import { useNavigate } from "react-router-dom";

function LandingPage(){

    // parameter/instance variable untuk fungsi navigasi

    const navigate = useNavigate();

    return(
       <div className="landingContent">
        <h3 className="text-red-600">Your goals, One Checkmark Away. *And Your D is Small*</h3>
        <p>your personal task note and to do list</p>
        <div className="landingRow">
            <button className="buttonSecondaryBlue mediumButton" onClick={() => navigate("/login")}>Log In</button>
            <p>or</p>
            <button className="buttonPrimaryBlue mediumButton" onClick={() => navigate("register")}>Sign Up</button>
        </div>
       </div>
    );
}

export default LandingPage