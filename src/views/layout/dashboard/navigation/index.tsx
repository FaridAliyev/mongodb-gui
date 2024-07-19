import { IconButton, InputAdornment, Typography } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import List from '@mui/material/List';
import { createTheme, responsiveFontSizes, styled, ThemeProvider } from '@mui/material/styles';
import DatabaseIconLg from 'assets/icons/coins-lg.svg?react';
import DatabaseIcon from 'assets/icons/database.svg?react';
import LaptopIcon from 'assets/icons/laptop.svg?react';
import PlusIcon from 'assets/icons/plus.svg?react';
import RefreshIcon from 'assets/icons/refresh.svg?react';
import SearchIcon from 'assets/icons/search.svg?react';
import { CreateDatabaseForm } from 'components/create-database-form';
import { Modal } from 'components/modal';
import { CustomTextField } from 'components/mui/text-field';
import themeConfig from 'configs/theme/themeConfig';
import themeOptions from 'configs/theme/ThemeOptions';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { hexToRGBA } from 'utils/hex-to-rgba';

import { LayoutProps } from '../types';
import Drawer from './components/drawer';
import NavHeader from './components/header';
import VerticalNavItems from './components/nav-items';

interface Props {
	navWidth: number;
	navVisible: boolean;
	collapsedNavWidth: number;
	hidden: LayoutProps['hidden'];
	navigationBorderWidth: number;
	toggleNavVisibility: () => void;
	settings: LayoutProps['settings'];
	setNavVisible: (value: boolean) => void;
	saveSettings: LayoutProps['saveSettings'];
	navMenuContent: LayoutProps['verticalLayoutProps']['navMenu']['content'];
	navMenuBranding: LayoutProps['verticalLayoutProps']['navMenu']['branding'];
	menuLockedIcon: LayoutProps['verticalLayoutProps']['navMenu']['lockedIcon'];
	verticalNavItems: LayoutProps['verticalLayoutProps']['navMenu']['navItems'];
	navMenuProps: LayoutProps['verticalLayoutProps']['navMenu']['componentProps'];
	menuUnlockedIcon: LayoutProps['verticalLayoutProps']['navMenu']['unlockedIcon'];
	afterNavMenuContent: LayoutProps['verticalLayoutProps']['navMenu']['afterContent'];
	beforeNavMenuContent: LayoutProps['verticalLayoutProps']['navMenu']['beforeContent'];
}

const StyledBoxForShadow = styled(Box)<BoxProps>(({ theme }) => ({
	top: 60,
	left: -8,
	zIndex: 2,
	opacity: 0,
	position: 'absolute',
	pointerEvents: 'none',
	width: 'calc(100% + 15px)',
	height: theme.mixins.toolbar.minHeight,
	transition: 'opacity .15s ease-in-out',
	background: `linear-gradient(${theme.palette.background.paper} ${
		theme.direction === 'rtl' ? '95%' : '5%'
	},${hexToRGBA(theme.palette.background.paper, 0.85)} 30%,${hexToRGBA(
		theme.palette.background.paper,
		0.5,
	)} 65%,${hexToRGBA(theme.palette.background.paper, 0.3)} 75%,transparent)`,
	'&.scrolled': {
		opacity: 1,
	},
}));

