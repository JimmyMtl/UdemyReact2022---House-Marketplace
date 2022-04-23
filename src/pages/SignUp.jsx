import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg"

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const {email, password, name} = formData

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData((prevState) => ({
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
                        <input type="text" placeholder={'Name'} className="nameInput" id={'name'} value={name}
                               onChange={handleChange}/>
                        <input type="email" placeholder={'Email'} className="emailInput" id={'email'} value={email}
                               onChange={handleChange}/>
                        <div className="passwordInputDiv">
                            <input type={showPassword ? 'text' : 'password'} className={'passwordInput'}
                                   placeholder={'password'} id={'password'} value={password} onChange={handleChange}/>
                            <img src={visibilityIcon} alt="Show password" className={'showPassword'}
                                 onClick={() => setShowPassword((prevsState) => !prevsState)}/>
                        </div>
                        <div className="signUpBar">
                            <p className="signUpText">Sign Up</p>
                            <button type={'submit'} className={'signUpButton'}>
                                <ArrowRightIcon fill={'#ffffff'}
                                                width={'34px'}
                                                height={'34px'}/>
                            </button>
                        </div>
                    </form>

                    {/*     GOOGLE OAuth Component*/}
                    <Link to={"/sign-in"} className={'registerLink'}>Sign In Instead</Link>


                </main>
            </div>
        </>
    );
};

export default SignUp;