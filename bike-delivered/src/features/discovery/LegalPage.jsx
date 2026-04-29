import React from 'react';

const LegalPage = ({ title, lastUpdated, sections }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-brand-100">Last updated: {lastUpdated}</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-8">
          {sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
              {section.list && (
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-brand-50 rounded-xl p-6">
          <p className="text-gray-700">
            If you have any questions about this policy, please contact us at{' '}
            <a href="mailto:legal@bikedelivered.com" className="text-brand-600 hover:text-brand-700 font-semibold">
              legal@bikedelivered.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
