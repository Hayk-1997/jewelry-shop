'use client';
import React from 'react';
import BannerSection from 'components/Templates/BannerSection';

const HomePage: React.FC = (): React.JSX.Element => {
  return (
    <>
      <BannerSection />

      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8fafc', textAlign: 'center' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Our Services</h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Full-service commerce platform: Technology, Logistics, Payments, and Growth.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div
              style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>E-commerce Tech</h3>
              <p>Custom platforms, marketplaces, omnichannel integrations.</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Logistics & Fulfillment</h3>
              <p>Warehousing, last-mile delivery, and reverse logistics solutions.</p>
            </div>
            <div
              style={{
                padding: '2rem',
                backgroundColor: '#fff',
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Digital Growth</h3>
              <p>Performance marketing, CRM, data-driven customer engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>Trusted by Global Brands</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Adidas</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Calvin Klein</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Motorola</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Nestlé</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <p style={{ fontSize: '1rem' }}>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </>
  );
};

export default HomePage;
