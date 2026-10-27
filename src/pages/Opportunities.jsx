import React from 'react';

export default function Opportunities({ lang }) {
  return (
    <div id="opportunitiesSection" className="page-section active-page">
      <div className="container text-center">
        <div data-aos="fade-up">
          <h1 className="fw-bold mb-2" style={{ color: '#ff7a30', fontSize: '2.8rem' }}>
            {lang === 'ar' ? 'الفرص التقنية المجانية' : 'Free Tech Opportunities'}
          </h1>
          <p style={{ color: 'var(--text-sub)' }} className="mb-5">
            {lang === 'ar' ? 'نشارك معك بانتظام أفضل الفرص التعليمية الموثوقة' : 'We regularly share with you the best trusted educational opportunities'}
          </p>
        </div>
        
        <div className="position-relative mx-auto mb-5" style={{ maxWidth: '600px' }} data-aos="zoom-in">
          <input type="text" className="form-control form-control-custom text-center" placeholder={lang === 'ar' ? 'ابحث عن دورة، وظيفة، أو منحة...' : 'Search for a course, job, or scholarship...'} />
        </div>

        <div className="py-5" style={{ color: 'var(--text-sub)' }} data-aos="fade-up">
          <div className="card-icon-box mx-auto" style={{ borderColor: 'rgba(255,255,255,0.15)', background: 'transparent' }}>
            <i className="fa-solid fa-box-open text-muted"></i>
          </div>
          <p className="mt-3 fs-5">
            {lang === 'ar' ? 'يتم الآن تحديث وتجهيز الفرص؛ ترقبوها قريباً جداً!' : 'Opportunities are being updated; stay tuned very soon!'}
          </p>
        </div>
      </div>
    </div>
  );
}