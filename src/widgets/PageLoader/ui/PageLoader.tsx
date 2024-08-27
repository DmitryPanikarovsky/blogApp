import { clNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={clNames(styles.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
