import classes from "./DashboardLayout.module.css";
import Sidebar from "../../Components/DashboardPage/Sidebar/Sidebar";
import Header from "../../Components/DashboardPage/Header/Header";
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className={classes.dashboard}>
        <div className={classes.side}>
            <Sidebar />
        </div>
        <div className={classes.contain}>
             <Header />
             <div className={classes.dash_info}>
                <Outlet />
             </div>
        </div>
    </div>
  )
}

export default DashboardLayout