import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Do from "../pages/Home/Do";


const router= createBrowserRouter([
      {
            path:'/',
            element:<Main/>,
            children:[
                  {
                        path:'/',
                        element:<Home></Home>
                  },
                  {
                        path:'about',
                        element:<About></About>
                  } ,
                  {
                        path:'do',
                        element:<Do></Do>
                  }
            ]
      }
])

export default router;