/** @format */

import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function Show({ data }) {
	console.log(data);
	return (
		<div>
			{data.map((val, idx) => {
				console.log(val);
				return (
					<div key={idx}>
						<h2>ques:{val.question}</h2>
						<h4>
							{val.option1.length > 0 && (
								<FormControlLabel
									control={<Checkbox name="heckedG" />}
									label={val.option1}
								/>
							)}
						</h4>
						<h4 style={{ marginLeft: '0px' }}>
							{val.option2.length > 0 && (
								<FormControlLabel
									control={<Checkbox name="heckedG" />}
									label={val.option2}
								/>
							)}
						</h4>
						<h4 style={{ marginLeft: '0px' }}>
							{val.option3.length > 0 && (
								<FormControlLabel
									control={<Checkbox name="heckedG" />}
									label={val.option3}
								/>
							)}
						</h4>
						<h4 style={{ marginLeft: '0px' }}>
							{val.option4.length > 0 && (
								<FormControlLabel
									control={<Checkbox name="heckedG" />}
									label={val.option4}
								/>
							)}
						</h4>
					</div>
				);
			})}
			<Button style={{ background: 'red' }}> Confirm </Button>
		</div>
	);
}

export default Show;
