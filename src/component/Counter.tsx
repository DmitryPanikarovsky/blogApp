import { useState } from "react";
import './Counter.scss';

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
			<button onClick={Increment}>Increment</button>
			<button onClick={Decrement}>Decrement</button>
		</>
	);
};
