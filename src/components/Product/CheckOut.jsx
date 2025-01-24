import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCart } from "../../contexts/CartContext";
import "./CheckOut.css";

const CheckOut = () => {
  const { cartItems, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given_name}`);
      console.log("Payment Details:", details);

      // Clear the cart after successful payment
      clearCart();
    });
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <p>Total Price: <b>Rs. {totalPrice.toFixed(2)}</b></p>

      {/* PayPal Integration */}
      <PayPalScriptProvider
        options={{
          "client-id": "AbeYF30cWTSallR5pTZ9PGy6A-TNIyoF48LmfE6lZpR9f0TIJGyVXwAjMY-geFW3cEYaUmhg9YxW6QFC", // Replace with your PayPal client ID
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice.toFixed(2), // Ensure value is passed as a string
                  },
                },
              ],
            });
          }}
          onApprove={handleApprove}
          onError={(err) => {
            console.error("PayPal Checkout Error:", err);
            alert("Payment could not be processed. Please try again.");
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default CheckOut;
