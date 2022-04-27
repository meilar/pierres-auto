import React from "react";
import Button from 'react-bootstrap/Button'
import LubeList from "./LubeList";
import LubeDetail from "./LubeDetail";
import EditLubeForm from "./EditLubeForm";
import NewLubeForm from './NewLubeForm';
import { v4 } from 'uuid';


const seedData = [
  {
  name: "High Milelage Synthetic Blend",
  brand: "Pennzoil",
  rating: "10W-30",
  type: "Synthetic",
  count: 168,
  id: v4()
},
{
  name: "Low Milelage Synthetic Blend",
  brand: "Castoil",
  rating: "30W-15",
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
        onAddLube = {this.handleAddingLube}/>
    } else if (this.state.editShowing) {
      mainPanel = <EditLubeForm 
        lubeToEdit = {this.state.selectedLube}
        handleSaveEdit = {this.handleSaveEdit} />
    } else if (this.state.selectedLube !== null) {
      mainPanel = <LubeDetail 
        lube = {this.state.selectedLube}
        onClickingDelete = {this.handleDeleteClick}
        onClickingEdit = {this.handleEditClick}
        onClickingSale = {this.handleSalesClick} />
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