import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
	// how do we link to anohter page?
	const navigate = useNavigate();

	return (
		<div>
			<h1>Landing Page</h1>
			<button onClick={() => navigate('/shop')}>Shop</button>
		</div>
	);
};
