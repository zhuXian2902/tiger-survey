/** @format */

import React, { useState, useEffect } from 'react';
import Header from './Header';

function Landing({ setValue }) {
	return (
		<div>
			<Header />
			<button
				style={{
					color: 'white',
					backgroundColor: 'purple',
					size: 'large',
					height: '60px',
					width: '100px',
					margin: '10px',
				}}
				onClick={() => setValue(1)}
			>
				create survey
			</button>
			<br />
			<button
				style={{
					color: 'white',
					backgroundColor: 'purple',
					size: 'large',
					height: '60px',
					width: '100px',
					margin: '10px',
				}}
				onClick={() => setValue(2)}
			>
				take survey
			</button>
		</div>
	);
}

export default Landing;
