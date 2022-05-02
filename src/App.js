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
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Explore />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/offers"} element={<Offers />} />
          <Route path={"/category/:categoryName"} element={<Category />} />
          <Route
            path={"/category/:categoryName/:listingId"}
            element={<Listing />}
          />

          <Route path={"/profile"} element={<PrivateRoute />}>
            <Route path={"/profile"} element={<Profile />} />
          </Route>
          <Route path={"/create-listing"} element={<PrivateRoute />}>
            <Route path={"/create-listing"} element={<CreateListing />} />
          </Route>
          <Route path={"/edit-listing/:listingId"} element={<PrivateRoute />}>
            <Route
              path={"/edit-listing/:listingId"}
              element={<EditListing />}
            />
          </Route>
          <Route path={"/sign-in"} element={<SignIn />} />
          <Route path={"/sign-up"} element={<SignUp />} />
          <Route path={"/contact/:landlordId"} element={<Contact />} />
        </Routes>
        {/* Navbar */}
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
