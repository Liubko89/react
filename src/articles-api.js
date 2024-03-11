import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

const fetchDataArticles = async (topic) => {
  const resp = axios.get(`/search?query=${topic}`);
  return resp;
};

export default fetchDataArticles;
