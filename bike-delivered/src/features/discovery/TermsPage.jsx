import React from 'react';
import LegalPage from './LegalPage';

const TermsPage = () => {
  const sections = [
    {
      heading: '1. Acceptance of Terms',
      content: 'By accessing or using Bike Delivered services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
    },
    {
      heading: '2. Description of Service',
      content: 'Bike Delivered provides a platform that connects customers with local restaurants and facilitates food delivery through our network of bike riders. We act as an intermediary between you and the restaurants.',
      list: [
        'Browse restaurant menus and place orders',
        'Track deliveries in real-time',
        'Process payments securely',
        'Provide customer support'
      ]
    },
    {
      heading: '3. User Accounts',
      content: 'You must create an account to use our services. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
      list: [
        'Must be 18 years or older',
        'Provide accurate and complete information',
        'Maintain secure password',
        'Notify us of unauthorized access'
      ]
    },
    {
      heading: '4. Orders and Payments',
      content: 'When you place an order, you agree to pay all charges associated with your order, including food costs, delivery fees, taxes, and any applicable service fees.',
      list: [
        'Prices are subject to change without notice',
        'Payment must be made at time of order',
        'Refunds processed within 2-3 business days',
        'We reserve the right to cancel orders'
      ]
    },
    {
      heading: '5. Delivery Terms',
      content: 'Delivery times are estimates and may vary based on restaurant preparation time, traffic conditions, and weather. We strive to deliver within 30-60 minutes.'
    },
    {
      heading: '6. Prohibited Conduct',
      content: 'You agree not to misuse our services or engage in any unlawful activities.',
      list: [
        'Fraudulent or abusive behavior',
        'Harassment of riders or restaurant staff',
        'Attempting to hack or disrupt the platform',
        'Using the service for illegal purposes'
      ]
    },
    {
      heading: '7. Limitation of Liability',
      content: 'Bike Delivered shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.'
    },
    {
      heading: '8. Changes to Terms',
      content: 'We reserve the right to modify these terms at any time. We will notify users of material changes via email or app notification. Continued use of services constitutes acceptance of modified terms.'
    },
    {
      heading: '9. Contact Information',
      content: 'For questions about these Terms of Service, please contact us at legal@bikedelivered.com or call +1 (234) 567-890.'
    }
  ];

  return <LegalPage title="Terms of Service" lastUpdated="April 1, 2025" sections={sections} />;
};

export default TermsPage;
