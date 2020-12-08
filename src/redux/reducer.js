import {
  GET_CATEGORIES_START,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
  GET_IMAGES_START,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from "./actions";

const initialState = {
  categories: [],
  images: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_START:
    case GET_IMAGES_START:
      return {
        ...state,
        fetchingData: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        categories: action.data,
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        images: action.data,
      };
    case GET_CATEGORIES_FAILURE:
    case GET_IMAGES_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.error,
      };
    default:
      return state;
  }
}
