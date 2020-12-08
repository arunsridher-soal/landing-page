import React from "react";

const CardItem = ({ item }) => {
  return (
    <figure>
      <img style={styles.image} src={item.image} alt={item.name} />
      <figcaption style={styles.figCaption}>{item.name}</figcaption>
    </figure>
  );
};

export default CardItem;

const styles = {
  figure: {
    width: "100%",
  },
  image: {
    width: "100%",
    display: "block",
    height: "200px",
    objectFit: "contain",
    backgroundColor: "#efefef",
    borderRadius: "5px",
  },
  figCaption: {
    textAlign: "center",
  },
};
