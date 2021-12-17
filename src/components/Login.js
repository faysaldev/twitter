import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { auth, provider } from '../firebase';
import './login.css';

function Login() {

const signinButton=()=>{
auth.signInWithPopup(provider)
.then((result)=> {
 console.log(result.user);
})
.catch((error)=>alert(error.message));

sessionStorage.setItem("fm", "Faysal");
window.location.reload();

};

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkDhlJVLkLtQgAh0SWKySPD68ljxppHAbZedqHT2VnDl7onEiP01e0Zbl0sBMhtnmehdg&usqp=CAU" />
                <div className="login__text">
                    <h1>Sign in to Twitter</h1>
                </div>
                <Button onClick={signinButton}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
