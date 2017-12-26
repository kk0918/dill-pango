import React from 'react';

import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import{ Modal, ModalManager, Effect } from 'react-dynamic-modal';


const DropDiv = styled.div`
	color: palevioletred;
	font-family: 'Hind', sans-serif;
	text-align: left;
	width: 100%;
`

const ModalButton = styled.button`
	transition: all 0.1s;
	-webkit-transition: all 0.1s;
	position: relative;
	padding: 2px 7px;
 	margin: 10px 10px 10px 0px;
  	float: left;
	border-radius: 10px;
	font-family: 'Pacifico', cursive;
	font-size: 15px;
	color: #FFF;
	text-decoration: none;	
	background-color: #3498DB;
	border-bottom: 5px solid #2980B9;
	text-shadow: 0px -2px #2980B9;

	&:active {
		transform: translate(0px,5px);
 		-webkit-transform: translate(0px,5px);
		border-bottom: 1px solid;
	}
`;

const dropZoneStyle = {
    width  : "100%",
    height : "40%",
    border : "1px solid black"
};

const styles = {
  overlay: {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    zIndex          : 99999999,
    overflow        : 'hidden',
    perspective     :  1300,
    backgroundColor : 'rgba(0, 0, 0, 0.3)'
  },

  content: {
    position                : 'relative',
    margin                  : '15% auto',
    width                   : '200px',
    padding 				: '18px',
    border                  : '8px solid palevioletred',
    background              : '#fff',
    overflow                : 'auto',
    borderRadius            : '4px',
    outline                 : 'none',
    boxShadow               : '0 5px 10px rgba(0, 0, 0, .3)',
  }
};

class MyModal extends React.Component{
	constructor(){
		super();
		this.state = {
			filesToBeSent:[],
			ModalManager: ModalManager
		}
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(ModalManager) {
		if (this.state.filesToBeSent.length > 0) {
    		this.getBase64().then(result => {
    			fetch('https://2b32f8be-b9c9-4027-be79-0698f10e78b4.mock.pstmn.io/img_test', {
    				mode: 'cors',
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
						'x-api-key': '8075245e7d654f77851ba8b8dfc854cb'
						},
					body: JSON.stringify({
						image: result
					})
				})
				.then(response => response.json())
				.then(responseData => {
					console.log(responseData);
					this.props.saveScores(responseData);
				})
				.catch(err => console.log(err))
    		});
  		}
  		this.state.ModalManager.close();
	}

	getBase64() {
		return new Promise((resolve, reject) => {
			 const reader = new FileReader()
			 reader.readAsDataURL(this.state.filesToBeSent[0][0])
			 reader.onload = () => {
			 if (!!reader.result) {
				resolve(reader.result);
		     } else {
			     reject(Error("Failed converting to base64"));
			 }
		 	}
		});
	}

	onDrop(acceptedFiles, rejectedFiles) {
		console.log('Accepted files: ', acceptedFiles[0].name);
		const filesToBeSent=this.state.filesToBeSent;
		filesToBeSent.push(acceptedFiles);
		this.setState({filesToBeSent});
		console.log(this.state.filesToBeSent[0]);
	}

   render(){
      const { text,onRequestClose } = this.props;
      const fileName = this.state.filesToBeSent.length > 0 ? this.state.filesToBeSent[0][0].name : "Try dropping a file here, or click to select a file to upload."; 
      return (
         <Modal
         	style={styles} 
            onRequestClose={onRequestClose}
            effect={Effect.SlideFromRight}>
            <DropDiv>
			    <Dropzone style={dropZoneStyle} onDrop={(files) => this.onDrop(files)}>
	                <div>{fileName}</div>
		        </Dropzone>
	        </DropDiv>
	        <ModalButton onClick={this.state.ModalManager.close}>Close </ModalButton>
	        <ModalButton onClick={this.onSubmit}>Submit </ModalButton>
         </Modal>
      );
   }
}

export default MyModal;