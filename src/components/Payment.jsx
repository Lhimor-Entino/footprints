import React from "react";
import { useState } from "react";
import axios from "axios";
function Payment(props) {
  const [amount, setAmount] = useState(0);
  const [paymentIntentId, setPaymentIntentId] = useState(null);
  const [paymentMethodToken, setPaymentMethodToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a Payment Method object
    const paymentMethod = {
      type: "gcash",
    };

    // Call the backend API to create a Payment Intent and retrieve a Payment Method token
    try {
      const response = await axios.post("http://localhost:3002/api/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, paymentMethod }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error);
      }

      const data = await response.json();

      setPaymentIntentId(data.paymentIntentId);
      setPaymentMethodToken(data.paymentMethodToken);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Amount (in PHP):
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </label>
        <button type="submit">Pay with GCash</button>
      </form>
      {paymentIntentId && paymentMethodToken && (
        <div>
          <h2>Payment Intent ID: {paymentIntentId}</h2>
          <h2>Payment Method Token: {paymentMethodToken}</h2>
        </div>
      )}
      {errorMessage && (
        <div>
          <h2>Error: {errorMessage}</h2>
        </div>
      )}
    </div>
  );
}

export default Payment;
