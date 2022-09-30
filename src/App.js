import { Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import ForgotPwd from "./Pages/ForgotPwd/ForgotPwd";
import DashboardLayout from "./layout/DashboardLayout/DashboardLayout";
import Overview from "./Pages/Dash_Pages/Overview/Overview";
import Bookings from "./Pages/Dash_Pages/Bookings/Bookings";
import Rooms from "./Pages/Dash_Pages/Rooms/Rooms";
import Settings from "./Pages/Dash_Pages/Settings/Settings";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpwd" element={<ForgotPwd />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="home" element={<Overview />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
