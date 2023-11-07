import  Counter from './features/counter/Counter';
import './App.css';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import CartPage from './Pages/Cartpage';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ChartPieIcon } from '@heroicons/react/20/solid';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
      
    ,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    // Only for the Testing
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);




function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
   
    </div>
  );
}

export default App;
