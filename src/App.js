import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { Userlogin } from "./Modules/User/Pages/login";
import { Doctor_Login } from "./Modules/Doctor/pages/login";
import { Doctor_Register } from "./Modules/Doctor/pages/register";
import { Doctor_Home } from "./Modules/Doctor/pages/home";
import { DoctorSlot } from "./Modules/Doctor/pages/slot-booking";
import { PatientsList } from "./Modules/Doctor/pages/patient-booking-list";
import { Patient_History } from "./Modules/Doctor/pages/patient-history";



const router = createBrowserRouter([
  {
    path: "/user_login",
    element: <div><Userlogin/></div>,
  },
  {
    path : "/doctor_login",
    element : <Doctor_Login/>
  },
  {
    path : "/doctor_register",
    element : <Doctor_Register/>
  },
  {
    path : "/doctor_home",
    element : <Doctor_Home/>
  },
  {
    path :"/patient_list",
    element : <PatientsList />
  },
  {
    path : "/doctor_slot",
    element : <DoctorSlot/>
  },
  {
    path:"/patients_history",
    element : <Patient_History/>

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
