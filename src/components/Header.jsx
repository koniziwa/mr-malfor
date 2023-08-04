function Header() {
  return (
    <header>
      <div className="header wrapper">
        <div className="header__left-side">
          <img src="/img/user.svg" alt="User" />
          <img src="/img/country.jpg" alt="Country" />
        </div>
        <img src="/img/logo.svg" alt="Logotype" />
        <div className="header__right-side">
          <img src="/img/favorite.svg" alt="Favorite" />
          <img src="/img/cart.svg" alt="Cart" />
          <div className="header__input-box">
            <img src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Найти..." />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
