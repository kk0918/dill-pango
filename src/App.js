import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';


import styled from 'styled-components';

const Outer = styled.section`
    text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Outer>
        <Header />
        <Content />
        <Footer />
      </Outer>
    );
  }
}

export default App;
