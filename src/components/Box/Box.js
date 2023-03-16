import "./Box.css";

function Box({ title, isNew }) {
  return (
    <div className="grid-item">{title}</div>

    // <div id="button" className="page-container">
    //   <h3>Czym zajmuje się nasza firma?</h3>
    //   <div className="grid-container">
    //     <div className="grid-item">
    //       <p className="new-offer"> Usługa 1</p>
    //       <h6>(nowość)</h6>
    //       <div className="circle" />
    //     </div>
    //     <div className="grid-item">Usługa 2</div>
    //     <div className="grid-item">Usługa 3</div>
    //     <div className="grid-item">Usługa 4</div>
    //     <div className="grid-item">Usługa 5</div>
    //     <div className="grid-item">Usługa 6</div>
    //   </div>
    // </div>
  );
}

export default Box;
