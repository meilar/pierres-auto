import React from "react";
import OilList from "./OilList";
import AddForm from './AddForm';
import Button from 'react-bootstrap/Button'

const testData = [
  {
  name: "High Milelage Synthetic Blend",
  brand: "Pennzoil",
  rating: "10W-30",
  type: "Synthetic",
  inventory: 168
},
{
  name: "Low Milelage Synthetic Blend",
  brand: "Castoil",
  rating: "30W-15",
  type: "Conventional",
  inventory: 20
}
]

class OilControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  addClick = () => {
    console.log("addclick too")
    this.setState({formVisible: true});
  }

  render() {
    let currentlyVisibleState = null;
    let addOilButton = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <AddForm />
    } else {
      currentlyVisibleState = <OilList inventoryList={testData}/>
      addOilButton = <Button variant="success" onClick={this.addClick}>Add Motor Oil</Button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addOilButton}
      </React.Fragment>
    )
  }
}
export default OilControl;