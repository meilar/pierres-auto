import React from "react";
import PropTypes from 'prop-types';

function Lube(props) {
  return (
    <React.Fragment>
      {/* eslint-disable-next-line */}
      <p><a 
        onClick={() => props.onSelectingLube(props.id)} 
        href="#" 
        class="text-primary">{props.name}</a></p>
    </React.Fragment>
  );
}

Lube.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  onSelectingLube: PropTypes.func
}

export default Lube;