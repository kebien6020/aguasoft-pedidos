import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router"
import { Title } from "./util/text.jsx"
import { Center, VSpace } from "./util/layout.jsx"
import { Layout } from "./components/Layout.jsx"

export const Home = () => (
	<Layout>
		<Title>Pedidos Agua Laif</Title>
		<VSpace />
		<Center>
			<Logo component={Link} to="/add" />
			<VSpace />
			<Button component={Link} to="/add" variant="contained" sx={{ fontSize: '2.5rem' }}>
				Ordene aquí
			</Button>
		</Center>

		<Typography variant="h3" sx={{ fontSize: '2rem' }}>Redes</Typography>
		<Typography variant="body1">Xxxxxx</Typography>
		<Typography variant="body1">Xxxxxx</Typography>
	</Layout>
)

const Logo = (props) => (
	<Box {...props} sx={{ width: '40%', minWidth: 200, maxHeight: '400px' }}>
		<Box component='img' src="logo-big.png" alt="Logo Agua Laif" sx={{ width: '100%', height: '100%', maxHeight: '400px', objectFit: 'contain' }} />
	</Box>
)
