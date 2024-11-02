import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TonConnectUIProvider } from '@tonconnect/ui-react'; // Импортируем TonConnectUIProvider
import Portfolio from './pages/Portfolio';
import ConnectWallet from './pages/ConnectWallet';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://<YOUR_APP_URL>/tonconnect-manifest.json">
      <Router>
        <Routes>
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </TonConnectUIProvider>
  );
}

export default App;
