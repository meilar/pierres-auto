import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function LubeForm(props) {

  return (
    <React.Fragment>
      <Card body>
          <form onSubmit={props.formSubmissionHandler}>
            <label className="lubeForm">Enter Motor Oil Name</label>  
            <input
              className="form-control lubeForm mb-3"
              id="formName"
              type="text"
              name="formName"
              placeholder='Winter Heavy-Duty Blend'
              defaultValue={props.nameValue} />
            <label className="lubeForm">Enter Motor Oil Brand</label>  
            <input
              className="form-control lubeForm mb-3"
              id="formBrand"
              type="text"
              name="formBrand"
              placeholder='Pennzoil'
              defaultValue={props.brandValue} />
            <label className="lubeForm">Enter Weather Rating</label>  
            <input
              className="form-control lubeForm mb-3"
              id="formRating"
              type="text"
              name="formRating"
              placeholder="30S-20"
              defaultValue={props.ratingValue} />
            <label className="lubeForm">Choose an Oil Type</label>    
            <select
              name="formType"
              id="formType" 
              className="form-control lubeForm"
              defaultValue={props.typeValue}>
              <option>Choose...</option>
              <option value="Conventional">Conventional</option>
              <option value="Synthetic">Synthetic</option>
              <option value="Blend">Blend</option>
            </select>
            <label className="lubeForm">Choose Inventory Amount in Quarts</label>  
            <input
              className="form-control lubeForm mb-3"
              id="formCount"
              type="number"
              name="formCount"
              defaultValue={props.countValue} />
            <button className="btn btn-outline-primary lubeForm" type='submit'>{props.buttonText}</button>
            <button className="btn btn-outline-danger lubeForm" type="reset">Reset Form</button>
          </form>
      </Card>
    </React.Fragment>
  )
}

LubeForm.propTypes = {
  buttonText: PropTypes.string,
  formSubmissionHandler: PropTypes.func,
  nameValue: PropTypes.string,
  brandValue: PropTypes.string,
  typeValue: PropTypes.string,
  ratingValue: PropTypes.string,
  countValue: PropTypes.number
}

export default LubeForm;