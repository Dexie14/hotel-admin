import classes from "./Header.module.css";
import search from "../../../assets/search.svg";
import profile_icon from "../../../assets/profile_icon.svg";
import bell from "../../../assets/bell.svg";

const Header = () => {
  return (
    <div className={classes.dash_header}>
    <div className={classes.header}>
        <div className={classes.searching}>
            <input
                placeholder="Search"
                type="text"
             />
             <div className={classes.searchimg}>
            <img src={search} alt="search"/>
            </div>
        </div>

        <div className={classes.nav}>
            <h5>22nd, Aug 2022</h5>
            <div className={classes.nav_bell}>
            <img src={bell} alt="bell"/>
            </div>
            <div className={classes.nav_img}>
            <img src={profile_icon} alt="bell"/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header