import React from 'react';
import Button from './Button'
import '../css/SignUp.css'

function BluePage() {
    return (   
        <div className="BlueStyle">
            <section>
                <form>
                    <h2>Sign up</h2>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Password" />
                    <button>Sign up</button>
                    <p>Already have an account? <a href="#">Login</a></p>
                </form>
            </section>
        </div>
    )
}   

export default BluePage;