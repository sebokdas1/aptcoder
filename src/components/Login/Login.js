import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Loading/Spinner';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    let errorMassage;
    if (loading) {
        return <Spinner />
    }

    if (error) {
        errorMassage =
            <p className='text-red-600'><small>{error?.message}</small></p>
    }

    if (user) {
        navigate('/')
    }
    const submit = e => {
        e.preventDefault()
        const email = e.target.Uemail.value;
        const password = e.target.psw.value;
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <div className='login-form'>
                <form onSubmit={submit}>
                    <div class="container">
                        <label for="Uemail"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="Uemail" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        {errorMassage}
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                        <span class="psw"><Link to='/register'>Create an account</Link></span>
                    </div>

                    <div class="container" >

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;