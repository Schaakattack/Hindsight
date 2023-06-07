import React from "react"
import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login'
import Roadmap from './pages/Roadmap'
// import WorkWithUs from './pages/WorkWithUs'
import Premium from './pages/Pricing'
import AppMain from './pages/AppMain'
import AllTokens from './pages/AllTokens'
import MyWallet from './pages/MyWallet'
import Inspector from './pages/Inspector'
import ErrorPage from './pages/404'

import './index.css'
import FAQ from "./pages/FAQ"
import AboutUs from "./pages/AboutUs"
import AppNetwork from "./pages/AppNetwork"

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
		path: '/about-us',
		element: <AboutUs/>,
		errorElement: <ErrorPage/>
	},
	{
		path: '/premium',
		element: <Premium />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/faq',
		element: <FAQ/>,
		errorElement: <ErrorPage/>
	},
	{
		path: '/app',
		element: <AppMain />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/app/networks',
		element: <AppNetwork />,
		errorElement: <ErrorPage/>
	},
	{
		path: '/app/tokens',
		element: <AllTokens />,
		errorElement: <ErrorPage />
	},
	{
		path: '/app/wallet',
		element: <MyWallet />,
		errorElement: <ErrorPage />
	},
	{
		path: '/app/inspect',
		element: <Inspector />,
		errorElement: <ErrorPage />
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={ router }/>
)