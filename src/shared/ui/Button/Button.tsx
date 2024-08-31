import { clNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = (props: ButtonProps) => {
    const {
        className, 
        children, 
        theme, 
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={clNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
