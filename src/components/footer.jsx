import React from 'react';

import styled from 'styled-components';

import { SocialIcon } from 'react-social-icons';

const FooterDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: center;
  margin: 0 auto;
  display: block;
`

class Footer extends React.Component {
	render() {
		return (
	        <FooterDiv>
	        	 <ul class="social-icons">
	        	 	<SocialIcon network="email"/>
	        	 	<SocialIcon network="email" color="#26539b"/>
	        	 	<SocialIcon url="http://facebook.com" network="facebook"/>
	        	 	<SocialIcon url="http://twitter.com" network="twitter"/>
	        	 	<SocialIcon url="http://youtube.com" network="youtube"/>
			    </ul>
	        </FooterDiv>
		);
	}
}

export default Footer