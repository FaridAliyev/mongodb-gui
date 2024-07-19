import { IconButton } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AlertIcon from 'assets/icons/alert.svg?react';
import FolderIcon from 'assets/icons/folder.svg?react';
import TrashIcon from 'assets/icons/trash.svg?react';
import { DeleteForm } from 'components/delete-form';
import { Modal } from 'components/modal';
import { Settings } from 'configs/context/types';
import themeConfig from 'configs/theme/themeConfig';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import { hexToRGBA } from 'utils/hex-to-rgba';

import { NavGroup, NavLink as NavLinkType } from '../../types';

interface Props {
	parent?: boolean;
	item: NavLinkType;
	settings: Settings;
	navVisible?: boolean;
	collapsedNavWidth: number;
	navigationBorderWidth: number;
	toggleNavVisibility: () => void;
	isSubToSub?: NavGroup;
}

const MenuNavLink = styled(ListItemButton)<ListItemButtonProps & LinkProps>(({ theme }) => ({
	width: '100%',
	marginLeft: theme.spacing(3.5),
	marginRight: theme.spacing(3.5),
	borderRadius: theme.shape.borderRadius,
	transition: 'padding-left .25s ease-in-out, padding-right .25s ease-in-out',
	'&:hover': {
		backgroundColor: theme.palette.action.hover,
		'& .hover-icons': {
			display: 'flex',
		},
	},
	'&.active': {
		'&, &:hover': {
			boxShadow: `0px 2px 6px ${hexToRGBA(theme.palette.primary.main, 0.48)}`,
			background: `linear-gradient(72.47deg, ${
				theme.direction === 'ltr' ? theme.palette.primary.main : hexToRGBA(theme.palette.primary.main, 0.7)
			} 22.16%, ${
				theme.direction === 'ltr' ? hexToRGBA(theme.palette.primary.main, 0.7) : theme.palette.primary.main
			} 76.47%)`,
			'&.Mui-focusVisible': {
				background: `linear-gradient(72.47deg, ${theme.palette.primary.dark} 22.16%, ${hexToRGBA(
					theme.palette.primary.dark,
					0.7,
				)} 76.47%)`,
			},
		},
		'& .MuiTypography-root, & svg': {
			color: `${theme.palette.common.white} !important`,
		},
	},
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>(({ theme }) => ({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(2),
	justifyContent: 'space-between',
	transition: 'opacity .25s ease-in-out',
	...(themeConfig.menuTextTruncate && { overflow: 'hidden' }),
}));

const NavLink = ({
	item,
	parent,
	settings,
	navVisible,
	isSubToSub,
	collapsedNavWidth,
	toggleNavVisibility,
	navigationBorderWidth,
}: Props) => {
	const { t } = useTranslation();
	const location = useLocation();
	const [dropCollectionDialogOpen, setDropCollectionDialogOpen] = useState(false);

	const { navCollapsed } = settings;

	// const icon = parent && !item.icon ? themeConfig.navSubItemIcon : item.icon;

	const isNavLinkActive = () => location.pathname === item.path;

	const toggleDropCollectionDialog = () => setDropCollectionDialogOpen(!dropCollectionDialogOpen);

	return (
		<>
			<ListItem disablePadding className="nav-link" sx={{ mt: 0, px: '0 !important' }}>
				<MenuNavLink
					component={Link}
					disabled={item.disabled || false}
					{...(item.disabled && { tabIndex: -1 })}
					className={isNavLinkActive() ? 'active' : ''}
					to={item.path === undefined ? '/' : `${item.path}`}
					{...(item.openInNewTab ? { target: '_blank' } : null)}
					sx={{
						py: 2,
						borderRadius: 0.67,
						...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
						px: navCollapsed ? (collapsedNavWidth - navigationBorderWidth - 22 - 28) / 8 : 4,
						'& .MuiTypography-root, & svg': {
							color: 'text.secondary',
						},
						pl: '70px',
						pr: 2,
						m: 0,
					}}
					onClick={(e) => {
						if (item.path === undefined) {
							e.preventDefault();
							e.stopPropagation();
						}
						if (navVisible) {
							toggleNavVisibility();
						}
					}}
				>
					<ListItemIcon
						sx={{
							transition: 'margin .25s ease-in-out',
							...(navCollapsed ? { mr: 0 } : { mr: 2 }),
							...(parent ? { ml: 0, mr: 1.5 } : {}),
							'& svg': {
								fontSize: '0.625rem',
								...(!parent ? { fontSize: '1.375rem' } : {}),
								...(parent && item.icon ? { fontSize: '0.875rem' } : {}),
							},
						}}
					>
						{/* <Icon icon={icon as string} /> */}
						<FolderIcon />
					</ListItemIcon>

					<MenuItemTextMetaWrapper
						sx={{
							...(isSubToSub ? { ml: 2 } : {}),
							...(navCollapsed ? { opacity: 0 } : { opacity: 1 }),
						}}
					>
						<Typography
							{...((themeConfig.menuTextTruncate || (!themeConfig.menuTextTruncate && navCollapsed)) && {
								noWrap: true,
							})}
							sx={{
								fontSize: 16,
								fontWeight: 500,
								color: 'rgba(0, 0, 0, 0.87)!important',
							}}
						>
							{t(`navigation:${item.title}`)}
						</Typography>
						{item.badgeContent ? (
							<Chip
								size="small"
								label={item.badgeContent}
								color={item.badgeColor || 'primary'}
								sx={{
									height: 22,
									minWidth: 22,
									'& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' },
								}}
							/>
						) : null}
					</MenuItemTextMetaWrapper>
					<Box className="hover-icons" sx={{ display: 'none', alignItems: 'center' }}>
						<IconButton
							sx={{ p: 0 }}
							onClick={(e) => {
								e.stopPropagation();
								e.preventDefault();
								toggleDropCollectionDialog();
							}}
							onMouseDown={(e) => e.stopPropagation()}
						>
							<TrashIcon />
						</IconButton>
					</Box>
				</MenuNavLink>
			</ListItem>
			<Modal
				open={dropCollectionDialogOpen}
				title={t('dropCollection')}
				icon={<AlertIcon />}
				onClose={toggleDropCollectionDialog}
			>
				<DeleteForm handleDialogToggle={toggleDropCollectionDialog} />
			</Modal>
		</>
	);
};

export default NavLink;
