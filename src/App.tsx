import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { Suspense, useContext } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext'


const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = () => {
		setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
	};

    return (
        <div className={` app ${theme}`}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;