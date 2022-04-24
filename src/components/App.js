import logo from './../logo.svg';
import './../App.css';
import Header from './Header';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Container >
        <Header />
      </Container>
    </React.Fragment>
  );
}

export default App;
