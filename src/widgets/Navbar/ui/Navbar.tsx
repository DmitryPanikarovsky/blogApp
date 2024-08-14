import { clNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className }: NavbarProps) => {
	const {t} = useTranslation();

    return (
		<div className={clNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/"}>
					Главная
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
					О сайте
				</AppLink>
			</div>
		</div>
	);
};