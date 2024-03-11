const Article = ({ url, title }) => {
  return (
    <a href={url} target="blank" rel="noreferrer noopener">
      {title}
    </a>
  );
};

export default Article;
