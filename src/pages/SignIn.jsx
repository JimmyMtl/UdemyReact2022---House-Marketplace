import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg"

const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const {email, password} = formData

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    return (
        <>
            <div className="pageContainer">
                <header>
                    <p className="pageHeader">
                        Welcome Back!
                    </p>
                </header>
                <main>
                    <form>
                        <input type="email" placeholder={'Email'} className="emailInput" id={'email'} value={email}
                               onChange={handleChange}/>
                        <div className="passwordInputDiv">
                            <input type={showPassword ? 'text' : 'password'} className={'passwordInput'}
                                   placeholder={'password'} id={'password'} value={password} onChange={handleChange}/>
                            <img src={visibilityIcon} alt="Show password" className={'showPassword'}
                                 onClick={() => setShowPassword((prevsState) => !prevsState)}/>
                        </div>
                        <Link to={"/forgot-password"} className={'forgotPasswordLink'}>Forgot Password</Link>
                        <div className="signInBar">
                            <p className="signInText">Sign In</p>
                            <button type={'submit'} className={'signInButton'}>
                                <ArrowRightIcon fill={'#ffffff'}
                                                width={'34px'}
                                                height={'34px'}/>
                            </button>
                        </div>
                    </form>

                    {/*     GOOGLE OAuth Component*/}
                    <Link to={"/sign-up"} className={'registerLink'}>Sign Up Instead</Link>


                </main>
            </div>
        </>
    );
};

export default SignIn;