import React from 'react';
import bowlingball from '../assets/bowling-ball.svg';

import styled, { keyframes } from 'styled-components';

const HeaderDiv = styled.div`
	background-color: #33C7FF;
	height: 150px;
  	padding: 20px;
  	color: white;

  	> h1 {
  		color: palevioletred;
  		font-family: 'Pacifico', cursive;
  		font-size: 1.5em;
  	}
`

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
 	animation: ${spin} infinite 20s linear;
 	height: 80px;
`

class Header extends React.Component {
	render() {
		return (
	        <HeaderDiv>
	          <Logo src={bowlingball}/>
	          <h1 className="App-title">Bowlr</h1>
	        </HeaderDiv>
		);
	}
}

export default Header