import { CssBaseline } from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { AddProducts } from './AddProducts.jsx'
import { Home } from './Home.jsx'

const router = createBrowserRouter([
	{
		path: '/',
		Component: Home,
	},
	{
		path: '/add',
		Component: AddProducts,
	},
])

export const App = () => {
	return (
		<>
			<CssBaseline />
			<RouterProvider router={router} />
		</>
	)
}

