import React from "react";
import _ from "loadsh";
import Category from "./Category";
import Banner from "./common/Banner";

const CHUNK_SIZE = 2;
const Categories = ({ categories, images }) => {
  const numofChunks = Math.ceil(categories.length / CHUNK_SIZE);
  return (
    <div>
      {_.chunk(categories, CHUNK_SIZE).map((chunk, index) => {
        return (
          <React.Fragment>
            {chunk.map((category) => (
              <Category key={category.id} category={category} />
            ))}
            {index < images.length && (
              <Banner key={index} image={images[index]} />
            )}
          </React.Fragment>
        );
      })}
      {images.slice(numofChunks, images.length).map((image, index) => (
        <Banner key={numofChunks + index} image={image} />
      ))}
    </div>
  );
};

export default Categories;
