/** @format */

import React from "react";
import "./style/style.css";
import { useState } from "react";

const Dars6 = () => {
	const [card, setCard] = useState(true);
	const handleCard = () => {
		setCard(!card);
	};
	return (
		<React.Fragment>
			<header>
				<div className='container'>
					<div className='header-inner'>
						<a className='logo' href='../../../index.html'>
							<span>Lo</span>Go
						</a>
						<ul className='nav-list'>
							<li className='nav-item'>
								<a href='#'>Home</a>
							</li>
							<li className='nav-item'>
								<a href='#'>About</a>
							</li>
							<li className='nav-item'>
								<a href='#'>Contact</a>
							</li>
							<li className='nav-item'>
								<a href='#'>Price</a>
							</li>
						</ul>
						<button
							className={card ? "burger" : "burger btn_close"}
							onClick={handleCard}
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</header>
			<div className='container'>
				<ul className={card ? "navaction navaction2" : "navaction"}>
					<li className='nav-item2'>
						<a href='#'>Home</a>
					</li>
					<li className='nav-item2'>
						<a href='#'>About</a>
					</li>
					<li className='nav-item2'>
						<a href='#'>Contact</a>
					</li>
					<li className='nav-item2'>
						<a href='#'>Price</a>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};

export default Dars6;
