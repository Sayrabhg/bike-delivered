import React from 'react';
import LegalPage from './LegalPage';

const CookiesPage = () => {
  const sections = [
    {
      heading: '1. What Are Cookies?',
      content: 'Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and understand how you use our platform.'
    },
    {
      heading: '2. Types of Cookies We Use',
      content: 'We use different types of cookies for various purposes:',
      list: [
        'Essential Cookies: Required for basic site functionality (login, cart)',
        'Analytics Cookies: Help us understand how visitors interact with our site',
        'Preference Cookies: Remember your settings and preferences',
        'Marketing Cookies: Used to deliver relevant advertisements'
      ]
    },
    {
      heading: '3. How We Use Cookies',
      content: 'Cookies help us:',
      list: [
        'Keep you logged in during your session',
        'Remember your delivery address',
        'Track your order status',
        'Analyze site performance and usage',
        'Personalize your experience'
      ]
    },
    {
      heading: '4. Third-Party Cookies',
      content: 'We may use third-party services that set their own cookies, including Google Analytics, payment processors, and social media platforms. We do not control these cookies.'
    },
    {
      heading: '5. Managing Cookies',
      content: 'You can control and manage cookies through your browser settings. However, disabling certain cookies may affect site functionality.'
    },
    {
      heading: '6. Cookie Duration',
      content: 'Session cookies expire when you close your browser. Persistent cookies remain on your device until they expire or you delete them.'
    },
    {
      heading: '7. Updates to Cookie Policy',
      content: 'We may update this policy as we change our cookie practices. Check back periodically for updates.'
    },
    {
      heading: '8. Questions?',
      content: 'If you have questions about our use of cookies, contact us at privacy@bikedelivered.com.'
    }
  ];

  return <LegalPage title="Cookie Policy" lastUpdated="April 1, 2025" sections={sections} />;
};

export default CookiesPage;
