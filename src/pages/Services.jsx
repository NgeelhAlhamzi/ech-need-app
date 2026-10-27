import React from 'react';

export default function Services({ lang }) {
  return (
    <div id="servicesSection" className="page-section active-page">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h1 className="fw-bold" style={{ color: '#ff7a30', fontSize: '2.8rem' }}>
            {lang === 'ar' ? 'خدماتنا التقنية والإبداعية' : 'Our Tech & Creative Services'}
          </h1>
          <p style={{ color: 'var(--text-sub)', maxWidth: '600px', fontSize: '1.1rem' }} className="mx-auto">
            {lang === 'ar' ? 'نقدم حلول برمجية وتصميمية متكاملة لتلبية كافة احتياجاتك الرقمية' : 'We provide integrated software and design solutions to meet all your digital needs'}
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          {/* كرت الويب */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="custom-card">
              <div className="card-icon-box"><i className="fa-solid fa-code"></i></div>
              <h3 className="card-title-custom mb-2">{lang === 'ar' ? 'تطوير مواقع الويب' : 'Web Development'}</h3>
              <p style={{ color: 'var(--text-muted)' }} className="small mb-4">{lang === 'ar' ? 'موقع ويب متوافق مع جميع الأجهزة' : 'Responsive websites compatible with all devices'}</p>
              <ul className="list-unstyled d-flex flex-column gap-3" style={{ color: 'var(--text-sub)', padding: 0 }}>
                <li><i className="fa-regular fa-circle-check me-2" style={{ color: '#ff7a30' }}></i><span>{lang === 'ar' ? 'تصميم واجهات UI/UX عصرية وجذابة' : 'Modern and attractive UI/UX interface design'}</span></li>
                <li><i className="fa-regular fa-circle-check me-2" style={{ color: '#ff7a30' }}></i><span>{lang === 'ar' ? 'تطوير الأنظمة السحابية بالكامل' : 'Full-stack cloud systems development'}</span></li>
              </ul>
            </div>
          </div>

          {/* كرت الموشن */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="custom-card">
              <div className="card-icon-box"><i className="fa-solid fa-video"></i></div>
              <h3 className="card-title-custom mb-2">{lang === 'ar' ? 'تصميم موشن جرافيك' : 'Motion Graphics Design'}</h3>
              <p style={{ color: 'var(--text-muted)' }} className="small mb-4">{lang === 'ar' ? 'تحويل الأفكار والسيناريوهات إلى رسوم متحركة' : 'Transforming ideas and scripts into engaging animations'}</p>
              <ul className="list-unstyled d-flex flex-column gap-3" style={{ color: 'var(--text-sub)', padding: 0 }}>
                <li><i className="fa-regular fa-circle-check me-2" style={{ color: '#ff7a30' }}></i><span>{lang === 'ar' ? 'تحريك الشعارات وتصميم الانترو' : 'Logo animation and intro/outro design'}</span></li>
                <li><i className="fa-regular fa-circle-check me-2" style={{ color: '#ff7a30' }}></i><span>{lang === 'ar' ? 'إنتاج فيديوهات إعلانية ترويجية' : 'Production of promotional advertising videos'}</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}