import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Button from './Button';
import '../css/Question.css'

function Question() {
    const navigate = useNavigate();

    const handleNext = () => {
        // Navigate to Portfolio page
        navigate('/Portfolio');
    };

    const handelBack = () => {
        navigate('/GettingStarted')
    }

    return (
        <section className="question">
            <div className="question_container">
                <h1>Welcome to the Question Page</h1>
                <p>Please answer the questions below to build your portfolio in minutes.</p>
                
                <div className='textInput' style={{ margin: '2rem 0' }}>
                    <label htmlFor="name">Your Name:</label><br />
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>

                <div className="question_button">
                    <Button onClick={handelBack} className ="btn primary">
                        Back
                    </Button>
                    
                    <Button onClick={handleNext} className="btn primary">
                        Next
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Question;
