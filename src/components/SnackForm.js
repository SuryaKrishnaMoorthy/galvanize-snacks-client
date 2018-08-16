import React from 'react';
import {
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button
} from 'reactstrap';

const SnackForm = ({props}) => {
  return (<Form>
    <FormGroup>
      <Label for="name">Snack Name</Label>
      <Input type="textarea" name="name" id="name"/>
    </FormGroup>
    <FormGroup>
      <Label for="description">Snack Description</Label>
      <Input type="textarea" name="description" id="description"/>
    </FormGroup>

    <FormGroup>
      <Label for="price">Price</Label>
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
      <Input type="number" id="price"/>
        <span className="input-group-text">.00</span>
      </div>
    </FormGroup>

    <FormGroup>
      <Label for="perishavle">Is your snack perishable?</Label>
      <div>
        <CustomInput id="yes" type="checkbox" label="Yes" inline/>
        <CustomInput id="no" type="checkbox" label="No" inline/>
      </div>
    </FormGroup>
    <FormGroup>
      <Label for="exampleCustomFileBrowser">Snack Image</Label>
      <CustomInput id="snack-image" type="file" name="customFile"/>
    </FormGroup>
    <FormGroup check="check" row="row">
      <Col sm={{
          size: 10,
          offset: 0
        }}>
        <Button>Add Snack</Button>
      </Col>
    </FormGroup>
  </Form>);
}

export default SnackForm
