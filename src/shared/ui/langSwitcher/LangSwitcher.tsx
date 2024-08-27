import { clNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';
import { Button, ThemeButton } from '../Button/Button';

interface langSwitcherProps {
	className?: string;
}

export const LangSwitcher = ({ className }: langSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={clNames(styles.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    );
};
