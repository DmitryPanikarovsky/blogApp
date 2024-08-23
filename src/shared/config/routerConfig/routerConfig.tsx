import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage';
import { Aboutpage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

export enum AppRouter {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RouterPath: Record<AppRouter, string> = {
    [AppRouter.MAIN]: '/',
    [AppRouter.ABOUT]: '/about',
    [AppRouter.NOT_FOUND]: '*',
}

export const routesConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>
    },
    [AppRouter.ABOUT]: {
        path: RouterPath.about,
        element: <Aboutpage/>
    },
    [AppRouter.NOT_FOUND]: {
        path: RouterPath.not_found,
        element: <NotFoundPage/>
    },
}