const Navigation = (props: Props) => {
	const {
		settings,
		afterNavMenuContent,
		beforeNavMenuContent,
		navigationBorderWidth,
		navMenuContent: userNavMenuContent,
	} = props;

	const { t } = useTranslation();

	const [groupActive, setGroupActive] = useState<string[]>([]);
	const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);
	const [createDbDialogOpen, setCreateDbDialogOpen] = useState(false);

	const toggleCreateDbDialog = () => setCreateDbDialogOpen(!createDbDialogOpen);

	const shadowRef = useRef(null);

	const { afterVerticalNavMenuContentPosition, beforeVerticalNavMenuContentPosition } = themeConfig;

	const navMenuContentProps = {
		...props,
		groupActive,
		setGroupActive,
		currentActiveGroup,
		setCurrentActiveGroup,
	};

	let darkTheme = createTheme(themeOptions(settings, 'dark'));

	if (themeConfig.responsiveFontSizes) {
		darkTheme = responsiveFontSizes(darkTheme);
	}

	return (
		<ThemeProvider theme={darkTheme}>
			<Drawer {...props} navigationBorderWidth={navigationBorderWidth}>
				<NavHeader {...props} />
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: (theme) => theme.spacing(2.5),
						backgroundColor: (theme) => theme.palette.customColors.lightPaperBg,
						padding: (theme) => theme.spacing(0, 5),
						margin: (theme) => theme.spacing(10, 0),
						borderRadius: (theme) => theme.spacing(1),
						border: (theme) => `1px solid ${theme.palette.text.secondary}`,
						'& svg path': {
							stroke: 'text.secondary',
						},
					}}
				>
					<LaptopIcon />
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: 500, lineHeight: '47px', color: 'text.secondary' }}
					>
						localhost:27017
					</Typography>
				</Box>
				{beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'fixed'
					? beforeNavMenuContent(navMenuContentProps)
					: null}
				{(beforeVerticalNavMenuContentPosition === 'static' || !beforeNavMenuContent) && (
					<StyledBoxForShadow ref={shadowRef} />
				)}
				<Box sx={{ position: 'relative', overflow: 'hidden' }}>
					<Box>
						{beforeNavMenuContent && beforeVerticalNavMenuContentPosition === 'static'
							? beforeNavMenuContent(navMenuContentProps)
							: null}
						{userNavMenuContent ? (
							userNavMenuContent(navMenuContentProps)
						) : (
							<>
								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'space-between',
									}}
								>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: (theme) => theme.spacing(2),
										}}
									>
										<DatabaseIcon />
										<Typography
											variant="h5"
											sx={{ fontSize: 20, color: 'text.secondary', fontWeight: 700 }}
										>
											{t('databases')}
										</Typography>
									</Box>
									<Box
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: (theme) => theme.spacing(2.5),
										}}
									>
										<IconButton sx={{ p: 0 }}>
											<RefreshIcon />
										</IconButton>
										<IconButton sx={{ p: 0 }} onClick={toggleCreateDbDialog}>
											<PlusIcon />
										</IconButton>
										<Modal
											open={createDbDialogOpen}
											title={t('createDatabase')}
											icon={<DatabaseIconLg />}
											onClose={toggleCreateDbDialog}
										>
											<CreateDatabaseForm handleDialogToggle={toggleCreateDbDialog} />
										</Modal>
									</Box>
								</Box>
								<Box
									sx={{
										margin: (theme) => theme.spacing(7.5, 0),
										'& .MuiFormControl-root': {
											margin: 0,
										},
									}}
								>
									<CustomTextField
										sx={{ mr: 4, mb: 2 }}
										placeholder={t('search')}
										size="medium"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<SearchIcon />
												</InputAdornment>
											),
										}}
									/>
								</Box>
								<List className="nav-items" sx={{ pt: 0, '& > :first-of-type': { mt: '0' } }}>
									<VerticalNavItems
										groupActive={groupActive}
										setGroupActive={setGroupActive}
										currentActiveGroup={currentActiveGroup}
										setCurrentActiveGroup={setCurrentActiveGroup}
										{...props}
									/>
								</List>
							</>
						)}
						{afterNavMenuContent && afterVerticalNavMenuContentPosition === 'static'
							? afterNavMenuContent(navMenuContentProps)
							: null}
					</Box>
				</Box>
				{afterNavMenuContent && afterVerticalNavMenuContentPosition === 'fixed'
					? afterNavMenuContent(navMenuContentProps)
					: null}
			</Drawer>
		</ThemeProvider>
	);
};

export default Navigation;
