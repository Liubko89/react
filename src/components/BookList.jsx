export const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(({ name, id }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};
