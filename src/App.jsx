import { Routes, Route, Link } from 'react-router-dom';
import GettingStarted from './components/GettingStarted';
import Question from './components/Question';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Button from './components/Button';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default function App() {
    return (
        <>
            <Header></Header>
            <div>
                <Routes>
                    {/* Root path shows GettingStarted */}
                    <Route path="/" element={<GettingStarted />} />
                    <Route path="/Question" element={<Question />} />
                    <Route path="/Portfolio" element={<Portfolio />} />
                    <Route path="/GettingStarted" element={<GettingStarted />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/SignUp" element= {<SignUp />} />
                </Routes>
            </div>
        </>
    );
}
