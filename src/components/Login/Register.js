import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, Link } from 'react-router-dom';
import Spinner from '../Loading/Spinner';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    let errorMassage;

    if (loading) {
        return <Spinner />
    }

    if (error) {
        errorMassage =
            <p className='text-error'><small>{error?.message}</small></p>
    }
    if (user) {
        navigate('/')
    }
    const submitRegister = async e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        await createUserWithEmailAndPassword(email, password);


    }

    return (
        <div>
            <div className='login-form'>
                <form onSubmit={submitRegister}>
                    <div class="container">
                        <label for="uname"><b>Name</b></label>
                        <input type="text" placeholder="Enter Name" name="uname" />

                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" required />

                        <label for="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required />
                        {errorMassage}
                        <button type="submit">Register</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember" /> Remember me
                        </label>
                        <span class="psw"><Link to='/login'>Please Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;