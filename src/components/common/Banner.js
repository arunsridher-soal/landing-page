import React from "react";

const Banner = ({ image }) => {
  return (
    <div style={styles.imageContainer}>
      <img style={styles.image} src={image} alt="banner" />
    </div>
  );
};

export default Banner;

const styles = {
  imageContainer: {
    padding: "35px",
    borderRadius: "2px",
  },
  image: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  },
};
