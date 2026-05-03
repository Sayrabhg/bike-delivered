import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = {
    general: {
      title: 'General',
      icon: 'ℹ️',
      questions: [
        {
          id: 'g1',
          question: 'What is Bike Delivered?',
          answer: 'Bike Delivered is a fast and reliable food delivery platform that connects you with the best local restaurants. We use bikes for delivery to ensure your food arrives hot, fresh, and eco-friendly.'
        },
        {
          id: 'g2',
          question: 'How does Bike Delivered work?',
          answer: 'Simply browse restaurants near you, select your favorite meals, add them to your cart, and place your order. Our bike riders will pick up your food and deliver it to your doorstep within 30-60 minutes.'
        },
        {
          id: 'g3',
          question: 'Which cities do you operate in?',
          answer: 'We currently operate in New York, Los Angeles, Chicago, and Houston. We\'re expanding rapidly and plan to launch in more cities soon. Check our Cities section to see if we\'re in your area!'
        },
        {
          id: 'g4',
          question: 'Is Bike Delivered environmentally friendly?',
          answer: 'Yes! We use bikes for delivery, which produces zero emissions. We also partner with restaurants that use eco-friendly packaging and have initiatives to reduce our carbon footprint.'
        },
        {
          id: 'g5',
          question: 'How can I contact customer support?',
          answer: 'You can reach our 24/7 customer support team through the in-app chat, email at support@bikedelivered.com, or call us at +1 (234) 567-890. We\'re always here to help!'
        }
      ]
    },
    ordering: {
      title: 'Ordering',
      icon: '🛒',
      questions: [
        {
          id: 'o1',
          question: 'What is the minimum order amount?',
          answer: 'The minimum order amount varies by restaurant but typically ranges from $10-$15. You can see the minimum order requirement on each restaurant\'s page.'
        },
        {
          id: 'o2',
          question: 'Can I schedule an order for later?',
          answer: 'Yes! You can schedule your order for a later time during checkout. Simply select your preferred delivery time slot, and we\'ll make sure your food arrives exactly when you want it.'
        },
        {
          id: 'o3',
          question: 'Can I modify my order after placing it?',
          answer: 'You can modify your order within 2 minutes of placing it. After that, the restaurant starts preparing your food, and modifications may not be possible. Contact support immediately if you need to make changes.'
        },
        {
          id: 'o4',
          question: 'How do I track my order?',
          answer: 'Once your order is confirmed, you can track it in real-time on our Track Page. You\'ll see updates as your order moves through: Confirmed → Preparing → Picked Up → In Transit → Delivered.'
        },
        {
          id: 'o5',
          question: 'Can I order for someone else?',
          answer: 'Absolutely! During checkout, you can enter a different delivery address and add special instructions. The recipient will receive notifications about the delivery status.'
        }
      ]
    },
    delivery: {
      title: 'Delivery',
      icon: '🚴',
      questions: [
        {
          id: 'd1',
          question: 'How long does delivery take?',
          answer: 'Delivery typically takes 30-60 minutes depending on your distance from the restaurant, traffic conditions, and order volume. You\'ll get an estimated delivery time before confirming your order.'
        },
        {
          id: 'd2',
          question: 'What is the delivery fee?',
          answer: 'Delivery fees are calculated at $2.50 per kilometer with a minimum fee of $10. Orders over $30 often qualify for free or discounted delivery. Check our deals section for special offers!'
        },
        {
          id: 'd3',
          question: 'What is the maximum delivery distance?',
          answer: 'We deliver within a 20 km radius from the restaurant. This ensures your food arrives fresh and hot. Restaurants show you if you\'re within their delivery range when you browse.'
        },
        {
          id: 'd4',
          question: 'What if my order is late?',
          answer: 'If your order is significantly late (more than 15 minutes past the estimated time), you may be eligible for a partial or full refund. Contact our support team, and we\'ll make it right.'
        },
        {
          id: 'd5',
          question: 'Do you deliver in bad weather?',
          answer: 'Yes, we deliver in most weather conditions. However, during extreme weather (heavy snow, hurricanes), delivery may be temporarily suspended for rider safety. We\'ll notify you of any service disruptions.'
        }
      ]
    },
    payment: {
      title: 'Payment',
      icon: '💳',
      questions: [
        {
          id: 'p1',
          question: 'What payment methods do you accept?',
          answer: 'We accept Credit Cards, Debit Cards, UPI, Digital Wallets, and Cash on Delivery. You can save multiple payment methods in your profile for faster checkout.'
        },
        {
          id: 'p2',
          question: 'Is my payment information secure?',
          answer: 'Absolutely! We use industry-standard encryption and are PCI DSS compliant. We never store your full credit card details on our servers. All transactions are processed through secure payment gateways.'
        },
        {
          id: 'p3',
          question: 'Can I get a refund?',
          answer: 'Yes, if there\'s an issue with your order (wrong items, missing items, poor quality), you can request a refund within 24 hours. Our support team will review and process refunds within 2-3 business days.'
        },
        {
          id: 'p4',
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees! The price you see at checkout is what you pay. This includes food cost, delivery fee, taxes, and any applicable service fees. We believe in complete transparency.'
        },
        {
          id: 'p5',
          question: 'Do you offer any discounts or promotions?',
          answer: 'Yes! We regularly offer promotions, first-order discounts, and loyalty rewards. Subscribe to our newsletter and enable push notifications to never miss a deal. Check our Deals filter for current offers.'
        }
      ]
    },
    account: {
      title: 'Account',
      icon: '👤',
      questions: [
        {
          id: 'a1',
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the top right corner, enter your name, email, and password. You can also sign up using your Google or Facebook account for faster registration.'
        },
        {
          id: 'a2',
          question: 'I forgot my password. How do I reset it?',
          answer: 'Click "Login" and then "Forgot Password". Enter your registered email address, and we\'ll send you a password reset link. The link expires in 24 hours for security reasons.'
        },
        {
          id: 'a3',
          question: 'How do I update my delivery address?',
          answer: 'Go to your Profile page, click on "Saved Addresses", and you can add, edit, or delete addresses. You can also set a default address for faster checkout.'
        },
        {
          id: 'a4',
          question: 'Can I delete my account?',
          answer: 'Yes, you can delete your account from Profile → Settings → Delete Account. Please note that this action is permanent and will erase all your data, including order history and saved addresses.'
        },
        {
          id: 'a5',
          question: 'How does the loyalty program work?',
          answer: 'Earn 1 point for every $1 spent. Accumulate points to unlock rewards like free delivery, discounts, and exclusive offers. Check your point balance in your Profile under "Loyalty Rewards".'
        }
      ]
    },
    partners: {
      title: 'For Partners',
      icon: '🤝',
      questions: [
        {
          id: 'pt1',
          question: 'How can I add my restaurant to Bike Delivered?',
          answer: 'Visit our "Add Restaurant" page in the footer and fill out the partnership application. Our team will review your application and contact you within 48 hours to discuss terms and onboarding.'
        },
        {
          id: 'pt2',
          question: 'What commission do you charge restaurants?',
          answer: 'We charge a competitive commission rate of 15-25% per order, depending on your plan. This includes marketing, delivery logistics, customer support, and payment processing.'
        },
        {
          id: 'pt3',
          question: 'How can I become a delivery rider?',
          answer: 'Click "Become a Rider" in the footer, submit your application, and attend a brief orientation. You\'ll need a bike, smartphone, and valid ID. Start earning on your own schedule!'
        },
        {
          id: 'pt4',
          question: 'What are the benefits for partner restaurants?',
          answer: 'Partner restaurants get increased visibility, access to thousands of customers, marketing support, analytics dashboard, dedicated account manager, and streamlined order management tools.'
        },
        {
          id: 'pt5',
          question: 'How do riders get paid?',
          answer: 'Riders are paid weekly via direct deposit or digital wallet. Earnings include base pay per delivery, distance bonuses, peak hour incentives, and customer tips. Average riders earn $15-$25/hour.'
        }
      ]
    }
  };

  const categories = Object.keys(faqCategories);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-brand-100 max-w-2xl mx-auto">
              Find answers to common questions about Bike Delivered. Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-3xl mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* FAQ Categories and Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-2">{faqCategories[category].icon}</span>
              {faqCategories[category].title}
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqCategories[activeCategory].questions.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-brand-600 transform transition-transform flex-shrink-0 ${
                      openQuestions[faq.id] ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openQuestions[faq.id] && (
                  <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help you with any questions or concerns.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/help"
              className="bg-brand-600 hover:bg-brand-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="mailto:support@bikedelivered.com"
              className="bg-white border-2 border-brand-600 text-brand-600 hover:bg-brand-50 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
