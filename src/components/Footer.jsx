function Footer() {
  return (
    <footer>
      <div className="footer wrapper">
        <div className="footer__promo">
          <p>
            10% discount for subscribing to the weekly newsletter</p>
          <input type="email" placeholder="Email" />
          <button>Subscribe</button>
        </div>
        <div className="footer__contacts">
          <h4>support@mrmalfor.com</h4>
          <span>+7 (800) 980-60-00</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
