import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
      <div className="link_container">
        <a className="link" href="https://instagram.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="link" href="https://facebook.com">
          <i className="fa-brands fa-facebook-square"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
