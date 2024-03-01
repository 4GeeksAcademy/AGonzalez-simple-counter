import React from "react";
import {useState, useEffect} from "react";
import SimpleCounter from "./SimpleCounter";


const App = () => {

	const [counter, setCounter] = useState (0);

	useEffect(() => {
		const interval = setInterval (() => {
			setCounter(counter => counter + 1)
		}, 1000)
		console.log(counter)
		return () => clearInterval(interval)
	}, [counter])

	const calculateSeconds = (aCounter, placeValue) => {
		return Math.floor(aCounter / placeValue) % 10
	}
		
	return (
		<>
		<SimpleCounter 
			millionsDigit = {calculateSeconds(counter,1000000)}
			hundredthousandsDigit = {calculateSeconds(counter,10000)}
			thousandsDigit = {calculateSeconds(counter,1000)}
			hundredsDigit = {calculateSeconds(counter,100)}
			tensDigit = {calculateSeconds(counter,10)}
			oneDigit = {calculateSeconds(counter,1)}
		/>
		</>
	);
};

export default App;

