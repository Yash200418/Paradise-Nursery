import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  // Get cart data from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  // Increase quantity
  const increaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  // Remove item
  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  // Empty cart message
  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Your Shopping Cart</h1>
        <h3>Your cart is empty.</h3>

        <Link to="/products">
          <button style={buttonStyle}>Continue Shopping</button>
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "green" }}>
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
