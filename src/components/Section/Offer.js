import Box from "../Box/Box";
import { offersList } from "../../data/offerList";

function Offer() {
  return (
    <section id="button" className="page-container">
      <h3>Czym zajmuje się nasza firma?</h3>
      <div className="grid-container">
        {offersList.map((offer, index) => {
          return <Box key={index} isNew={offer.isNew} title={offer.title} />;
        })}
      </div>
    </section>
  );
}

export default Offer;
