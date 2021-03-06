import React from 'react';
import Lube from './Lube';
import PropTypes from "prop-types";

function LubeList(props) {
  return (
    <React.Fragment>
      <p className="font-weight-bold">Motor Oils Available</p>
      <hr />
      {props.lubeList.map((lube) =>
          <Lube 
          name={lube.name}
          id={lube.id}
          key={lube.id}
          onSelectingLube={props.onSelectingLube}/>
      )}
    </React.Fragment>
  )
}

LubeList.propTypes = {
  lubeList: PropTypes.array,
  onSelectingLube: PropTypes.func,
}

export default LubeList;