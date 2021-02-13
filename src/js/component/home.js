//import React from "react";

//include images into your bundle

//create your first component

/*export function Counter(props) {
    return (
        <div className="crono">
            <div className="primero">{props.one}</div>
            <div className="tercero">{props.two}</div>
            <div className="cuarto">{props.three}</div>
            <div className="quinto">{props.four}</div>
            <div className="sexto">{props.five}</div>
            <div className="segundo">{props.one}</div>
        </div>
    );
}*/

import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export const Alert = props => {
	return (
		<div className="alert alert-danger" role="alert">
			{props.text}
		</div>
	);
};
