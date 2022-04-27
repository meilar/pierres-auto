import React from "react";
import PropTypes from 'prop-types';
import LubeForm from './LubeForm';
import { v4 } from 'uuid';

class EditLubeForm extends React.Component {

  handleFormSubmission = (event) => {
    event.preventDefault();
    const editedLube = {
      name: event.target.formName.value, 
      brand: event.target.formBrand.value, 
      rating: event.target.formRating.value,
      type: event.target.formType.value,
      count: parseInt(event.target.formCount.value),
      id: v4()
    }
    console.log(editedLube);
    this.props.handleSaveEdit(editedLube, this.props.lubeToEdit.id);
  }

  render() {
    return (
      <React.Fragment>
      <LubeForm
          buttonText = "Submit"
          formSubmissionHandler = {this.handleFormSubmission}
          nameValue = {this.props.lubeToEdit.name}
          brandValue = {this.props.lubeToEdit.brand}
          typeValue = {this.props.lubeToEdit.type}
          ratingValue = {this.props.lubeToEdit.rating}
          countValue = {this.props.lubeToEdit.count} />
    </React.Fragment>
    )
  }

}

EditLubeForm.propTypes = {
  onAddLube: PropTypes.func,
  lubeToEdit: PropTypes.object,
  handleSaveEdit: PropTypes.func
}

export default EditLubeForm;