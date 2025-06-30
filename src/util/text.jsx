import { styled, Typography } from "@mui/material";

export const Title = styled(props => <Typography variant="h1" {...props} />)({
	textAlign: 'center',
	fontWeight: '500',
	fontSize: '4rem',
})
