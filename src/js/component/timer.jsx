import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Counter() {
	const [contador1, setContador1] = useState(0);
	const [contador2, setContador2] = useState(0);
	const [contador3, setContador3] = useState(0);

	useEffect(() => {
		let cnt = 0;
		setInterval(() => {
			setContador3(Math.floor(cnt / 3600));
			setContador2(Math.floor(cnt / 60));
			setContador1(Math.floor(cnt / 1));

			cnt++;
		}, 10);
	}, []);

	return (
		<div className="crono">
			<div className="primero"> </div>
			<div className="segundo"></div>
			<div className="tercero"></div>
			<div className="cuarto">{contador3 % 24}</div>
			<div className="quinto">{contador2 % 60}</div>
			<div className="sexto">{contador1 % 60}</div>
		</div>
	);
}
