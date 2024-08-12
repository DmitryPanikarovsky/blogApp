import styles from './<FTName>.module.scss';

interface <FTName>Props {
	className?: string;
}

export const <FTName> = () => {
	return (
		<div className={clNames(styles.<FTName>, {}, [className])}>
			
		</div>
	);
};
