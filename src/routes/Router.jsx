import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Do from "../pages/Home/Do";
import Header from "../pages/Shared/Header/Header";


const router= createBrowserRouter([
      {
            path:'/',
            element:<Header/>,
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