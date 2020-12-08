import React, { Component } from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { getCategories, getImages } from "./../apis/index";

class App extends Component {
  state = {
    categories: [],
    images: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    const images = await getImages();
    this.setState({
      categories: categories.data,
      images: images.data,
    });
  }

  render() {
    const { categories, images } = this.state;
    return (
      <div>
        <Header />
        <Categories categories={categories} images={images} />
      </div>
    );
  }
}

export default App;
