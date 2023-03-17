import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import People from "./components/Section/People";
import Offer from "./components/Section/Offer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <People />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
