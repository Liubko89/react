import Article from "./Article";

const ArticleList = ({ articles }) => {
  return (
    <ul>
      {articles.map(({ objectID, url, title }) => {
        return (
          <li key={objectID}>
            <Article url={url} title={title} />
          </li>
        );
      })}
    </ul>
  );
};

export default ArticleList;
