import { useParams, useNavigate } from "react-router-dom";
import { products } from "./ProductsList";

function ProductPage({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p>Product not found.</p>;

  const addToCart = () => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="product-page">
      <div className="product-left">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-right">
        <h1 className="product-title">{product.name}</h1>
        <div className="product-rating">
          ⭐ {product.rating} • {product.reviews} reviews
        </div>
        <div className="product-price">
          {product.price} <p className="vat">VAT included</p>
        </div>
        <button className="add-cart" onClick={addToCart}>
          Add to cart
        </button> 
        
        <button className="back-home" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
