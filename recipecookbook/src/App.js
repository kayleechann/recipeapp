import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import WriteRecipe from "./pages/WriteRecipe"
import Home from "./pages/Home"
import SingleRecipe from "./pages/SingleRecipe"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./style.scss"

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/recipe/:id",
        element: <SingleRecipe/>
      },
      {
        path: "/writerecipe",
        element: <WriteRecipe/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
]);

function App() {
  return (
    <div className="app">
      <div className='container'>
       <RouterProvider router={router}/>
      </div>
     
    </div>
  );
}



export default App;
