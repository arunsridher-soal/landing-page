import React, { Component } from "react";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { connect } from "react-redux";
import { getCategories, getImages } from "../redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getCategories());
    this.props.dispatch(getImages());
  }

  render() {
    const { categories, images } = this.props.state;
    return (
      <div>
        <Header />
        <Categories categories={categories} images={images} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps)(App);
