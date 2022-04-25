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
      formVisible: false,
      inventory: testData
    };
  }

  onNewOilAdd = (newOil) => {
    const newInventory = this.state.inventory.concat(newOil);
    this.setState({inventory: newInventory});
    this.setState(prevState => ({formVisible: !prevState.formVisible}));
  }

  addClick = () => {
    this.setState(prevState => ({formVisible: !prevState.formVisible}));
  }

  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisible) {
      currentlyVisibleState = <AddForm 
      onNewOilAdd = {this.onNewOilAdd}/>
    } else {
      currentlyVisibleState = <OilList inventoryList={this.state.inventory}/>

    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="success" onClick={this.addClick}>Add Motor Oil</Button>
      </React.Fragment>
    )
  }
}
export default OilControl;