import styles from '<FTName>.modules.scss';

interface <FTName>Props {
	className?: string;
}

export const <FTName> = () => {
	return (
		<div className={clNames(styles.<FTName>, {}, [className])}>
			
		</div>
	);
};
