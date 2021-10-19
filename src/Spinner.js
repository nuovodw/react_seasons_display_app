import React from 'react';

function Spinner(props) {
	return (
		<div>
			<div class="ui active dimmer">
				<div class="ui text loader">{props.message}</div>
			</div>
		</div>
	);
}

Spinner.defaultProps = {
	message: 'loading...',
};
export default Spinner;
