import React, { Component, PropTypes } from 'react';
import PeriodicTable from "./PeriodicTable";
import '../breakingBad.css';

class FormattedName extends Component {
	findMatches = (name) => {
		let matches = [];
		PeriodicTable.forEach((elem, index) => {
			let symbol = elem.symbol;
			let atomicNum = elem.atomicNum;
			let elemName = elem.name;
			if (name.toLowerCase().includes(symbol.toLowerCase())) {
				matches.push({ symbol: symbol, atomicNum: atomicNum, elemName: elemName });
			}
		});

		if(!matches) {
			return name;
		}

		let onlySingleLettered = false;
		for (let i = 0; i < matches.length; i++) {
			if (matches[i].symbol.length > 1) {
				onlySingleLettered = false;
				return this.breakNames(name, matches[i]);
			} else {
				onlySingleLettered = true;
			}
		}

		if (onlySingleLettered) {
			return this.breakNames(name, matches[0]);
		}
	}

	breakNames = (name, match) => {
		let indexOfMatch = name.toLowerCase().indexOf(match.symbol.toLowerCase());
		let firstPart = name.substr(0, indexOfMatch);
		let lastPart = name.substr(indexOfMatch + match.symbol.length);
		let transform = `${firstPart}${match.symbol}${lastPart}`;
		return {
			transform,
			firstPart,
			lastPart,
			match: match.symbol,
			atomicNum: match.atomicNum,
			elemName: match.elemName
		}
	}

	render() {
		const styledName = this.findMatches(this.props.name);
		return (
			<div>
				<div className="breaking-bad">
					<div className="breaking-bad-body">
						<div className="name">
							{
								!styledName || !styledName.match ? 
									(
										<div className="left">{this.props.name}</div>
									) : (
										<div className={this.props.className}>
											<div className="left">{styledName.firstPart}</div>
											<div className={(styledName.match ? 'periodic-element' : '')} title={styledName.elemName}>
												{styledName.match}<span className="atomic-num">{styledName.atomicNum}</span>
											</div>
											<div className="left">{styledName.lastPart}</div>
										</div>
									)
							}							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

FormattedName.prototypes = {
	name: PropTypes.string.isRequired,
}

export default FormattedName;
