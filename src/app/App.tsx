import "./styles/index.scss";
import { MainPageLazy } from "pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "pages/AboutPage/AboutPage.lazy";
import { clNames } from "helpers/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={clNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={"/"} element={<MainPageLazy />} />
					<Route path={"/about"} element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;
