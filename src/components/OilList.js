import React from 'react';
import OilDetail from './OilDetail';
import PropTypes from "prop-types";

function OilList(props) {
  return (
    <React.Fragment>
      {props.inventoryList.map((oil, index) =>
        <OilDetail 
          name={oil.name}
          brand={oil.brand}
          inventory={oil.inventory}
          type={oil.type}
          rating={oil.rating}
          key={index}/>
      )}
    </React.Fragment>
  )
}

OilDetail.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  inventory: PropTypes.number,
  type: PropTypes.string,
  rating: PropTypes.string
}

export default OilList;