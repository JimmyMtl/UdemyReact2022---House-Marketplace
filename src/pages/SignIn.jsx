import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();

      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
      toast.error("Bad User Credentials");
    }
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={"Email"}
            className="emailInput"
            id={"email"}
            value={email}
            onChange={handleChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className={"passwordInput"}
              placeholder={"password"}
              id={"password"}
              value={password}
              onChange={handleChange}
              autoComplete={"current-password"}
            />
            <img
              src={visibilityIcon}
              alt="Show password"
              className={"showPassword"}
              onClick={() => setShowPassword((prevsState) => !prevsState)}
            />
          </div>
          <Link to={"/forgot-password"} className={"forgotPasswordLink"}>
            Forgot Password
          </Link>
          <button type={"submit"} className={"signInButton"}>
            <p className="signInText">Sign In</p>
            <ArrowRightIcon
              className={"signInIcon"}
              fill={"#ffffff"}
              width={"34px"}
              height={"34px"}
            />
          </button>
        </form>

        <OAuth />
        <Link to={"/sign-up"} className={"registerLink"}>
          Sign Up Instead
        </Link>
      </div>
    </>
  );
};

export default SignIn;
