import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Offers from "./pages/Offers";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Explore />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/offers"} element={<Offers />} />
          <Route path={"/category/:categoryName"} element={<Category />} />

          <Route path={"/profile"} element={<PrivateRoute />}>
            <Route path={"/profile"} element={<Profile />} />
          </Route>
          <Route path={"/create-listing"} element={<PrivateRoute />}>
            <Route path={"/create-listing"} element={<CreateListing />} />
          </Route>
          <Route path={"/sign-in"} element={<SignIn />} />
          <Route path={"/sign-up"} element={<SignUp />} />
        </Routes>
        {/* Navbar */}
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
