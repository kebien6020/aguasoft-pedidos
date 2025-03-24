import { Button, Card, CardContent, CardHeader, CardMedia, CssBaseline, styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'

export const App = () => {
	return (
		<>
			<CssBaseline />
			<Title variant='h2'>Nuestros productos</Title>

			<Card>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<CardMedia
						component='img'
						src='https://placehold.co/200x300.png'
						sx={{ width: 150 }}
					/>
					<div>
						<CardHeader title='Paca de 360ml' />
						<CardContent>
							<Typography variant='body1'>
								Esta es una descripción de la paca de 360ml
							</Typography>
							<Typography variant='body1'>
								Precio por unidad: $3.100
							</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
								<TextField
									variant='outlined'
									label='Cantidad'
									value='2'
								/>
								<Button variant='contained'>+</Button>
								<Button variant='contained'>-</Button>
							</Box>
							<Typography variant='subtitle1'>
								Precio total: $6.200
							</Typography>
						</CardContent>
					</div>
				</Box>
			</Card>

			<Typography variant='h4' sx={{ textAlign: 'center' }}>Total: $6.200</Typography>
			<Button variant='contained' fullWidth>Siguiente</Button>
		</>
	)
}

const Title = styled(Typography)({
	textAlign: 'center',
})
