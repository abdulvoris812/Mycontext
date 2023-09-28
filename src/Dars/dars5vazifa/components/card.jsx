/** @format */

import React from "react";

const Card = ({ data }) => {
	return (
		<React.Fragment>
			<div className='container'>
				<div className='card'>
					<img src={data.img1} className='img1' />
					<img src={data.img2} className='img2' />
					<h1 className='title'>{data.title}</h1>
					<p className='text'>{data.text}</p>
					<div className='icons'>
						<a href='#'>
							<img src={data.icon1} className='in' />
						</a>
						<a href='#'>
							<img src={data.icon2} className='tw' />
						</a>
						<a href='#'>
							<img src={data.icon3} className='fc' />
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Card;
