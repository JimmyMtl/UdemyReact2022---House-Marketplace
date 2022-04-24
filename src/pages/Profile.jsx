import React, {useState} from 'react';
import {getAuth} from "firebase/auth";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const auth = getAuth()
    const [user, setUser] = useState({
        name: auth.currentUser?.displayName,
        email: auth.currentUser?.email
    });

    const onLogout = () => {
      auth.signOut()
        navigate('/')
    }

    return  (
        <div className={'profile'}>
            <header className="profileHeader">
                <p className="pageHeader">My Profile</p>
                <button type={'button'} className={'logOut'} onClick={onLogout}>LogOut</button>
            </header>
        </div>
    )
}

export default Profile;