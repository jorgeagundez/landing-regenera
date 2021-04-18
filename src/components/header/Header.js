import logo from '../../assets/img/logo.jpg';

function Header() {

  return (
    <header className="header">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>
    </header>
  );
}

export default Header;
