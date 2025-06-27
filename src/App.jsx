import React, { useState } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Button from './components/Button';

function App() {
  const [page, setPage] = useState('home'); // State controls which component is shown

    return (
        <div>
            {page === 'home' && <Hero onGetStarted={() => setPage('getStarted')} />}
            {page === 'getStarted' && <GetStartedPage setPage={setPage} />}
            {page === 'home' && page !== 'getStarted' && <Header /> }
        </div>
    );
}

export default App;
