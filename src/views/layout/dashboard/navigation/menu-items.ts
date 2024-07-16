import { VerticalNavItemsType } from '../types';

const menuItems = (): VerticalNavItemsType => {
	return [
		{
			title: 'admin',
			icon: 'tabler:smart-home',
			children: [
				{
					title: 'config1',
					path: '/dashboard',
				},
			],
		},
		{
			title: 'roles',
			icon: 'tabler:settings',
			path: '/roles',
			children: [],
		},
	];
};

export default menuItems;
