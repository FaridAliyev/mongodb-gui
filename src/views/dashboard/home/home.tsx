import { useEffect } from 'react';

export const Home = () => {
	// test fetch
	useEffect(() => {
		fetch(import.meta.env.VITE_BACKEND_URL + '/databases')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	});

	return <div>Home</div>;
};
