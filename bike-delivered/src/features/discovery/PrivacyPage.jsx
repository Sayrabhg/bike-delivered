import React from 'react';
import LegalPage from './LegalPage';

const PrivacyPage = () => {
  const sections = [
    {
      heading: '1. Information We Collect',
      content: 'We collect information to provide better services to our users.',
      list: [
        'Personal information (name, email, phone number, address)',
        'Payment information (processed securely through payment partners)',
        'Order history and preferences',
        'Location data for delivery purposes',
        'Device information and app usage data'
      ]
    },
    {
      heading: '2. How We Use Your Information',
      content: 'We use the information we collect to:',
      list: [
        'Process and deliver your orders',
        'Improve our services and user experience',
        'Communicate with you about orders and promotions',
        'Prevent fraud and ensure platform security',
        'Comply with legal obligations'
      ]
    },
    {
      heading: '3. Information Sharing',
      content: 'We do not sell your personal information. We only share your data with:',
      list: [
        'Restaurant partners (order details only)',
        'Delivery riders (delivery address and contact info)',
        'Payment processors (secure transaction processing)',
        'Law enforcement (when required by law)'
      ]
    },
    {
      heading: '4. Data Security',
      content: 'We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits.'
    },
    {
      heading: '5. Your Rights',
      content: 'You have the right to:',
      list: [
        'Access your personal data',
        'Correct inaccurate information',
        'Request deletion of your data',
        'Opt-out of marketing communications',
        'Export your data in a portable format'
      ]
    },
    {
      heading: '6. Cookies and Tracking',
      content: 'We use cookies and similar technologies to enhance your experience, analyze usage, and deliver personalized content. You can manage cookie preferences in your browser settings.'
    },
    {
      heading: '7. Children\'s Privacy',
      content: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.'
    },
    {
      heading: '8. Changes to Privacy Policy',
      content: 'We may update this policy periodically. We will notify you of significant changes via email or app notification.'
    },
    {
      heading: '9. Contact Us',
      content: 'For privacy-related inquiries, contact our Data Protection Officer at privacy@bikedelivered.com or call +1 (234) 567-890.'
    }
  ];

  return <LegalPage title="Privacy Policy" lastUpdated="April 1, 2025" sections={sections} />;
};

export default PrivacyPage;
