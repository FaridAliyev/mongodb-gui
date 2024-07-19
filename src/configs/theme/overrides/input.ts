import { OwnerStateThemeType } from './';

const input = () => {
	return {
		MuiInputLabel: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					transform: 'none',
					lineHeight: 1.154,
					marginBottom: theme.spacing(1),
					fontSize: theme.typography.body2.fontSize,
					color: `${theme.palette.text.primary} !important`,
				}),
				outlined: {
					transform: 'translate(15%, 115%)',
					'&.MuiInputLabel-shrink': {
						transform: 'translate(18px, -8px) scale(0.75)',
						fontSize: 12,
						fontWeight: 700,
						color: '#323232',
						letterSpacing: '0.15px',
					},
				},
			},
		},
		MuiInput: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					'&:before': {
						borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.2)`,
					},
					'&:hover:not(.Mui-disabled):before': {
						borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.28)`,
					},
					'&.Mui-disabled:before': {
						borderBottomStyle: 'solid',
					},
				}),
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					'&:not(.MuiInputBase-sizeSmall)': {
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
					},
					backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
					'&:hover:not(.Mui-disabled)': {
						backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`,
					},
					'&:before': {
						borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.2)`,
					},
					'&:hover:not(.Mui-disabled):before': {
						borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.28)`,
					},
				}),
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: ({ theme }: OwnerStateThemeType) => ({
					// color: 'rgba(164, 164, 164, 0.8)',
					fontSize: 14,
					letterSpacing: '0.15px',
					'&:not(.MuiInputBase-sizeSmall)': {
						borderRadius: 4,
					},
					'&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
						borderColor: `rgba(${theme.palette.customColors.main}, 0.28)`,
					},
					'&:hover.Mui-error .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.error.main,
					},
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: `rgba(50, 50, 50, 0.23)`,
					},
					'&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.text.disabled,
					},
					'&.Mui-focused': {
						boxShadow: theme.shadows[2],
					},
				}),
			},
		},

		// Radio, Checkbox & Switch
		MuiFormControlLabel: {
			styleOverrides: {
				label: ({ theme }: OwnerStateThemeType) => ({
					color: theme.palette.text.secondary,
				}),
			},
		},

		MuiTextField: {
			defaultProps: {
				fullWidth: true,
			},
		},
	};
};

export default input;
