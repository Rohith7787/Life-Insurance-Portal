import React, { useState } from 'react';
import './PaymentsPage.css';

const PaymentsPage = () => {
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handlePaymentChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Logic for processing the payment
    console.log(`Payment of $${paymentAmount} submitted.`);
    // Reset payment amount
    setPaymentAmount(0);
  };

  return (
    <div className="payments-container">
      <h2>Make a Payment</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="payment-field">
          <label htmlFor="amount">Payment Amount:</label>
          <input
            type="number"
            id="amount"
            value={paymentAmount}
            onChange={handlePaymentChange}
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentsPage;
