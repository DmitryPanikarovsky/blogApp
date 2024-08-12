import "./styles/index.scss";
import { clNames } from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={clNames("app", {}, [theme])}>
			
			<Navbar/>
			<button onClick={toggleTheme}>theme</button>
			<AppRouter/>
		</div>
	);
};

export default App;
