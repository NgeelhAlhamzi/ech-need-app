import React, { useState } from 'react';

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(lang === 'ar' ? `شكراً ${formData.name}! تم استلام رسالتك!` : `Thank you ${formData.name}! Message received!`);
    setFormData({ name: '', email: '' });
  };

  return (
    <div id="contactSection" className="page-section active-page">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="fw-bold" style={{ color: '#ff7a30', fontSize: '2.8rem' }}>
            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem' }}>
            {lang === 'ar' ? 'يسعدنا تلقي استفساراتك وطلباتك ومساعدتك عبر قنواتنا' : 'We are glad to receive your inquiries and help you through our channels'}
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-lg-7" data-aos="fade-up">
            <div className="custom-card">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-white small fw-bold">{lang === 'ar' ? 'الاسم الكريم' : 'Full Name'}</label>
                  <input type="text" className="form-control form-control-custom w-100" placeholder={lang === 'ar' ? 'اكتب اسمك هنا...' : 'Your name here...'} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white small fw-bold">{lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}</label>
                  <input type="email" className="form-control form-control-custom w-100" placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <button type="submit" className="btn-glow-orange border-0 w-100 mt-2">{lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}