import { Header } from "components/Header";
import { Footer } from 'components/Footer';
import { Outlet } from 'react-router-dom';

interface Props {
	searchPost: string;
	setSearchPost: (text: string) => void;
}

const MainLayout = ({ searchPost, setSearchPost }: Props) => {
	return (
		<>
			<Header
				searchPost={searchPost}
				setSearchPost={setSearchPost}
			/>
			<Outlet />
			<Footer />
		</>
	);
};

export default MainLayout;
