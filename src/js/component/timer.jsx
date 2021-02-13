import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

export default function Counter() {
	const [contador, setContador] = useState(0);

	useEffect(() => {
		let cnt = 0;
		setInterval(() => {
			setContador(cnt++);
			console.log(cnt);
		}, 1000);
	}, []);

	return (
		<div className="crono">
			<div className="primero"> </div>
			<div className="segundo"></div>
			<div className="tercero"></div>
			<div className="cuarto"></div>
			<div className="quinto"></div>
			<div className="sexto">{contador}</div>
		</div>
	);
}
