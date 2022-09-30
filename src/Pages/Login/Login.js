import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import log from "../../assets/hotel-booking/log.svg";
import Formgroup from "../../Components/Formgroup/Formgroup";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";




const Login = () => {
  return (
    <AuthLayout
    span = "SIGN UP"
    link= "/"
    Title = "WELCOME!!!"
    text1 = "Don't have an account? "
    text2= "Welcome back Admin, please, enter in your details"
    pic1 = {log} 
    word = "word"
    >
    <form className={classes.logform}>
   
      <Formgroup
          label="Email Address:"
          type="email"
          placeholder = "Enter your email address"
          required={true}
          forms = "mail"
        />
    
      <Formgroup
          label="Create Password:"
          type="password"
          placeholder = "Enter your password"
          forms = "mail"
        />

        <Link to="/forgotpwd">
        <p>Forgot Password</p>
        </Link>
    
            <Link to = "/dashboard/home"> 
            <button> LOGIN </button>
            </Link>
    </form>



    </AuthLayout>
  )
}

export default Login

