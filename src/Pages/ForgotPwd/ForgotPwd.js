import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import pwd from "../../assets/forgot-password/pwd.svg";
import Formgroup from "../../Components/Formgroup/Formgroup";
import classes from "./ForgotPwd.module.css";
import { Link } from "react-router-dom";




const ForgotPwd = () => {
  return (
    <AuthLayout
    span = "LOG IN"
    link= "/login"
    Title = "Forgot Password?"
    text1 = "Already have an account? "
    text2= "Enter the email address you used to register."
    pic1 = {pwd} 
    word = "word"
    >
    <form className={classes.pwdform}>
   
      <Formgroup
          label="Email Address:"
          type="email"
          placeholder = "Enter your email address"
          required={true}
          forms = "mail"
        />
    
            <Link to = "/login"> 
            <button> SEND </button>
            </Link>
    </form>



    </AuthLayout>
  )
}

export default ForgotPwd

