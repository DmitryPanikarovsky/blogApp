import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/light.svg';
import DarkIcon from 'shared/assets/icons/dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={styles['theme-switch']}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
