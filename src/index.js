import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null }; // value of lat hasn't been defined yet

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
			}, //success callback
			(err) => console.log(err),
		);
	}
	// render() must be defined
	render() {
		return <div>Latitude: {this.state.lat} </div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
