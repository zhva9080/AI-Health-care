import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import './stylesheet/bootstrap.min.css'
import './stylesheet/paper-kit.css'

import { Login } from "./User/UserModule/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Login/></div>,
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
