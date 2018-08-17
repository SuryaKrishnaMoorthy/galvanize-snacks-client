import React from 'react';
import {
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  InputGroup,
  InputGroupAddon
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
      <Label for="exampleUrl">Url</Label>
      <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
    </FormGroup>
    <FormGroup>
    <Label for="perishavle">Snack Price?</Label>
    <InputGroup>
         <InputGroupAddon addonType="prepend">$</InputGroupAddon>
         <Input placeholder="Amount" type="number" step="1" />
         <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
    </FormGroup>
    <FormGroup>
      <Label for="perishavle">Is your snack perishable?</Label>
      <div>
        <CustomInput id="yes" type="checkbox" label="Yes" inline/>
        <CustomInput id="no" type="checkbox" label="No" inline/>
      </div>
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
