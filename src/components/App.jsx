import { Product } from "./Product";
import { age, favouriteBooks } from "./Constants";
import { BookList } from "./BookList";

function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        price="150grn"
        url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      />
      <Product
        name="Fries and Burger"
        price="100grn"
        url="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
      />

      <h2>Books of the week</h2>
      <p>{age}</p>
      <BookList books={favouriteBooks} />
    </div>
  );
}

export default App;
