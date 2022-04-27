import './../App.css';
import Header from './Header';
import LubeControl from './LubeControl';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Container >
          <Header />
          <LubeControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
