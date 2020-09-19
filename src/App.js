/** @format */

import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import CreateServey from './components/CreateSurvey';
import TakeServey from './components/TakeSurvey';

function App() {
	const [value, setValue] = useState(0);
	return (
		<div className="App">
			{value === 0 && <Landing setValue={setValue} />}
			{value === 1 && <CreateServey />}
			{value === 2 && <TakeServey />}
		</div>
	);
}

export default App;
