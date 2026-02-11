import { useNavigate } from "react-router-dom";

function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const increase = (index) => {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  };

  const decrease = (index) => {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      setCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("€", "")) * (item.qty || 1),
    0
  );

  const delivery = cart.length > 0 ? 4 : 0; 
  const total = subtotal + delivery;

  return (
    <div className="cart-container">
      <div className="cart-left">
        <h2>Shopping Cart</h2>

        {cart.length === 0 && <p>Your cart is empty.</p>}

        {cart.map((item, index) => (
          <div key={index} className="cart-item-card">
            <img src={item.image} alt={item.name} />

            <div className="item-details">
              <p className="item-name">{item.name}</p>

              <div className="qty-controls">
                <button onClick={() => decrease(index)}>-</button>
                <span>{item.qty || 1}</span>
                <button onClick={() => increase(index)}>+</button>
              </div>

              
              <button className="remove-btn" onClick={() => removeItem(index)}>
                Remove
              </button>
            </div>

            <div className="item-price">
              €
              {(
                parseFloat(item.price.replace("€", "")) * (item.qty || 1)
              ).toFixed(2)}
            </div>
          </div>
        ))}

       
        <button className="back-home-btn" onClick={() => navigate("/")}>
              ← Back to Home
        </button>
      </div>

      <div className="cart-summary">
        <h3>Summary</h3>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>€{subtotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Delivery</span>
          <span>€{delivery.toFixed(2)}</span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>€{total.toFixed(2)}</span>
        </div>

        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
