import React from 'react';
import OilDetail from './OilDetail';
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';

class OilList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      detailsVisible: false
    };
  }

  toggleDetails = (previousState) => {
    this.setState({detailsVisible: !previousState});
  }

  render() {
    
    return (
      <React.Fragment>
        {this.props.inventoryList.map((oil, index) =>
          {if(this.state.detailsVisible) {
            <OilDetail 
            name={oil.name}
            brand={oil.brand}
            inventory={oil.inventory}
            type={oil.type}
            rating={oil.rating}
            key={index}/>,
            <Button variant="light">Close</Button>
          } else {
            <Button>{oil.name}</Button>
          }
        }
        )}
      </React.Fragment>
    )
  }
}

OilDetail.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  inventory: PropTypes.number,
  type: PropTypes.string,
  rating: PropTypes.string
}

export default OilList;