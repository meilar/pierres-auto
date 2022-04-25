import React from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"
import PropTypes from "prop-types";

function AddForm(props) {

  function handleNewOil(event) {
    event.preventDefault();
    const newOil = {
      name: event.target.formName.value, 
      brand: event.target.formBrand.value, 
      rating: event.target.formRating.value,
      type: event.target.formType.value,
      inventory: event.target.formInventory.value
      }
    props.onNewOilAdd(newOil);
  }


  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <div id="inputForm">
            <Form onSubmit={handleNewOil}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Motor Oil Name</Form.Label>
                <Form.Control type="text" placeholder="Winter Heavy-Duty Blend" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBrand">
                <Form.Label>Motor Oil Brand</Form.Label>
                <Form.Control type="text" placeholder="Pennzoil" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formType">
                <Form.Label>Oil Type</Form.Label>
                <Form.Select className="form-control" aria-label="Default select example">
                  <option>Choose a type</option>
                  <option value="Conventional">Conventional</option>
                  <option value="Synthetic">Synthetic</option>
                  <option value="Blend">Blend</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formRating">
                <Form.Label>Weather Rating</Form.Label>
                <Form.Control type="text" placeholder="30S-20" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formInventory">
                <Form.Label>Starting inventory (Qts)</Form.Label>
                <Form.Control type="number" placeholder="120" />
              </Form.Group>
              <Button variant="success" type="submit">
                Submit
              </Button>
              <Button variant="danger" type="reset">
                Cancel
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </React.Fragment>
  )
}

AddForm.propTypes = {
  onNewOilAdd: PropTypes.func
}

export default AddForm;