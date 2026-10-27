import React from 'react';

export default function About({ lang }) {
  return (
    <div id="aboutSection" className="page-section active-page">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="fw-bold" style={{ color: '#ff7a30', fontSize: '2.8rem' }}>
            {lang === 'ar' ? 'من نحن' : 'About Us'}
          </h1>
          <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem' }}>
            {lang === 'ar' ? 'منصة تقنية رائدة تجمع بين التطوير المخصص للأعمال وخدمة المجتمع' : 'A leading tech platform combining custom business development and community service'}
          </p>
        </div>
        
        <div className="row g-4">
          <div className="col-md-6" data-aos="fade-up">
            <div className="custom-card">
              <div className="card-icon-box"><i className="fa-solid fa-eye"></i></div>
              <h3 className="card-title-custom mb-3">{lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</h3>
              <p className="card-desc-custom">
                {lang === 'ar' 
                  ? 'أن نكون النموذج والمحرّك الأساسي في المنطقة لتقديم أرقى الحلول البرمجية والمساهمة في تمكين الشباب رقمياً.' 
                  : 'To be the primary model and driver in the region for delivering elite software solutions and empowering youth digitally.'}
              </p>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="custom-card">
              <div className="card-icon-box"><i className="fa-solid fa-bullhorn"></i></div>
              <h3 className="card-title-custom mb-3">{lang === 'ar' ? 'رسالتنا' : 'Our Mission'}</h3>
              <p className="card-desc-custom">
                {lang === 'ar' 
                  ? 'الالتزام بتطوير مشاريع رقمية متفوقة وتوفير بيئة خصبة لنشر العلم والمعرفة التقنية الموثوقة.' 
                  : 'Commitment to developing superior digital projects and fostering a rich environment for spreading trusted tech knowledge.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}