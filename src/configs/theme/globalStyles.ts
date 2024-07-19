import { Theme } from '@mui/material/styles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GlobalStyles = (theme: Theme) => {
	return {
		'.demo-space-x > *': {
			marginTop: `${theme.spacing(7.5)} !important`,
			marginRight: `${theme.spacing(2.5)} !important`,
		},
		'.demo-space-y > *:not(:last-of-type)': {
			marginBottom: '1rem',
		},
		'.MuiGrid-container.match-height .MuiCard-root': {
			height: '100%',
		},
		'.iconify g, .iconify path': {
			strokeWidth: 1.5,
		},
	};
};

export default GlobalStyles;
