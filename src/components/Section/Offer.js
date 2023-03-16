function Offer(Box) {
  const offersList = [
    {
      title: "Usługa 1",
      isNew: true,
    },
    {
      title: "Usługa 2",
      isNew: false,
    },
    {
      title: "Usługa 3",
      isNew: false,
    },
    {
      title: "Usługa 4",
      isNew: false,
    },
    {
      title: "Usługa 5",
      isNew: false,
    },
    {
      title: "Usługa 6",
      isNew: false,
    },
  ];
  return (
    <div>
      {/* {offersList.map((offer, index) => {
        return <Box key={index} isNew={offer.isNew} title={offer.title} />;
      })} */}
    </div>
  );
}

export default Offer;
