import React from 'react';

import styled from 'styled-components';

import { Grid, Row, Col } from 'react-flexbox-grid';

import forEach from 'lodash/forEach'

const FrameDiv = styled.div`
	margin-top: 100px;
	background-color: papayawhip;
	border-width:5px;
	border-style:solid;
	border-color:palevioletred;

	> h2 {
		font-family: 'Josefin Sans', sans-serif;
	}

	> h3 {
		font-family: 'Hind', sans-serif;
	}
`

class ScoresDisplay extends React.Component {
	constructor() {
		super();
		// this.state = {
		//	returnedScores: {
				// "Frame1": [2,3],
				// "Frame2": [9,1],
				// "Frame3": [1,9],
				// "Frame4": [5,5],
				// "Frame5": [10,0],
				// "Frame6": [10,0],
				// "Frame7": [1,0],
				// "Frame8": [0,0],
				// "Frame9": [3,2],
				// "Frame10": [10,0], 
				// "Frame11": [5,3], 
				// "Frame12": [7,1]
			// }
		//}
	}

	render() {
		return (
		<Grid fluid>
			<Row>
			{Object.keys(this.props.returnedScores).map((obj, i) => (
	           <Col xs={12} sm={3} md={2} lg={1}>
	            <FrameDiv>
	            	<h2>{`Frame #${i+1}`} </h2>
	            	<h3>{`Score: ${this.props.returnedScores[obj][0]} / ${this.props.returnedScores[obj][1]}`}</h3>
	            </FrameDiv>
	           </Col>
			))}
	        </Row>
      	</Grid>
		);
	}
}

export default ScoresDisplay;