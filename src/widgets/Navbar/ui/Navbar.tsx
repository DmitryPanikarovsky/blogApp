import { clNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={clNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">Главная</AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">О сайте</AppLink>
            </div>
    </div>
);
