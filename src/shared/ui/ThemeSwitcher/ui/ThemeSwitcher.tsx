import { clNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider'

interface ThemeSwitcherProps {
	className?: string;
	children: string;
}

export const ThemeSwitcher = ({className, children}: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className={clNames(styles.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{children}
		</button>
	);
};
