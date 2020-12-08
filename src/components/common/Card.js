import React from "react";
import CardItem from "./CardItem";

const Card = ({ title, items }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.title}>{title}</div>
        <button style={styles.button}>View All</button>
      </div>
      <div style={styles.items}>
        {items.map((item, index) => (
          <div style={styles.item}>
            <CardItem key={index} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

const styles = {
  card: {
    padding: "35px",
    backgroundColor: "#fff",
    borderRadius: "2px",
    margin: "35px",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#8BC34A",
    padding: "5px 15px",
    border: "none",
    outline: "none",
    borderRadius: "3px",
    fontSize: "1.2rem",
    color: "#fff",
  },
  items: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  item: {
    width: "30%",
    minWidth: "300px",
    margin: "10px",
  },
};
