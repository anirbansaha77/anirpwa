import React, { Suspense } from 'react';
import StickySidePanel from './components/StickySidePanel';

import './App.css';
import Header from './components/Header';
import Routes from './routes'
const Footer = React.lazy(() => import ('./components/Footer'));

function App() {
  const offline = !navigator.onLine;
  console.log("isOffline" , offline)
  return (
    <div className="App">
      <StickySidePanel />
      <div>
        <div className={`stickyTop ${!navigator.onLine?"stickyTopOffline":""}`}>
          <Header isOffline={offline} />
        </div>
        <div style={{width: '100vw'}}>
          {offline && <h1 className="offlineMsg">You are offline! Please get online for the best experience.</h1>}
        </div>
        <Routes />
        <div>
          <Suspense fallback={<div>lazy loading footer...</div>}>
            <Footer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
