import { Link } from 'react-router-dom';
import { SiBitcoinsv } from 'react-icons/Si';

const Header = () => {
	return (
		<Link
			to='/'
			className='flex items-center justify-center gap-1 py-3 text-2xl font-semibold hover:text-indigo-500'
		>
			<SiBitcoinsv />
			Crypto Table
		</Link>
	);
};

export default Header;
