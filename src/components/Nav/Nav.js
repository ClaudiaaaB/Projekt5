import "./Nav.css";

function Nav() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <p>moja firma</p>
        <ul className="main-navigation">
          <li className="main-navigation-el">
            <a className="main-nav-link" href="#onas">
              o nas
            </a>
          </li>
          <li className="main-navigation-el">
            <a className="main-nav-link" href="#button">
              oferta
            </a>
          </li>
          <li className="main-navigation-el-kontakt">
            <a className="main-nav-link" disabled>
              kontakt
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
