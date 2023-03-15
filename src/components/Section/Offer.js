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

  offersList.map((offer) => {
    return <Box isNew={offer.isNew} title={offer.title} />;
  });
}

export default Offer;
