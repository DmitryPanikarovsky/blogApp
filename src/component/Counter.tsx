import { useState } from "react";
import styles from './Counter.module.scss';

export const Counter = () => {
	const [count, setCount] = useState<number>(0);

	const Increment = () => {
		setCount(count + 1);
	};

	const Decrement = () => {
		setCount(count - 1);
	};

	return (
		<>
			<div>{count}</div>
			<button className={styles.button} onClick={Increment}>
				Increment
			</button>
			<button className={styles.button} onClick={Decrement}>
				Decrement
			</button>
		</>
	);
};
