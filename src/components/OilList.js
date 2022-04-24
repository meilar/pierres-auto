import React from 'react';
import OilDetail from './OilDetail';
import PropTypes from "prop-types";

function OilList(props) {
  return (
    <React.Fragment>
      <OilDetail />
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