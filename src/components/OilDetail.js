import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function OilDetail(props) {
  const testData = {
    name: "High Milelage Synthetic Blend",
    brand: "Pennzoil",
    rating: "10W-30",
    type: "Synthetic",
    inventory: 168
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Card.Title>{testData.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{testData.brand}</Card.Subtitle>
          <Card.Text className='text-warning'>Type: {testData.type}</Card.Text>
          <Card.Text className="text-danger">Rating: {testData.rating}</Card.Text>
          <Card.Text className="text-primary">Quarts remaining: {testData.inventory}</Card.Text>
          <Button variant="success">SALE: 1 Qt</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

export default OilDetail;