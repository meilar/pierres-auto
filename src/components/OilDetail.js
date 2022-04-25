import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class OilDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    }
  }

  showClick = () => {
    this.setState({showDetails: true});
  }

  hideClick = () => {
    this.setState({showDetails: false});
  }

  salesClick = () => {
    const index = this.props.index;
    this.props.onSalesClick(index);
  }

  render() {

    let cardVisibility = null;
    let buttonVisibility = null;

    if(this.state.showDetails) {
      cardVisibility = { display: "flex" };
      buttonVisibility = { display: "none"};
    } else {
      buttonVisibility = { display: "flex" };
      cardVisibility = { display: "none"};
    }

    return (
      <React.Fragment>
        <div className="detailRow">
          <Button variant="dark" style={buttonVisibility} onClick={this.showClick}>{this.props.name}</Button>
          <Card style={cardVisibility} id={"detailCard" + this.props.index} >
            <Card.Body>
              <Card.Title>{this.props.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{this.props.brand}</Card.Subtitle>
              <Card.Text className='text-warning'>Type: {this.props.type}</Card.Text>
              <Card.Text className="text-danger">Rating: {this.props.rating}</Card.Text>
              <Card.Text className="text-primary">Quarts remaining: {this.props.inventory}</Card.Text>
              <Button onClick={this.hideClick} variant="light">Close Details</Button>
              <Button onClick={this.salesClick} variant="success">SALE: 1 Quart</Button>
            </Card.Body>
          </Card>
        </div>
      </React.Fragment>
    )
  }
}

export default OilDetail;