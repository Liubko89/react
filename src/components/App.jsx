import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import NothingFound from "../pages/NothingFound";
import css from "./App.module.css";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import ProductDetails from "../pages/ProductDetails";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>
    </div>
  );
};

export default App;
