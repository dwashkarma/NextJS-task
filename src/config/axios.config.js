const { default: axios } = require("axios");

const instance = axios.create("https://dummyjson.com");
export default instance;
