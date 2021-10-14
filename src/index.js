import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null }; // value of lat hasn't been defined yet
	}
	// render() must be defined
	render() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => console.log(position), //success callback
			(err) => console.log(err),
		);
		return <div>Latitude: </div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
