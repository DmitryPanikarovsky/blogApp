import { ButtonHTMLAttributes } from 'react';

export const enum ThemeButton {
	CLEAR = "clear",
	OUTLINE = "outline",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	onClick?: () => void;
}
