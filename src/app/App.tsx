import "./styles/index.scss";
import { clNames } from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage } from 'pages/MainPage';
import { Aboutpage } from 'pages/AboutPage';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={clNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/"} element={<MainPage />} />
					<Route path={"/about"} element={<Aboutpage />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
