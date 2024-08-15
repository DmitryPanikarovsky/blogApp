import styles from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { clNames } from "shared/lib/classNames/classNames";

export const enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={clNames(styles.AppLink, {}, [className, styles[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};
