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
		this.state = {
			returnedScores: {
				firstFrame: [2,3],
				secondFrame: [9,1],
				thirdFrame: [1,9],
				fourthFrame: [5,5],
				fifthFrame: [10,0],
				sixthFrame: [10,0],
				seventhFrame: [1,0],
				eigthFrame: [0,0],
				ninthFrame: [3,2],
				tenthFrame: [10,0], 
				eleventhFrame: [5,3], 
				twelfthFrame: [7,1]
			}
		}
	}

	render() {
		return (
		<Grid fluid>
			<Row>
			{Object.keys(this.state.returnedScores).map((obj, i) => (
	           <Col xs={12} sm={3} md={2} lg={1}>
	            <FrameDiv>
	            	<h2>{`Frame #${i+1}`} </h2>
	            	<h3>{`Score: ${this.state.returnedScores[obj][0]} / ${this.state.returnedScores[obj][1]}`}</h3>
	            </FrameDiv>
	           </Col>
			))}
	        </Row>
      	</Grid>
		);
	}
}

export default ScoresDisplay;