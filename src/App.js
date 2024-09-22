import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { Userlogin } from "./Modules/User/Pages/login";
import { UserRegister } from "./Modules/User/Pages/register";


const router = createBrowserRouter([
  {
    path: "/user/login",
    element: <div><Userlogin/></div>,
  },
  {
    path: "/user/register",
    element: <div><UserRegister/></div>,
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
