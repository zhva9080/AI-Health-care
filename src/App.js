import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import { Userlogin } from "./Modules/User/Pages/login";
import { Doctor_Login } from "./Modules/Doctor/pages/login";
import { Doctor_Register } from "./Modules/Doctor/pages/register";
import { Doctor_Home } from "./Modules/Doctor/pages/home";
import { DoctorSlot } from "./Modules/Doctor/pages/slot-booking";
import { PatientsList } from "./Modules/Doctor/pages/patient-booking-list";
import { Patient_History } from "./Modules/Doctor/pages/patient-payment-history";
import { Slot_List } from "./Modules/Doctor/pages/slot_list";



const router = createBrowserRouter([
  {
    path: "/user_login",
    element: <div><Userlogin/></div>,
  },
  {
    path : "/doctor/login",
    element : <Doctor_Login/>
  },
  {
    path : "/doctor/register",
    element : <Doctor_Register/>
  },
  {
    path : "/doctor/home",
    element : <Doctor_Home/>
  },
  {
    path :"/patient_list/:id",
    element : <PatientsList />
  },
  {
    path : "/doctor/slot",
    element : <DoctorSlot/>
  },
  {
    path:"/doctor/patients_history",
    element : <Patient_History/>
  },
  {
    path :"/doctor/slot_list",
    element: <Slot_List/>
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
