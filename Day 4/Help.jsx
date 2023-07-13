import React from 'react';
import './Help.css';

const HelpPage = () => {
  return (
    <div className="help-page-container">
      <h2>Help Center</h2>
      <p>Need assistance? Contact our support team or check out our FAQs below.</p>
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Phone: 123-456-7890</p>
        <p>Email: support@NovaGuard.com</p>
      </div>
      <div className="faqs">
        <h4>Frequently Asked Questions</h4>
        <ul>
          <li>
            <strong>Question 1:</strong> What are the different types of life insurance policies?
          </li>
          <li>
            <strong>Question 2:</strong> How can I file a claim for my life insurance policy?
          </li>
          <li>
            <strong>Question 3:</strong> What factors affect the premium of a life insurance policy?
          </li>
          <li>
            <strong>Question 4:</strong> How do I update my beneficiary information?
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HelpPage;
