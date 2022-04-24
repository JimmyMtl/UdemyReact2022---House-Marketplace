import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg"
import {getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import {setDoc, doc, serverTimestamp} from "firebase/firestore"
import {db} from '../firebase.config'
import {toast} from "react-toastify";

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState({
        state: false,
        msg: 'The password should be at least 6 characters'
    })
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
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError((prevState) => ({
                ...prevState,
                state: true
            }))
        } else {
            setError((prevState => ({
                ...prevState,
                state: false
            })))
            try {
                const auth = getAuth()
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const user = userCredential.user
                updateProfile(auth.currentUser, {
                    displayName: name
                })

                const formDataCopy = {...formData}
                delete formDataCopy.password

                formDataCopy.timestamp = serverTimestamp()
                await setDoc(doc(db, 'users', user.uid), formDataCopy)
                navigate('/')
            } catch (e) {
                console.log(e)
                toast.error('Something went wront with registration')
            }
        }

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
                    <form onSubmit={handleSubmit}>
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
                        {error.state && <p style={{color: 'red'}}>{error.msg}</p>}
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