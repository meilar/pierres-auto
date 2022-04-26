import './../App.css';
import Header from './Header';
import OilControl from './OilControl';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Container >
          <Header />
        <div className="row">
          <div className="col-4">
          </div>
          <div className="col-8">
           <OilControl />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
