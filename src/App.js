import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Offers from "./pages/Offers";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Explore/>}/>
                    <Route path={"/forgot-password"} element={<ForgotPassword/>}/>
                    <Route path={"/offers"} element={<Offers/>}/>
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/sign-in"} element={<SignIn/>}/>
                    <Route path={"/sign-up"} element={<SignUp/>}/>
                </Routes>
            </Router>
        </>
    );
};

export default App;