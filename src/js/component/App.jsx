import React from "react";
import {useState, useEffect} from "react";
import SimpleCounter from "./SimpleCounter";


const App = () => {

	const [counter, setCounter] = useState (0);

	useEffect(() => {
		const interval = setInterval {() => {
			setCounter(counter => counter + 1)
		}, 1000)
		console.log(counter)
		return () => clearInterval(interval)
	}, [counter])
		
	return (
		<>
		<SimpleCounter />
		</>
	);
};

export default App;
