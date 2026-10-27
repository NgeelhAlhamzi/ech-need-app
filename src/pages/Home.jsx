import React from 'react';

export default function Home({ setActivePage, lang }) {
  // كروت الميزات باللغتين بناءً على قيمة متغير lang
  const features = lang === 'ar' ? [
    { icon: "fa-solid fa-code", title: "تطوير المواقع", desc: "بناء مواقع ويب احترافية ومتطورة بأحدث التقنيات البرمجية لتضمن لك السرعة والأمان والتجاوب الكامل.", delay: "card-delay-1" },
    { icon: "fa-solid fa-video", title: "موشن جرافيك", desc: "تصميم فيديوهات موشن جرافيك احترافية ومتحركة لأي فكرة أو منتج أو خدمة بأسلوب تسويقي مبتكر.", delay: "card-delay-2" },
    { icon: "fa-solid fa-qrcode", title: "صناعة الـ QR والدعوات", desc: "توليد وصناعة أكواد QR الذكية لروابطك، وتصميم باركود مخصص وآمن لبطاقات الدعوات الإلكترونية والمناسبات.", delay: "card-delay-3" },
    { icon: "fa-solid fa-graduation-cap", title: "الفرص المجانية", desc: "رصد وتجميع أفضل المنح، الدورات التدريبية المعتمدة، والوظائف التقنية المتاحة لمساعدتك في بناء مستقبلك مجاناً.", delay: "card-delay-4" }
  ] : [
    { icon: "fa-solid fa-code", title: "Web Development", desc: "Building professional and advanced websites using the latest technologies to guarantee speed, security, and full responsiveness.", delay: "card-delay-1" },
    { icon: "fa-solid fa-video", title: "Motion Graphics", desc: "Designing professional motion graphics videos for any idea, product, or service with an innovative marketing style.", delay: "card-delay-2" },
    { icon: "fa-solid fa-qrcode", title: "QR & Invitation Making", desc: "Generating smart QR codes for your links and designing customized, secure barcodes for digital invitations.", delay: "card-delay-3" },
    { icon: "fa-solid fa-graduation-cap", title: "Free Opportunities", desc: "Tracking and collecting the best scholarships, certified training courses, and tech jobs to help build your future for free.", delay: "card-delay-4" }
  ];

  return (
    <div id="homeSection" className="page-section active-page">
      <section className="text-center" style={{ padding: '110px 0 90px 0', background: 'radial-gradient(circle at center, rgba(255, 122, 48, 0.11) 0%, transparent 75%)' }}>
        <div className="container" data-aos="zoom-in" data-aos-duration="1000">
          <div style={{ background: 'rgba(255,122,48,0.14)', border: '1px solid rgba(255,122,48,0.35)', color: '#ff8b4d', padding: '10px 24px', borderRadius: '50px', display: 'inline-block', marginBottom: '30px', fontSize: '0.95rem', fontWeight: '700' }}>
            {lang === 'ar' ? '✨ تطوير ويب محترف + نافذة للفرص المجانية' : '✨ Professional Web Dev + Free Opportunities Window'}
          </div>
          
          <h1 className="display-4 fw-bold mb-4">
            {lang === 'ar' ? (
              <>
                <span className="moving-brand-text">احتياج تقني</span> <br/>
                <span style={{ color: '#ff7a30' }}>حلول تقنية وفرص مجانية</span>
              </>
            ) : (
              <>
                <span className="moving-brand-text">Tech Need</span> <br/>
                <span style={{ color: '#ff7a30' }}>Tech Solutions & Free Opportunities</span>
              </>
            )}
          </h1>
          
          <p className="mx-auto mb-5" style={{ maxWidth: '680px', fontSize: '1.2rem', lineHeight: '1.9', color: 'var(--text-sub)' }}>
            {lang === 'ar' 
              ? 'نطور مواقع ويب احترافية ومخصصة للأعمال، ونخدم المجتمع الرقمي من خلال نشر وتجميع أفضل الفرص التقنية والتعليمية المجانية.' 
              : 'We develop professional and customized business websites, and serve the digital community by curating the best free technical and educational opportunities.'}
          </p>
          
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button onClick={() => setActivePage('contact')} className="btn-glow-orange">
              {lang === 'ar' ? 'طلب موقع ويب' : 'Order a Website'} <i className={`fa-solid ${lang === 'ar' ? 'fa-arrow-left ms-2' : 'fa-arrow-right m-2'}`}></i>
            </button>
            <button onClick={() => setActivePage('opportunities')} className="btn-secondary-custom">
              {lang === 'ar' ? 'تصفح الفرص المجانية' : 'Browse Free Opportunities'}
            </button>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold card-title-custom" style={{ fontSize: '2.3rem' }}>
            {lang === 'ar' ? 'ما نقدمه في منصتنا' : 'What We Offer in Our Platform'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            {lang === 'ar' ? 'تصفح أبرز مساراتنا وخدماتنا الرقمية والمجتمعية' : 'Browse our top digital and community tracks'}
          </p>
        </div>
        <div className="row g-4">
          {features.map((feat, index) => (
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={(index + 1) * 100} key={index}>
              <div className={`custom-card text-center auto-glow-showcase ${feat.delay}`}>
                <div className="card-icon-box mx-auto">
                  <i className={feat.icon}></i>
                </div>
                <h4 className="card-title-custom mb-3">{feat.title}</h4>
                <p className="card-desc-custom mb-0">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}