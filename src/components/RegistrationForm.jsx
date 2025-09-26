import PropTypes from "prop-types";

function RegistrationForm(props){

    return(
        <form>
            <input type="text" id="fullname" name="fullname" value=""/>
            <input type="email" id="email" name="email" value=""/>
            <input type="password" id="password" name="password" value="John"/>
        </form>
    )
}

export default RegistrationForm