import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { DoctorRegister } from "./Doctor/DoctorModule/DoctorRegister";
import { DoctorLogin } from "./Doctor/DoctorModule/DoctorLogin";
import { Login } from "./User/UserModule/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Login/></div>,
  },
  {
    path: "/doctorlogin",
    element: <div><DoctorLogin/></div>,
  },
  {
    path: "/doctorregister",
    element: <div><DoctorRegister/></div>,
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
