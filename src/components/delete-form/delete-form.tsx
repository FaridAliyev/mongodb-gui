import { Box, Button, Grid, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';

interface Props {
	handleDialogToggle: () => void;
}

interface FormData {
	collectionName: string;
}

export const DeleteForm = ({ handleDialogToggle }: Props) => {
	const { t } = useTranslation();

	const handleSubmit = (formData: FormData, { setSubmitting }: FormikHelpers<FormData>) => {
		console.log(formData);
		setSubmitting(false);
	};

	const initialValues: FormData = {
		collectionName: '',
	};

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			{() => {
				return (
					<Form>
						<Box
							sx={{
								width: '100%',
								display: 'flex',
								alignItems: 'flex-end',
								flexDirection: 'column',
							}}
						>
							<Grid container rowSpacing={6}>
								<Grid item xs={12}>
									<Typography variant="body2" sx={{ color: '#323232' }}>
										Are you sure you want to drop the database “config1”?
									</Typography>
								</Grid>
							</Grid>
							<Box className="demo-space-x" sx={{ '& > :last-child': { mr: '0 !important' } }}>
								<Button
									type="reset"
									size="large"
									variant="outlined"
									color="secondary"
									sx={{
										width: 138,
									}}
									onClick={handleDialogToggle}
								>
									{t('cancel')}
								</Button>
								<Button type="submit" size="large" variant="contained" sx={{ height: 50, width: 138 }}>
									{t('drop')}
								</Button>
							</Box>
						</Box>
					</Form>
				);
			}}
		</Formik>
	);
};
