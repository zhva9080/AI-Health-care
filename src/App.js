import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
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
