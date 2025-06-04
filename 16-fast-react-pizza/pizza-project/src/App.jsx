import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder from './features/order/createOrder';
import AppLayout from './ui/AppLayout';
import Order, { loader as orderLoader } from "./features/order/Order";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {path: "/", element: <Home />},
      {path: "/menu",element: <Menu />, loader: menuLoader},
      {path: "/cart", element: <Cart />},
      {path: "/order/new", element: <CreateOrder />},
      {path: "/order/:orderId", element: <Order />, loader: orderLoader}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
