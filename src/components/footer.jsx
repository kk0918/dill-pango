import React from 'react';

import styled from 'styled-components';

import { SocialIcon } from 'react-social-icons';

const FooterDiv = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 5px;
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
	        	 	<SocialIcon network="email" style={{ height: 35, width: 35 }}/>
	        	 	<SocialIcon network="email" color="#26539b" style={{ height: 35, width: 35 }}/>
	        	 	<SocialIcon url="http://facebook.com" network="facebook" style={{ height: 35, width: 35 }}/>
	        	 	<SocialIcon url="http://twitter.com" network="twitter" style={{ height: 35, width: 35 }}/>
	        	 	<SocialIcon url="http://youtube.com" network="youtube" style={{ height: 35, width: 35 }}/>
			    </ul>
	        </FooterDiv>
		);
	}
}

export default Footer