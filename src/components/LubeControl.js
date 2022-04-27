import React from "react";
import Button from 'react-bootstrap/Button'
import LubeList from "./LubeList";
import LubeDetail from "./LubeDetail";
import EditLubeForm from "./EditLubeForm";
import NewLubeForm from './NewLubeForm';
import { v4 } from 'uuid';

const seedData = [
  {
  name: "Advanced European Formula",
  brand: "Mobil 1",
  rating: "0W-40",
  type: "Synthetic",
  count: 20,
  id: v4()
},
{
  name: "STP High Mileage",
  brand: "STP",
  rating: "5W-20",
  type: "Conventional",
  count: 20,
  id: v4()
},
{
  name: "MaxLife High Mileage",
  brand: "Valvoline",
  rating: "10W-30",
  type: "Synthetic",
  count: 20,
  id: v4()
},
{
  name: "GTX Engine Oil",
  brand: "Castrol",
  rating: "10W-30",
  type: "Blend",
  count: 20,
  id: v4()
},
{
  name: "High Mileage Conventional",
  brand: "Pennzoil",
  rating: "5W-20",
  type: "Conventional",
  count: 20,
  id: v4()
},
{
  name: "STP Full Synthetic",
  brand: "STP",
  rating: "5W-30",
  type: "Synthetic",
  count: 20,
  id: v4()
},
{
  name: "All Mileage Synthetic Blend",
  brand: "Quaker State",
  rating: "5W-30",
  type: "Blend",
  count: 20,
  id: v4()
},
{
  name: "EDGE Advanced Engine Oil",
  brand: "Castrol",
  rating: "5W-30",
  type: "Synthetic",
  count: 20,
  id: v4()
},
{
  name: "Platinum High Mileage",
  brand: "Pennzoil",
  rating: "5W-30",
  type: "Synthetic",
  count: 20,
  id: v4()
},
{
  name: "Diesel Engine Oil",
  brand: "STP",
  rating: "15W-40",
  type: "Conventional",
  count: 20,
  id: v4()
}
]

class LubeControl extends React.Component {


  
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
      editShowing: false,
      lubeArray: seedData,
      selectedLube: null
    };
  }

  // CREATE

  handleAddClick = () => {
    this.setState(prevState => ({formShowing: !prevState.formShowing}));
  }

  handleAddingLube = (newLube) => {
    const newArray = this.state.lubeArray.concat(newLube);
    this.setState({lubeArray: newArray});
    this.setState(prevState => ({formShowing: !prevState.formShowing}));
  }

  // READ

  handleSelectingLube = (id) => {
    const selectedLube = this.state.lubeArray.filter(lube => lube.id === id)[0];
    this.setState({selectedLube : selectedLube});
  }

  handleChangingSelectedLube = (id) => {
    const selectedLube = this.state.lubeArray.filter(lube => lube.id === id)[0];
    this.setState({selectedLube: selectedLube});
  }

  handleCloseClick = () => {
    this.setState({
      formShowing: false,
      editShowing: false,
      selectedLube: null
    })
  }

  //UPDATE

  handleEditClick = (id) => {
    const selectedLube = this.state.lubeArray.filter(lube => lube.id === id)[0];
    this.setState({
      selectedLube : selectedLube,
      formShowing: false,
      editShowing: true});
  }

  handleSaveEdit = (editedLube, oldId) => {
    const editedLubeArray = this.state.lubeArray
      .filter(e => e.id !== oldId)
      .concat(editedLube);
    this.setState({
      lubeArray: editedLubeArray,
      formShowing: false,
      editShowing: false,
      selectedLube: null
    });
  }

  handleSalesClick = (id) => {
    const newValue = this.state.lubeArray
      .filter(lube => lube.id === id)[0]
      .count - 1;
    console.log(newValue);
    const updatedLube = {...this.state.lubeArray.filter(e => e.id === id)[0], count: newValue};
    const editedLubeArray = this.state.lubeArray
      .filter(e => e.id !== id)
      .concat(updatedLube);
      this.setState({
        lubeArray: editedLubeArray,
        selectedLube: null
      });
      this.handleSelectingLube(id);
  }

  //DELETE

  handleDeleteClick = (id) => {
    const newLubeArray = this.state.lubeArray.filter(l => l.id !==id);
    this.setState({ lubeArray: newLubeArray, selectedLube: null });
  }

  //RENDER

  render() {
    let mainPanel = null;

    if (this.state.formShowing) {
      mainPanel = <NewLubeForm 
        onAddLube = {this.handleAddingLube}
        onClickingClose = {this.handleCloseClick}/>
    } else if (this.state.editShowing) {
      mainPanel = <EditLubeForm 
        lubeToEdit = {this.state.selectedLube}
        handleSaveEdit = {this.handleSaveEdit}
        onClickingClose = {this.handleCloseClick} />
    } else if (this.state.selectedLube !== null) {
      mainPanel = <LubeDetail 
        lube = {this.state.selectedLube}
        onClickingDelete = {this.handleDeleteClick}
        onClickingEdit = {this.handleEditClick}
        onClickingSale = {this.handleSalesClick}
        onClickingClose = {this.handleCloseClick} />
    }
    
    return (
      <React.Fragment>
        <div className="row content-area">
          <div className="col-4">
            <LubeList 
              lubeList={this.state.lubeArray}
              onSelectingLube = {this.handleSelectingLube}/>
            <Button className="addButton" variant="outline-success" onClick={this.handleAddClick}>Add New Oil</Button>
          </div>
          <div className="col-8">
            {mainPanel}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default LubeControl;