import fetchDataArticles from "../articles-api";
import { Fragment, useState } from "react";
import ArticleList from "./ArticleList";
import "./App.css";
import SearchForm from "./SearchForm";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const resp = await fetchDataArticles(topic);
      const {
        data: { hits },
      } = resp;

      setArticles(hits);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <h1>React JS. Articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <span className="loader"></span>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </Fragment>
  );
};

export default App;
