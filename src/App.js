import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { UserLogin } from "./User/UserModule/UserLogin";
import { UserRegister } from "./User/UserModule/UserRegister";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><UserLogin/></div>,
  },
  {
    path: "/userregister",
    element: <div><UserRegister/></div>,
  },
  {
    path: "/doctorregister",
    element: <div></div>,
  }
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
