import React from 'react';
import './CardNavigation.css';
import { GiTigerHead } from 'react-icons/gi';
import { IconContext } from 'react-icons';

function CardNavigation() {
	return (
		<>
			<div className="cardWrapper">
				<div className="card-heading">
					<div className="heading-left">
						<span className="heading-text">Wildlife</span>
						<span>70+ Packages</span>
					</div>
					<div className="heading-right">
						<IconContext.Provider
							value={{
								color: 'grey',
								size: '2.5em',
							}}
						>
							<GiTigerHead />
						</IconContext.Provider>
					</div>
				</div>
				<div className="imgWrapper">
					<img
						className="card-img"
						src="/Home-Right-Images/india-holiday-wildlife.webp"
						alt=""
					/>
				</div>
			</div>
		</>
	);
}

export default CardNavigation;
