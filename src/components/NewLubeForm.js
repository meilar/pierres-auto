import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import LubeForm from "./LubeForm";

class NewLubeForm extends React.Component {

  handleFormSubmission = (event) => {
    event.preventDefault();
    const newLube = {
      name: event.target.formName.value, 
      brand: event.target.formBrand.value, 
      rating: event.target.formRating.value,
      type: event.target.formType.value,
      count: parseInt(event.target.formCount.value),
      id: v4()
    }
    console.log(newLube);
    this.props.onAddLube(newLube);
  }

  render() {
    return (
      <React.Fragment>
        <LubeForm
            buttonText = "Submit"
            formSubmissionHandler = {this.handleFormSubmission}
            nameValue = ""
            brandValue = ""
            typeValue = ""
            ratingValue = ""
            countValue = {0} />
      </React.Fragment>
    )
  };
}

NewLubeForm.propTypes = {
  onAddLube: PropTypes.func,
}

export default NewLubeForm;