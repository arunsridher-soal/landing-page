import axios from "axios";
const apiServer = process.env.REACT_APP_API_SERVER;

// actions
export const GET_CATEGORIES_START = "GET_CATEGORIES_START";
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS";
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE";

export const GET_IMAGES_START = "GET_IMAGES_START";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_FAILURE = "GET_IMAGES_FAILURE";

// action creators
export function getCategories() {
  return (dispatch) => {
    dispatch(getCategoriesStart());
    axios
      .get(`${apiServer}categories`)
      .then((response) => {
        dispatch(getCategoriesSuccess(response.data));
        return;
      })
      .catch((error) => {
        dispatch(getCategoriesFailure(error));
      });
  };
}

export function getCategoriesStart() {
  return {
    type: GET_CATEGORIES_START,
  };
}

export function getCategoriesSuccess(data) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    data,
  };
}

export function getCategoriesFailure(error) {
  return {
    type: GET_CATEGORIES_FAILURE,
    error,
  };
}

export function getImages() {
  return (dispatch) => {
    dispatch(getImagesStart());
    axios
      .get(`${apiServer}banners`)
      .then((response) => {
        dispatch(getImagesSuccess(response.data));
        return;
      })
      .catch((error) => {
        dispatch(getImagesFailure(error));
      });
  };
}

export function getImagesStart() {
  return {
    type: GET_IMAGES_START,
  };
}

export function getImagesSuccess(data) {
  return {
    type: GET_IMAGES_SUCCESS,
    data,
  };
}

export function getImagesFailure(error) {
  return {
    type: GET_IMAGES_FAILURE,
    error,
  };
}
