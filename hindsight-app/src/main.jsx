import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login'
import Roadmap from './pages/Roadmap'
import WorkWithUs from './pages/WorkWithUs'
import Premium from './pages/Premium'
import DApp from './pages/DApp'
import AllTokens from './pages/AllTokens'
import MyWallet from './pages/MyWallet'
import ErrorPage from './pages/404'

import './index.css'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
		errorElement: <ErrorPage/>    
	},
	{
		path: '/login',
		element: <Login></Login>,
		errorElement: <ErrorPage/>    
	},
	{
		path: '/roadmap',
		element: <Roadmap/>,
		errorElement: <ErrorPage/>
	},
	{
		path: '/work-with-us',
		element: <WorkWithUs />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/premium',
		element: <Premium />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/dapp',
		element: <DApp />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/tokens',
		element: <AllTokens />,
		errorElement: <ErrorPage />
	},
	{
		path: '/wallet',
		element: <MyWallet />,
		errorElement: <ErrorPage />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
		<RouterProvider router={ router }/>
	// </React.StrictMode>
)