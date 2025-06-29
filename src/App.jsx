import { Routes, Route, Link } from 'react-router-dom';
import BluePage from './components/BluePage';
import RedPage from './components/RedPage';
import YellowPage from './components/YellowPage';

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/#/blue">Blue</Link> | 
                <Link to="/#/red">Red</Link> | 
                <Link to="/#/yellow">Yellow</Link>
            </nav>

            <Routes>
                <Route path="/blue" element={<BluePage />} />
                <Route path="/red" element={<RedPage />} />
                <Route path="/yellow" element={<YellowPage />} />
            </Routes>
        </div>
    );
}
