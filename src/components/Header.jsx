import { Link, useNavigate } from "react-router-dom";

function Header({ cart, user, setUser, setAuthModal, search, setSearch }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    setAuthModal("login");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          FLOWER SHOP
        </Link>
      </div>
      <div className="header-center">
        <input
  placeholder="What are you looking for?"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

        <button>Search</button>
      </div>
      <div className="header-right">
        {user && (
          <div className="icon-item">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 16-4 16 0" />
            </svg>
            <span>{user.name}</span>
          </div>
        )}
        {user && (
          <div className="icon-item" onClick={logout}>
            <svg viewBox="0 0 24 24">
              <path d="M16 17v2H5V5h11v2" strokeWidth="2" />
              <path d="M21 12H9" strokeWidth="2" />
              <path d="M15 8l6 4-6 4" strokeWidth="2" />
            </svg>
            <span>Log out</span>
          </div>
        )}
        <Link to="/cart" className="icon-item cart-icon">
          <div className="cart-icon-wrapper">
            <svg viewBox="0 0 24 24">
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
