import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";

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
                 
            ]
      }
])

export default router;