import React from 'react';

export default function Footer({ setActivePage, lang }) {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container">
        <div className="row g-4 pb-4 border-bottom" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
          
          {/* قسم نبذة المنصة */}
          <div className={`col-lg-5 text-center ${lang === 'ar' ? 'text-lg-start' : 'text-lg-end'}`}>
            <h4 className="fw-bold mb-3" style={{ color: '#ffffff' }}>
              {lang === 'ar' ? <>احتياج <span style={{ color: '#ff7a30' }}>تقني</span></> : <><span style={{ color: '#ff7a30' }}>Tech</span> Need</>}
            </h4>
            <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', maxWidth: '400px' }} className="mx-auto mx-lg-0">
              {lang === 'ar' 
                ? 'منصتكم الرقمية المتكاملة لتطوير حلول الويب الإبداعية، وبوابتكم الموثوقة لاستكشاف الفرص التعليمية والمهنية المجانية.' 
                : 'Your integrated digital platform for developing creative web solutions and your trusted gateway to explore free educational and career opportunities.'}
            </p>
          </div>

          {/* قسم روابط التنقل */}
          <div className={`col-sm-6 col-lg-3 text-center ${lang === 'ar' ? 'text-lg-start' : 'text-lg-end'}`}>
            <h5 className="fw-bold mb-3" style={{ color: '#ff7a30', fontSize: '1.1rem' }}>
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2" style={{ padding: 0 }}>
              {['home', 'services', 'opportunities', 'about', 'contact'].map((page) => (
                <li key={page}>
                  <span 
                    onClick={() => setActivePage(page)} 
                    style={{ color: 'var(--text-sub)', cursor: 'pointer', transition: '0.3s' }}
                    className="footer-link"
                  >
                    {page === 'home' && (lang === 'ar' ? 'الرئيسية' : 'Home')}
                    {page === 'services' && (lang === 'ar' ? 'خدماتنا' : 'Our Services')}
                    {page === 'opportunities' && (lang === 'ar' ? 'الفرص المجانية' : 'Free Opportunities')}
                    {page === 'about' && (lang === 'ar' ? 'من نحن' : 'About Us')}
                    {page === 'contact' && (lang === 'ar' ? 'تواصل معنا' : 'Contact Us')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* قسم التواصل الاجتماعي */}
          <div className={`col-sm-6 col-lg-4 text-center ${lang === 'ar' ? 'text-lg-start' : 'text-lg-end'}`}>
            <h5 className="fw-bold mb-3" style={{ color: '#ff7a30', fontSize: '1.1rem' }}>
              {lang === 'ar' ? 'تواصل معنا مباشرة' : 'Connect With Us'}
            </h5>
            <div className={`d-flex justify-content-center ${lang === 'ar' ? 'justify-content-lg-start' : 'justify-content-lg-end'} gap-3 fs-4`}>
              <a href="https://www.instagram.com/techneed147" target="_blank" rel="noreferrer" className="footer-social-icon insta">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/966500000000" target="_blank" rel="noreferrer" className="footer-social-icon whatsapp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:support@techneed.com" className="footer-social-icon email">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

        </div>

        {/* الحقوق */}
        <div className="text-center pt-4">
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }} className="mb-0">
            &copy; {new Date().getFullYear()} {lang === 'ar' ? 'جميع الحقوق محفوظة لمنصة' : 'All rights reserved to'} <span style={{ color: '#ff7a30', fontWeight: '600' }}>{lang === 'ar' ? 'احتياج تقني' : 'Tech Need'}</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}