/* eslint-disable */
import React from 'react';

import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import{ Modal, ModalManager, Effect } from 'react-dynamic-modal';

import ScoresDisplay from '../components/scoresdisplay';
import MyModal from '../components/imagemodal.jsx';

const OuterContentDiv = styled.div`
	background-color: green;
 	display: flex;
  	flex-direction: column;
	height: 500px;
	padding: 20px;
`;

const InnerDiv = styled.div`
	flex: 1;
	flex-direction: column;
	position: relative;
`;

const Button = styled.button`
	color: palevioletred;
	font-size: 1em;
	margin-top: 100px;
	margin-bottom: 150px;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
`;

class Content extends React.Component {
	constructor(){
		super();
		this.state = {
			scores: {
				"Frame1": [2,3],
				"Frame2": [9,1],
				"Frame3": [1,9],
				"Frame4": [5,5],
				"Frame5": [10,0],
				"Frame6": [10,0],
				"Frame7": [1,0],
				"Frame8": [0,0],
				"Frame9": [3,2],
				"Frame10": [10,0], 
				"Frame11": [5,3], 
				"Frame12": [7,1]
			}
		}

		this.open = this.open.bind(this);
		this.saveScores = this.saveScores.bind(this);
	}

	saveScores(newScores) {
		this.setState({
			scores: newScores
		});
	}

	open() {
		ModalManager.open(<MyModal saveScores={this.saveScores} onRequestClose={() => true}/>);
	}

	render() {
		return (
			<div>
				<OuterContentDiv>
					<InnerDiv>
						<ScoresDisplay returnedScores={this.state.scores} />
						<Button onClick={this.open}>Select Image</Button>
					</InnerDiv>
				</OuterContentDiv>
			</div>
		);
	}
}

export default Content;
