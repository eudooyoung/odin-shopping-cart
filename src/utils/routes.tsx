import App from "../App";
import Cart from "../routes/cart/Cart";
import Home from "../routes/home/Home";
import Shop from "../routes/shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
