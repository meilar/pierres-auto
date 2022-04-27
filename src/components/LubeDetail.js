import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

function LubeDetail(props) {

  let saleButton = null;

  if(props.lube.count > 0) {
    saleButton = <Button onClick={() => props.onClickingSale(props.lube.id)} variant="outline-success">SALE: 1 Quart</Button>;
  } else {
    saleButton = <Button disabled variant="secondary">SOLD OUT</Button>
  }

  return (
    <React.Fragment>
      <div className="detailRow">
        <Card id={"detailCard" + props.lube.id} >
          <Card.Body>
            <Card.Title>{props.lube.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.lube.brand}</Card.Subtitle>
            <Card.Text className='text-warning'>Type: {props.lube.type}</Card.Text>
            <Card.Text className="text-danger">Rating: {props.lube.rating}</Card.Text>
            <Card.Text className="text-primary">Quarts remaining: {props.lube.count}</Card.Text>
            {/* eslint-disable-next-line */}
            {saleButton}
            {/* eslint-disable-next-line */}
            <Button onClick={() => props.onClickingEdit(props.lube.id)} variant="outline-warning">Edit</Button>
            {/* eslint-disable-next-line */}
            <Button onClick={() => props.onClickingDelete(props.lube.id)} variant="outline-danger">Delete</Button>
            {/* eslint-disable-next-line */}
            <Button onClick={() => props.onClickingClose()} variant="outline-dark">Close</Button>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  )
}

LubeDetail.propTypes = {
  lube: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingSale: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingClose: PropTypes.func
}

export default LubeDetail;