import React from "react";
import OilList from "./OilList";
import AddForm from './AddForm';

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

function OilController() {
  return (
    <React.Fragment>
      <OilList 
        inventoryList={testData}/>
      <AddForm />
    </React.Fragment>
  )
}

export default OilController;