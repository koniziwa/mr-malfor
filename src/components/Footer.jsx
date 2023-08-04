function Footer() {
  return (
    <footer>
      <div className="footer wrapper">
        <div className="footer__promo">
          <p>Скидка 10% за подписку
            на еженедельную рассылку</p>
          <input type="email" placeholder="Email" />
          <button>Подписаться</button>
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
