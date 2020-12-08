import axios from "axios";
const apiServer = process.env.REACT_APP_API_SERVER;

export function getCategories() {
  return axios.get(`${apiServer}categories`);
}

export function getImages() {
  return axios.get(`${apiServer}banners`);
}
