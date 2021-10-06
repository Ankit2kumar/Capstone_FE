import React from 'react';
import './Title.css';

function Title(props) {
	return (
		<>
			<div className="title ">
				<div id="header">Explore</div> <div>{props.country}</div>
			</div>
		</>
	);
}

export default Title;
