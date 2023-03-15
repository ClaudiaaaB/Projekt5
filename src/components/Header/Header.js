function Header() {
  return (
    <header className="page-header">
      <div className="page-header-shadow">
        <div className="page-header-conteiner container">
          <h1>
            Nasza firma oferuje najwyższej <br />
            jakości produkty.
          </h1>
          <p>Nie wierz nam na słowo - sprawdź</p>
          <a className="btn" href="#button">
            oferta
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
