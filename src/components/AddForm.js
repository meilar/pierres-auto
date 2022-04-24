import React from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form'
import Card from "react-bootstrap/Card"

function AddForm() {
  return (
    <React.Fragment>
      <Card>
        <Card.Body>
          <Button>Add Motor Oil</Button>
          <hr />
          <div id="inputForm">
            <Form>
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
                  <option value="1">Conventional</option>
                  <option value="2">Synthetic</option>
                  <option value="3">Blend</option>
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

export default AddForm;