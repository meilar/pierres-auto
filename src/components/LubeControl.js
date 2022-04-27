import React from "react";
import Button from 'react-bootstrap/Button'
import LubeList from "./LubeList";
import LubeDetail from "./LubeDetail";
import EditLubeForm from "./EditLubeForm";
import NewLubeForm from './NewLubeForm';


const seedData = [
  {
  name: "High Milelage Synthetic Blend",
  brand: "Pennzoil",
  rating: "10W-30",
  type: "Synthetic",
  lubeArray: 168
},
{
  name: "Low Milelage Synthetic Blend",
  brand: "Castoil",
  rating: "30W-15",
  type: "Conventional",
  lubeArray: 20
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

  }

  handleSaveEdit = (editedLube) => {
    const editedLubeArray = this.state.lubeArray
      .filter(lube => lube.id !== this.state.selectedTicket)
      .concat(editedLube);
    this.setState({
      lubeArray: editedLubeArray,
      editShowing: false,
      selectedTicket: null
    });
  }

  handleSalesClick = (id) => {
    const newValue = this.state.lubeArray
      .filter(lube => lube.id === id)[0]
      .inventory - 1;
    console.log(newValue);
  }

  //DELETE

  handleDeleteClick = (id) => {
    const newLubeArray = this.state.mainTicketList.filter(l => l.id !==id);
    this.SetState({ lubeArray: newLubeArray, selectedLube: null });
  }

  //RENDER

  render() {
    let mainPanel = null;

    if (this.state.formShowing) {
      mainPanel = <NewLubeForm 
        onAddLube = {this.handleAddingLube}/>
    } else if (this.state.editShowing) {
      mainPanel = <EditLubeForm 
        lube = {this.state.selectedLube}
        handleSaveEdit = {this.handleSaveEdit} />
    } else if (this.state.selectedLube !== null) {
      mainPanel = <LubeDetail 
        lube = {this.state.SelectedLube}
        onClickingDelete = {this.handleDeleteClick}
        onClickingEdit = {this.handleEditClick} />
    }
    
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <LubeList 
              lubeList={this.state.lubeArray}
              onSelectingLube = {this.handleSelectingLube}
              onSalesClick={this.handleSalesClick}/>
            <Button variant="success" onClick={this.handleAddClick}>Add New Oil</Button>
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