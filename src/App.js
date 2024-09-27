import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { Userlogin } from "./Modules/User/Pages/login";
import { Adminlogin } from "./Modules/admin/pages/login";
import { Adminhomepage } from "./Modules/admin/pages/home";
import { Adminusers } from "./Modules/admin/pages/userslist";
import { Admindoctordetails } from "./Modules/admin/pages/doctordetails";
import { About } from "./Modules/admin/pages/about";




const router = createBrowserRouter([
  {
    path: "/user_login",
    element: <div><Userlogin/></div>,
  },
  {
    path:"/admin/login",
    element:<Adminlogin/>
  },
  {
    path:"/admin/homepage",
    element:<Adminhomepage/>
  },
  {
    path:"/admin/userlist",
    element:<Adminusers/>
  },
  {
    path:"/admin/doctordetails/:id",
    element:<Admindoctordetails/>
  },
  {path:"/admin/about",
    element:<About/>
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