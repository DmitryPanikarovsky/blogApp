import { clNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
	className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
    <div className={clNames('lds-ellipsis', {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
