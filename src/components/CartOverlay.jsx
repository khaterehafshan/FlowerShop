export default function CartOverlay({ cart, onClose }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">
      <button onClick={onClose} className="close-btn">✖</button>
      <h3>Your Cart 🛒</h3>
      {cart.length === 0 && <p>Cart is empty</p>}
      <ul>
        {cart.map((item,i)=> <li key={i}>{item.name} - ${item.price}</li>)}
      </ul>
      <strong>Total: ${total}</strong>
    </div>
  );
}
