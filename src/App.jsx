import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Community from './components/Community';
import PixelGrade from './components/PixelGrade';
import LocalBusiness from './components/LocalBusiness';
import SiteFooter from './components/SiteFooter';
import QuoteSection from './components/QuoteSection';
import CaringSection from './components/CaringSection';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <Hero />
      <Clients />
      <Community />
      <PixelGrade />
      <LocalBusiness />
      <SiteFooter />
      <QuoteSection />
      <CaringSection />
      <Footer />
    </div>
  );
}

export default App;