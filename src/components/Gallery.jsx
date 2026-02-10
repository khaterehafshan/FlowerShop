import { Link } from "react-router-dom";
import { products } from "./ProductsList";

function Gallery({ cart, setCart, search }) {
  const filteredProducts = search.trim()
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase().trim())
      )
    : products;

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <div className="shop-gallery">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div className="image-wrapper">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <button
              className="cart-icon"
              onClick={() => addToCart(product)}
            >
              
            </button>
          </div>

          <div className="card-info">
            <p className="price">{product.price}</p>
            <p className="title">{product.name}</p>
            <div className="rating">
              ⭐ {product.rating} / {product.reviews}
            </div>
          </div>
        </div>
      ))}

      {filteredProducts.length === 0 && (
        <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
          No products found.
        </p>
      )}
    </div>
  );
}

export default Gallery;
