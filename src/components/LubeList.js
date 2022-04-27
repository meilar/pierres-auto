import React from 'react';
import Lube from './Lube';
import PropTypes from "prop-types";

function LubeList(props) {
  return (
    <React.Fragment>
      {props.lubeList.map((lube) =>
          <Lube 
          name={lube.name}
          brand={lube.brand}
          inventory={lube.inventory}
          type={lube.type}
          rating={lube.rating}
          index={lube.id}
          key={lube.id}
          onSalesClick={props.onSalesClick}
          onSelectingLube={props.onSelectingLube}/>
      )}
    </React.Fragment>
  )
}

LubeList.propTypes = {
  lubeList: PropTypes.array,
  onSelectingLube: PropTypes.func,
  onSalesClick: PropTypes.func
}

export default LubeList;