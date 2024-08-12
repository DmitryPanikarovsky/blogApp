import { Link } from 'react-router-dom';
import { clNames } from 'shared/lib/classNames/classNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
		<div className={clNames(styles.Navbar, {}, [className])}>
			<div className={styles.links}>
				<Link className={styles.link} to={"/"}>
					Главная
				</Link>
				<Link className={styles.link} to={"/about"}>
					О сайте
				</Link>
			</div>
		</div>
	);
};