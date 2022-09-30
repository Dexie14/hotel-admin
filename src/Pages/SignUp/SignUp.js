import AuthLayout from "../../layout/AuthLayout/AuthLayout";
import sign from "../../assets/admin/sign.svg";
import Formgroup from "../../Components/Formgroup/Formgroup";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <AuthLayout
      span="LOG IN"
      link="/login"
      Title="CREATE ACCOUNT"
      text1="Already have an account? "
      text2="Hi, Kindly set up your account information"
      pic1={sign}
    >
      <form className={classes.signform}>
        <Formgroup label="Email:" type="text" placeholder="Justin Joel" />
        <Formgroup
          label="Email Address:"
          type="email"
          placeholder="JustinJoel@gmail.com"
          required={true}
        />
        <Formgroup
          label="Phone Number:"
          type="number"
          placeholder="+234 9076544356"
        />
        <Formgroup
          label="Create Password:"
          type="password"
          required={true}
          minLength={6}
          maxLength={20}
        />
        <Formgroup
          label="Confirm Password:"
          type="password"
          required={true}
          minLength={6}
          maxLength={20}
        />

        <p>
          By submitting this form, you’ve agreed to PracticalHotel’s
          <span style={{ color: "red" }}> Terms and Conditions</span> as an
          Admin.
        </p>

        <Link to="/login">
          <button> Create Account </button>
        </Link>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
