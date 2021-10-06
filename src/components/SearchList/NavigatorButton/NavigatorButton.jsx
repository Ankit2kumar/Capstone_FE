import React from 'react';
import './NavigatorButton.css';
import { Button } from 'react-bootstrap';

function NavigatorButton(props) {
	return (
		<>
			<Button className="py-4 navigator_buttons" variant="outline-dark">
				<div className="nav_btn">
					<div className="nav_btn_abt"> {props.text}</div>
					<div>{props.icon}</div>
				</div>
			</Button>
		</>
	);
}

export default NavigatorButton;
