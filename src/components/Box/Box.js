function Box({ title, isNew }) {
  return isNew ? (
    <div className="grid-item">
      <p className="new-offer"> {title}</p>
      <h6>(nowość)</h6>
      <div className="circle" />
    </div>
  ) : (
    <div className="grid-item">{title}</div>
  );
}

export default Box;
