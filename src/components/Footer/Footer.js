import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
      <div className="link_container">
        <a className="link" href="https://instagram.com">
          <div class="fa-brands fa-instagram socialmedia-icon"></div>
        </a>
        <a className="link" href="https://facebook.com">
          <div className="fa-brands fa-facebook-square socialmedia-icon"></div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
