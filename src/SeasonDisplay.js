import React from 'react';

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const displayText = season === 'winter' ? "It's Winter ❄" : "It's Summer 😎";

	return (
		<div>
			<h1>{displayText}</h1>
		</div>
	);
};

export default SeasonDisplay;
