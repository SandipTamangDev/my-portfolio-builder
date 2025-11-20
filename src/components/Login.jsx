import React from 'react';
import Button from './Button'
import '../css/Login.css'

function Login() {
    return (   
        <div className="BlueStyle">
            <section>
                <form>
                    <h2>Login</h2>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password" />
                    <button>Login</button>
                    <a href="#">Forget password?</a>
                    <p>Don't have an account? <a href="#">Sign up</a></p>
                </form>
            </section>
        </div>
    )
}   

export default Login;