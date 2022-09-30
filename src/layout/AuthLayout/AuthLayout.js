import React from 'react';
import logo from "../../assets/PracticalHotel.svg";
import classes from './AuthLayout.module.css';
import { Link } from 'react-router-dom';





const AuthLayout = ({children, span, Title, text1, text2,pic1, word, link}) => {
  return (
    <div className={classes.auth_ground}>
        <nav className={classes.Head}>
            <div className={classes.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <h4>{text1}<span>
              <Link to ={link}>
              {span}</Link>
              </span></h4>
        </nav>

        <section className={`${classes.text} ${classes[word]}`}>
            <h3>{Title}</h3>
            <p>{text2}</p>
        </section>

        <div className={classes.auth}>
          <div className={classes.auth_form}>{children}</div>

          <div className={classes.auth_image}>
            <img src={pic1} alt="img"/>
          </div>
        </div>

     
    </div>
  )
};

export default AuthLayout;