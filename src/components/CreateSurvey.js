/** @format */

import React from 'react';
import Header from './Header';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Show from './Show';

function CreateSurvey() {
	const [value, setValue] = React.useState(0);
	const [show, setShow] = React.useState(false);
	const [count, setCount] = React.useState(0);
	const [data, setData] = React.useState([]);
	const [ques, setQues] = React.useState({
		question: '',
		option1: '',
		option2: '',
		option3: '',
		option4: '',
	});

	const handleChange = (e) => {
		setValue(+e.target.value);
		setCount(1);
	};

	const handlePublish = () => {
		setData([...data, ques]);
		setShow(true);
	};

	const handleForm = () => {
		setData([...data, ques]);
		setQues({
			question: '',
			option1: '',
			option2: '',
			option3: '',
			option4: '',
		});
		setCount(0);
	};

	const handleQues = (e) => {
		setQues({ ...ques, question: e.target.value });
	};

	const handleOption1 = (e) => {
		const op = e.target.value;
		setQues({ ...ques, option1: op });
	};

	const handleOption2 = (e) => {
		const op = e.target.value;
		setQues({ ...ques, option2: op });
	};

	const handleOption3 = (e) => {
		const op = e.target.value;
		setQues({ ...ques, option3: op });
	};

	const handleOption4 = (e) => {
		const op = e.target.value;
		setQues({ ...ques, option4: op });
	};

	const handleDelete1 = (e) => {
		setCount(count - 1);
		setQues({
			...ques,
			option1: ques.option2,
			option2: ques.option3,
			option3: ques.option4,
		});
	};
	const handleDelete2 = (e) => {
		setCount(count - 1);
		setQues({
			...ques,
			option2: ques.option3,
			option3: ques.option4,
			option4: '',
		});
	};

	const handleDelete3 = (e) => {
		setCount(count - 1);
		setQues({ ...ques, option3: ques.option4, option4: '' });
	};

	const handleDelete4 = (e) => {
		setCount(count - 1);
		setQues({ ...ques, option4: '' });
	};

	return (
		<div>
			<Header />
			{show && <Show data={data} />}
			{!show && (
				<div>
					<Select
						native
						style={{ margin: 20, width: '200px' }}
						value={value}
						onChange={(e) => handleChange(e)}
					>
						<option>Select Question Type</option>
						<option value={4}>Multi Select</option>
						<option value={2}>Single select</option>
					</Select>
					<br />
					{count > 0 && (
						<TextField
							onChange={(e) => handleQues(e)}
							value={ques.question}
							id="filled-full-width"
							label="Question"
							style={{ width: '800px' }}
							placeholder="type your question"
							margin="normal"
							variant="filled"
						/>
					)}
					<br />
					<div>
						{count >= 1 && (
							<div>
								<input
									onChange={(e) => handleOption1(e)}
									value={ques.option1}
									type="text"
									id="filled-full-width"
									label="Question"
									style={{ margin: '10px', width: '400px', height: '30px' }}
									placeholder="type your question"
									margin="normal"
									variant="filled"
								/>
								<ButtonGroup disableElevation variant="contained" color="primary">
									<Button disabled={count !== 1} onClick={() => setCount(count + 1)}>
										+
									</Button>
									<Button onClick={(e) => handleDelete1(e)}>-</Button>
								</ButtonGroup>
							</div>
						)}
						{count >= 2 && (
							<div>
								<input
									onChange={(e) => handleOption2(e)}
									value={ques.option2}
									type="text"
									id="filled-full-width"
									label="Question"
									style={{ margin: '10px', width: '400px', height: '30px' }}
									placeholder="type your question"
									margin="normal"
									variant="filled"
								/>
								<ButtonGroup disableElevation variant="contained" color="primary">
									<Button
										disabled={count !== 2 || count === value}
										onClick={() => setCount(count + 1)}
									>
										+
									</Button>
									<Button onClick={(e) => handleDelete2(e)}>-</Button>
								</ButtonGroup>
							</div>
						)}
						{count >= 3 && (
							<div>
								<input
									onChange={(e) => handleOption3(e)}
									value={ques.option3}
									type="text"
									id="filled-full-width"
									label="Question"
									style={{ margin: '10px', width: '400px', height: '30px' }}
									placeholder="type your question"
									margin="normal"
									variant="filled"
								/>
								<ButtonGroup disableElevation variant="contained" color="primary">
									<Button disabled={count !== 3} onClick={() => setCount(count + 1)}>
										+
									</Button>
									<Button onClick={(e) => handleDelete3(e)}>-</Button>
								</ButtonGroup>
							</div>
						)}
						{count >= 4 && (
							<div>
								<input
									onChange={(e) => handleOption4(e)}
									value={ques.option4}
									type="text"
									id="filled-full-width"
									label="Question"
									style={{ margin: '10px', width: '400px', height: '30px' }}
									placeholder="type your question"
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									variant="filled"
								/>
								<ButtonGroup disableElevation variant="contained" color="primary">
									<Button
										disabled={count !== 4 || count === value}
										onClick={() => setCount(count + 1)}
									>
										+
									</Button>
									<Button onClick={(e) => handleDelete4(e)}>-</Button>
								</ButtonGroup>
							</div>
						)}
					</div>
					{count > 0 && value === count && (
						<div>
							<Button onClick={handleForm} variant="outlined" color="primary">
								Add Question
							</Button>
							<Button onClick={handlePublish} variant="outlined" color="primary">
								Publish
							</Button>
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default CreateSurvey;
