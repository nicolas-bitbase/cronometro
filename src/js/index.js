//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Alert } from "./component/home.js";

//render your react application
function Counter(props) {
	return (
		<div className="crono">
			<div className="primero">{props.one} </div>
			<div className="slash1">/</div>
			<div className="segundo">{props.two % 12}</div>
			<div className="slash2">/</div>
			<div className="tercero">{props.three % 30}</div>
			<div className="cuarto">{`${props.four % 24}:`}</div>
			<div className="quinto">{props.five % 60}</div>
			<div className="sexto">{props.six % 60}</div>
		</div>
	);
}

Counter.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number,
	five: PropTypes.number,
	six: PropTypes.number
};

const Alert = props => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>
	);
};

Alert.propTypes = {
	text: PropTypes.string
};

let segundos = 0;

setInterval(function() {
	const numero1 = Math.floor(segundos / 9999999);
	const two = Math.floor(segundos / 2592000);
	const three = Math.floor(segundos / 86400);
	const four = Math.floor(segundos / 3600);
	const five = Math.floor(segundos / 60);
	const six = Math.floor(segundos / 1);
	segundos++;

	if (segundos == 10) {
		ReactDOM.render(
			<Alert text="OMG 60 seconds Already!" />,
			document.querySelector("#app")
		);
	}

	ReactDOM.render(
		<Counter
			one={numero1}
			two={two}
			three={three}
			four={four}
			five={five}
			six={six}
		/>,

		document.querySelector("#app")
	);
}, 1000);
