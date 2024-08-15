import { ButtonHTMLAttributes } from "react";
import { clNames } from "shared/lib/classNames/classNames";
import styles from "./Button.module.scss";

export const enum ThemeButton {
	CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
	const { className, children, theme, ...otherProps } = props;

	return (
		<button
			className={clNames(styles.Button, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
