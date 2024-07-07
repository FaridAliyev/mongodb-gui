import { Grid } from '@mui/material';

import { Table } from './components/table';

export const Roles = () => {
	return (
		<Grid container spacing={6}>
			<Grid item xs={12}></Grid>
			<Grid item xs={12}>
				<Table />
			</Grid>
		</Grid>
	);
};
