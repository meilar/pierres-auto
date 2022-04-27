import React from "react";
import PropTypes from 'prop-types';

function Lube(props) {
  return (
    <React.Fragment>
      {/* eslint-disable-next-line */}
      <p><a 
        onClick={() => props.onSelectingLube(props.id)} 
        href="#" 
        className="text-primary font-weight-bold">{props.name}</a></p>
    </React.Fragment>
  );
}

Lube.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onSelectingLube: PropTypes.func
}

export default Lube;