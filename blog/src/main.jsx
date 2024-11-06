import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // Corrected import
import { AuthContextProvider } from './context/authContext.js';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </StrictMode>
);
