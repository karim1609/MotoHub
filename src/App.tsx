import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MotorcyclesPage from './pages/MotorcyclesPage';
import PartsPage from './pages/PartsPage';
import ServicePage from './pages/ServicePage';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/motorcycles" element={<MotorcyclesPage />} />
              <Route path="/parts" element={<PartsPage />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;