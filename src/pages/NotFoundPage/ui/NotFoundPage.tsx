import { clNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation()

	return (
		<div className={clNames(styles.NotFoundPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	);
};
