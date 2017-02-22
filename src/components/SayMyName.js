import React, { Component, PropTypes } from 'react';
import FormattedName from './FormattedName';
import '../breakingBad.css';

class SayMyName extends Component {
	render() {
		return (
			<div>
				<FormattedName name={this.props.firstname} />
				<FormattedName name={this.props.lastname} className="last-name-indent"/>
			</div>
		);
	}
}

SayMyName.prototypes = {
	firstname: PropTypes.string.isRequired,
	lastname: PropTypes.string.isRequired,
}

export default SayMyName;
