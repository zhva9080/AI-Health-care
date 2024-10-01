import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { Userlogin } from "./Modules/User/Pages/login";
import { UserRegister } from "./Modules/User/Pages/register";
import { Userhome } from "./Modules/User/Pages/Home";
import { Userview } from "./Modules/User/Pages/View";
import { Profile } from "./Modules/User/Pages/Home/Profile";
import { Doctorapp } from "./Modules/User/Pages/Doctorappointment";
import { Userhistory } from "./Modules/User/Pages/UserHistory";
import { Viewdetails } from "./Modules/User/Pages/View/Viewdetails";
import { UserBooking } from "./Modules/User/Pages/Booking";
const router = createBrowserRouter([
  {
    path: "/user/login",
    element: <div><Userlogin/></div>,
  },
  {
    path: "/user/register",
    element: <div><UserRegister/></div>,
  },
  {
    path: "/user/home",
    element: <div><Userhome/></div>,
  },
  {
    path: "/user/editprofile",
    element: <div><Profile/></div>,
  },
  {
    path: "/user/view",
    element: <div><Userview/></div>,
  },
  {
    path: "/user/doctorapp",
    element: <div><Doctorapp/></div>,
  },
  {
    path: "/user/history",
    element: <div><Userhistory/></div>,
  },
  {
    path: "/user/viewdetails/:id",
    element: <div><Viewdetails/></div>,
  },
  {
    path: "/user/booking",
    element: <div><UserBooking/></div>,
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
