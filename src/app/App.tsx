import "./styles/index.scss";
import { clNames } from "shared/lib/classNames/classNames";
import { useTheme } from './providers/ThemeProvider';
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { MainPage } from 'pages/MainPage';
import { Aboutpage } from 'pages/AboutPage';
import { AppRouter } from './providers/router'

const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={clNames("app", {}, [theme])}>
			<button onClick={toggleTheme}>theme</button>
			<Link to={"/"}>Главная</Link>
			<Link to={"/about"}>О сайте</Link>
			<AppRouter/>
		</div>
	);
};

export default App;
