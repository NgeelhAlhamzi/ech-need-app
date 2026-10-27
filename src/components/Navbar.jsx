import React from 'react';

export default function Navbar({ activePage, setActivePage, lang, setLang }) {
  
  const toggleLanguage = () => {
    if (lang === 'ar') {
      setLang('en');
    } else {
      setLang('ar');
    }
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      } else if (window.bootstrap?.Collapse) {
        new window.bootstrap.Collapse(navbarCollapse).hide();
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <div className="logo-container" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
          <div className="logo-frame">
            <img src="https://static.lumi.new/ab/ab2e2e6f23435ca9f274ce7ccdd32a0f.webp" alt="Tech Need Logo" />
          </div>
          <div className="logo-text">
            <div className="brand-ar">احتياج تقني</div>
            <div className="brand-en">Tech Need</div>
          </div>
        </div>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {[
              { id: 'home', label: lang === 'ar' ? 'الرئيسية' : 'Home' },
              { id: 'services', label: lang === 'ar' ? 'الخدمات' : 'Services' },
              { id: 'opportunities', label: lang === 'ar' ? 'الفرص' : 'Opportunities' },
              { id: 'about', label: lang === 'ar' ? 'من نحن' : 'About Us' },
              { id: 'contact', label: lang === 'ar' ? 'تواصل معنا' : 'Contact' }
            ].map((page) => (
              <li className="nav-item" key={page.id}>
                <span 
                  className={`nav-link ${activePage === page.id ? 'active' : ''}`} 
                  onClick={() => handleNavClick(page.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {page.label}
                </span>
              </li>
            ))}
          </ul>
          <div className="d-flex align-items-center gap-3">
            <button className="btn-lang border-0 bg-transparent text-white fw-bold" onClick={toggleLanguage} style={{ cursor: 'pointer' }}>
              {lang === 'ar' ? 'English 🇬🇧' : 'العربية 🇸🇦'}
            </button>
            <a href="#" className="btn-glow-orange">
              <i className="fa-solid fa-arrow-right-to-bracket me-2"></i>
              <span>{lang === 'ar' ? 'تسجيل الدخول' : 'Login'}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}