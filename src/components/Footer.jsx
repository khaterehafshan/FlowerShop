function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3> FLOWER SHOP</h3>
          <p>Bringing Joy Through Flowers🌹</p>
        </div>
        <div className="footer-center">
          <p>📍 Address: 123 Flower Street, Your City</p>
          <p>📞 Phone: +123 456 7890</p>
          <p>✉ Email: info@flowershop.com</p>
        </div>
        <div className="footer-right">
          <p>Follow us:</p>
          <div className="social-icons">
            <a href="#">🌐</a>
            <a href="#">📸</a>
            <a href="#">☎️</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FLOWER SHOP. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
