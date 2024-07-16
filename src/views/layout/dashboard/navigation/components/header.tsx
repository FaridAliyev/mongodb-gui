import { Link, LinkProps } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import HeaderLogo from 'assets/img/mongodb.svg';
import Icon from 'components/icon';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

import { LayoutProps } from '../../types';

interface Props {
	collapsedNavWidth: number;
	hidden: LayoutProps['hidden'];
	navigationBorderWidth: number;
	toggleNavVisibility: () => void;
	settings: LayoutProps['settings'];
	saveSettings: LayoutProps['saveSettings'];
	navMenuBranding?: LayoutProps['verticalLayoutProps']['navMenu']['branding'];
	menuLockedIcon?: LayoutProps['verticalLayoutProps']['navMenu']['lockedIcon'];
	menuUnlockedIcon?: LayoutProps['verticalLayoutProps']['navMenu']['unlockedIcon'];
}

const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	transition: 'padding .25s ease-in-out',
	minHeight: theme.mixins.toolbar.minHeight,
}));

const LinkStyled = styled(Link)<LinkProps | RouterLinkProps>({
	display: 'flex',
	alignItems: 'center',
	textDecoration: 'none',
});

const NavHeader = (props: Props) => {
	const { hidden, toggleNavVisibility, navMenuBranding: userNavMenuBranding } = props;

	// const menuCollapsedStyles = navCollapsed ? { opacity: 0 } : { opacity: 1 };

	return (
		<MenuHeaderWrapper className="nav-header">
			{userNavMenuBranding ? (
				userNavMenuBranding(props)
			) : (
				<LinkStyled to="/" component={RouterLink}>
					<img src={HeaderLogo} alt="Header Logo" />
				</LinkStyled>
			)}
			{hidden && (
				<IconButton
					disableRipple
					disableFocusRipple
					sx={{
						p: 0,
						color: 'customColors.lightPaperBg',
						backgroundColor: 'transparent !important',
						position: 'absolute',
						right: 20,
						top: 20,
					}}
					onClick={toggleNavVisibility}
				>
					<Icon icon="tabler:x" fontSize="1.25rem" />
				</IconButton>
			)}
		</MenuHeaderWrapper>
	);
};

export default NavHeader;
