import App from "../App";
import Cart from "../routes/cart/Cart";
import Error from "../routes/error/Error";
import Home from "../routes/home/Home";
import Shop from "../routes/shop/Shop";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
