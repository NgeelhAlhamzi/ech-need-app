import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Opportunities from './pages/Opportunities';
import About from './pages/About';
import Contact from './pages/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [lang, setLang] = useState('ar'); // التحكم باللغة من هنا للكل

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [activePage]);

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} style={{ backgroundColor: '#060609', minHeight: '100vh', display: 'flex', flexDirection: 'column', color: '#ffffff' }}>
      {/* تمرير اللغة ودالة التغيير للـ Navbar */}
      <Navbar activePage={activePage} setActivePage={setActivePage} lang={lang} setLang={setLang} />
      
      <main style={{ paddingBottom: '60px' }}>
        {activePage === 'home' && <Home setActivePage={setActivePage} lang={lang} />}
        {activePage === 'services' && <Services lang={lang} />}
        {activePage === 'opportunities' && <Opportunities lang={lang} />}
        {activePage === 'about' && <About lang={lang} />}
        {activePage === 'contact' && <Contact lang={lang} />}
      </main>

      <Footer setActivePage={setActivePage} lang={lang} />
    </div>
  );
}

export default App;