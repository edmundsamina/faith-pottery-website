import "./App.css";
import { Home } from "./assets/pages/Home";
import { Products } from "./assets/pages/Products";
import { Root } from "./assets/pages/Root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/",
        element: <Home/>,
      }
    ]
  }
]);


function App() {
  

  return (
    <RouterProvider router={router} />  
  );
}

export default App;
