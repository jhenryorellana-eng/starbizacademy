import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import HomePage from './pages/HomePage';
import CEOJuniorPage from './pages/CEOJuniorPage';
import Parents30Page from './pages/Parents30Page';
import CEOJuniorPrivacyPage from './pages/CEOJuniorPrivacyPage';
import Parents30PrivacyPage from './pages/Parents30PrivacyPage';
import CEOJuniorPolicyPage from './pages/CEOJuniorPolicyPage';
import Parents30PolicyPage from './pages/Parents30PolicyPage';
import EcosystemPage from './pages/EcosystemPage';
import CEOJuniorSupportPage from './pages/CEOJuniorSupportPage';
import Parents30SupportPage from './pages/Parents30SupportPage';
import Parents30TermsPage from './pages/Parents30TermsPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ceo-junior" element={<CEOJuniorPage />} />
          <Route path="/ceojunior" element={<CEOJuniorPage />} />
          <Route path="/padres-3" element={<Parents30Page />} />
          <Route path="/padres3" element={<Parents30Page />} />
          <Route path="/ecosistema" element={<EcosystemPage />} />
          <Route path="/ceo-junior/privacidad" element={<CEOJuniorPrivacyPage />} />
          <Route path="/ceo-junior/politica-privacidad" element={<CEOJuniorPolicyPage />} />
          <Route path="/padres-3/privacidad" element={<Parents30PrivacyPage />} />
          <Route path="/padres-3/politica-privacidad" element={<Parents30PolicyPage />} />
          <Route path="/ceo-junior/soporte" element={<CEOJuniorSupportPage />} />
          <Route path="/padres-3/soporte" element={<Parents30SupportPage />} />
          <Route path="/padres-3/terminos-servicio" element={<Parents30TermsPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
