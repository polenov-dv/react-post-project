import { useState } from 'react';
import { AppRouter } from 'components/AppRouter';
import "./styles/index.scss"
import { AuthorizationContext, LOCAL_STORAGE_AUTORIZATION_KEY } from 'context/AuthorizationContext';

const App = () => {

	const defaultUser = localStorage.getItem(LOCAL_STORAGE_AUTORIZATION_KEY) || '';
	const [user, setUser] = useState(defaultUser);

	return (
		<div className='app'>
			<AuthorizationContext.Provider value={{
				user,
				setUser
			}}>
				<AppRouter />
			</AuthorizationContext.Provider>
		</div>
	);
};

export default App;