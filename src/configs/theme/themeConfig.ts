import { AppBar, ContentWidth, Footer, VerticalNavToggle } from 'views/layout/dashboard/types';

import { Mode, Skin } from './types';

type ThemeConfig = {
	skin: Skin;
	mode: Mode;
	appBar: AppBar;
	footer: Footer;
	navHidden: boolean;
	appBarBlur: boolean;
	templateName: string;
	navCollapsed: boolean;
	routingLoader: boolean;
	disableRipple: boolean;
	navigationSize: number;
	navSubItemIcon: string;
	menuTextTruncate: boolean;
	contentWidth: ContentWidth;
	disableCustomizer: boolean;
	responsiveFontSizes: boolean;
	collapsedNavigationSize: number;
	horizontalMenuAnimation: boolean;
	layout: 'vertical' | 'horizontal';
	verticalNavToggleType: VerticalNavToggle;
	afterVerticalNavMenuContentPosition: 'fixed' | 'static';
	beforeVerticalNavMenuContentPosition: 'fixed' | 'static';
	toastPosition: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
};

const themeConfig: ThemeConfig = {
	// ** Layout Configs
	templateName: import.meta.env.VITE_PROJECT_NAME /* App Name */,
	layout: 'vertical' /* vertical | horizontal */,
	mode: 'light' as Mode /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
	skin: 'default' /* default | bordered */,
	contentWidth: 'boxed' /* full | boxed */,
	footer: 'static' /* fixed | static | hidden */,

	// ** Routing Configs
	routingLoader: true /* true | false */,

	// ** Navigation (Menu) Configs
	navHidden: false /* true | false */,
	menuTextTruncate: true /* true | false */,
	navSubItemIcon: 'tabler:circle' /* Icon */,
	verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,
	navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
	navigationSize: 300 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
	collapsedNavigationSize: 82 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
	afterVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
	beforeVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
	horizontalMenuAnimation: true /* true | false */,

	// ** AppBar Configs
	appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
	appBarBlur: true /* true | false */,

	// ** Other Configs
	responsiveFontSizes: false /* true | false */,
	disableRipple: false /* true | false */,
	disableCustomizer: true /* true | false */,
	toastPosition: 'top-right' /* top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */,
};

export default themeConfig;
