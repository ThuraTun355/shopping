import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import MyCart from "../pages/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product-detail/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/my-cart",
        element: <MyCart />,
      },
    ],
  },
]);

export default router;
