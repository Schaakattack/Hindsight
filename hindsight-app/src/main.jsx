import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import './index.css'
import App from './App'
import ErrorPage from './pages/404'
import Login from './pages/login'
import Roadmap from './pages/Roadmap'
import WorkWithUs from './pages/WorkWithUs'
import Premium from './pages/Premium'
import EtherScanHome from './pages/EtherScanHome'
import AllTokens from './pages/AllTokens'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login></Login>
  }
  ,
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/roadmap",
    element: <Roadmap/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/work_with_us",
    element: <WorkWithUs />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/premium",
    element: <Premium />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/ether_scan_home",
    element: <EtherScanHome />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/all_tokens",
    element: <AllTokens />,
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
