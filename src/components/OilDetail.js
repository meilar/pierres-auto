import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OilDetail(props) {

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.brand}</Card.Subtitle>
          <Card.Text className='text-warning'>Type: {props.type}</Card.Text>
          <Card.Text className="text-danger">Rating: {props.rating}</Card.Text>
          <Card.Text className="text-primary">Quarts remaining: {props.inventory}</Card.Text>
          <Button variant="success">SALE: 1 Qt</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default OilDetail;