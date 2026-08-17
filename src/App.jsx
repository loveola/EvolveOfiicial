import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './styles/index.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import HairIDQuiz from "./components/HairIDQuiz.jsx";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import HomeTeaser from './components/HomeTeaser';
import OurStory from './components/OurStory';
import ForHer from './components/ForHer';
import ForHim from './components/ForHim';
import YouTube from './components/YouTube';
import { Promise as ProgramPromise } from './components/PromiseBook';
import Footer from './components/Footer';

// Slim homepage — Footer is outside Routes so it renders once on every page
const Home = () => (
  <>
    <Hero />
    <Stats />
    <HomeTeaser />
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

export default function App() {
  useScrollReveal();

  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/for-her" element={<ForHer />} />
        <Route path="/for-him" element={<ForHim />} />
        <Route path="/youtube" element={<YouTube />} />
        <Route path="/promise" element={<ProgramPromise />} />
        <Route path="/hair-id" element={<HairIDQuiz />} />
      </Routes>

      {/* Single footer — rendered once, on every page */}
      <Footer />
    </Router>
  );
}