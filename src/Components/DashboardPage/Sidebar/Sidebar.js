import logo from "../../../assets/PracticalHotel.svg";
import {sideNavbar} from "../../../Context/index";
import { NavLink } from "react-router-dom";
import signout from "../../../assets/signout.svg";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>

        <div className={classes.dashlogo}>
            <Link to="/">
            <img src={logo} alt="dashlogo" />
            </Link>
        </div>

        <div >
          {sideNavbar.map((item) => (
                <NavLink 
                to={item.link}
                className={(navData) =>
                  navData.isActive
                    ? `${classes.active} ${classes.Menuitem}`
                    : `${classes.Menuitem}`
                }
                >
                      <img src={item.image} alt="" />
                      <span>{item.title}</span>
                </NavLink>
          ))}
        </div>
        
        <Link to="/login">
        <button className={classes.signout} >
            <img src={signout} alt="signout" />
            <span>Signout</span>
        </button>
        </Link>

    </div>
  )
}

export default Sidebar