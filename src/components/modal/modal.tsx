import { Box, Dialog, DialogContent, DialogTitle, IconButton, IconButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from 'components/icon';
import { ReactNode } from 'react';

const CustomCloseButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
	top: 0,
	right: 0,
	color: 'grey.500',
	position: 'absolute',
	boxShadow: theme.shadows[2],
	transform: 'translate(10px, -10px)',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: `${theme.palette.background.paper} !important`,
	transition: 'transform 0.25s ease-in-out, box-shadow 0.25s ease-in-out',
	'&:hover': {
		transform: 'translate(7px, -5px)',
	},
}));

interface ModalProps {
	open: boolean;
	title: string;
	icon?: ReactNode;
	onClose: () => void;
	children: ReactNode;
}

export const Modal = ({ open, onClose, title, icon, children }: ModalProps) => {
	return (
		<Dialog
			fullWidth
			maxWidth="sm"
			open={open}
			sx={{ '& .MuiDialog-paper': { overflow: 'visible' } }}
			onClose={onClose}
		>
			<DialogTitle
				component="div"
				sx={{
					px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`],
					pt: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`],
				}}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', gap: (theme) => theme.spacing(2.5) }}>
					{icon}
					<Typography
						variant="h3"
						sx={{
							fontSize: 24,
							color: '#323232',
							fontWeight: 700,
							letterSpacing: '0.15px',
						}}
					>
						{title}
					</Typography>
				</Box>
			</DialogTitle>
			<DialogContent
				sx={{
					px: (theme) => [`${theme.spacing(5)} !important`, `${theme.spacing(10)} !important`],
					pb: (theme) => [`${theme.spacing(8)} !important`, `${theme.spacing(10)} !important`],
					pt: (theme) => [`${theme.spacing(6)} !important`, `${theme.spacing(7.5)} !important`],
				}}
			>
				<CustomCloseButton onClick={onClose}>
					<Icon icon="tabler:x" fontSize="1.25rem" />
				</CustomCloseButton>
				{children}
			</DialogContent>
		</Dialog>
	);
};
