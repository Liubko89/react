export const Product = ({ name, price, url }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={url} alt={name} width="480" />
      <p>{price}</p>
    </div>
  );
};
