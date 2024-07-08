import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signin from "./components/Auth/Signin/Signin";
import Signup from "./components/Auth/Signup/Signup";
import ForgotPassword from "./components/Auth/ForgotPassword/ForgotPassword";
import { ROUTES } from "./constant";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path={ROUTES.SIGN_IN.PATH} element={<Signin />} />
        <Route path={ROUTES.SIGN_UP.PATH} element={<Signup />} />
        <Route path={ROUTES.FORGOT_PASSWORD.PATH} element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
