import { Aboutpage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'shared/config/routerConfig/routerConfig'

const AppRouter = () => {
    return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routesConfig).map(({path, element}) => (
                    <Route 
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;