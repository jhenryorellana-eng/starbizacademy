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
          <Route path="/ceo-junior/privacidad" element={<CEOJuniorPrivacyPage />} />
          <Route path="/ceo-junior/politica-privacidad" element={<CEOJuniorPolicyPage />} />
          <Route path="/padres-3/privacidad" element={<Parents30PrivacyPage />} />
          <Route path="/padres-3/politica-privacidad" element={<Parents30PolicyPage />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
