import "./App.css";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Box from "./components/Box/Box";
import Nav from "./components/Nav/Nav";
import People from "./components/Section/People";
import Offer from "./components/Section/Offer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Button name="Oferta" handleOnClick={() => {}} />
      <People />
      <Offer />
      <Box />
      <Footer />
    </>

    //   <main>
    //     <div className="navbar-container">
    //       <div className="navbar">
    //         <p>moja firma</p>
    //         <nav>
    //           <ul className="main-navigation">
    //             <li className="main-navigation-el">
    //               <a className="main-nav-link" href="#onas">
    //                 o nas
    //               </a>
    //             </li>
    //             <li className="main-navigation-el">
    //               <a className="main-nav-link" href="#oferta">
    //                 oferta
    //               </a>
    //             </li>
    //             <li className="main-navigation-el-kontakt">
    //               <a className="main-nav-link" disabled>
    //                 kontakt
    //               </a>
    //             </li>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //     <div className="page-header">
    //       <div className="page-header-shadow">
    //         <div className="page-header-conteiner">
    //           <h1>
    //             Nasza firma oferuje najwyższej <br />
    //             jakości produkty.
    //           </h1>
    //           <p>Nie wierz nam na słowo - sprawdź</p>
    //           <a className="btn" href="#button">
    //             oferta
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="onas" className="page-container2">
    //       <section>
    //         <h2>Nasi specjaliści</h2>
    //         <article className="post-title">
    //           <div className="post-title_image first-image" />
    //           <div>
    //             <p className="post-title_title">Imię Nazwisko (dział)</p>
    //             <p className="post-title_text">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Repudiandae expedita iusto at molestiae quisquam error eligendi
    //               maiores voluptatem ratione incidunt nulla id, tempore quasi sunt
    //               nostrum, cupiditate officia aspernatur laboriosam?
    //             </p>
    //           </div>
    //         </article>
    //         <article className="post-title">
    //           <div className="post-title_image second-image" />
    //           <div>
    //             <p className="post-title_title2">Imię Nazwisko (dział)</p>
    //             <p className="post-title_text2">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //               Repudiandae expedita iusto at molestiae quisquam error eligendi
    //               maiores voluptatem ratione incidunt nulla id, tempore quasi sunt
    //               nostrum, cupiditate officia aspernatur laboriosam?
    //             </p>
    //           </div>
    //         </article>
    //       </section>
    //     </div>
    //     <div id="button" className="page-container">
    //       <h3>Czym zajmuje się nasza firma?</h3>
    //       <div className="grid-container">
    //         <div className="grid-item">
    //           <p className="new-offer"> Usługa 1</p>
    //           <h6>(nowość)</h6>
    //           <div className="circle" />
    //         </div>
    //         <div className="grid-item">Usługa 2</div>
    // <Service name="Usluga 2" ></Service>
    //         <div className="grid-item">Usługa 3</div>
    //         <div className="grid-item">Usługa 4</div>
    //         <div className="grid-item">Usługa 5</div>
    //         <div className="grid-item">Usługa 6</div>
    //       </div>
    //     </div>
    //     <footer>
    //       <div className="footer">
    //         <p>Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
    //         <div className="link_container">
    //           <a className="link" href="https://instagram.com">
    //             <div className="fa-brands fa-instagram socialmedia-icon" />
    //           </a>
    //           <a className="link" href="https://facebook.com">
    //             <div className="fa-brands fa-facebook-square socialmedia-icon" />
    //           </a>
    //         </div>
    //       </div>
    //     </footer>
    //   </main>
  );
}

//   <div>
//     <label>
//       <Header />,
//       <Nav />,
//       <Button name="Oferta" handleOnClick={onClick} />,
//       <People />,
//       <Offer />
//       <Box />
//       <Footer />,
//     </label>
//   </div>;

export default App;
