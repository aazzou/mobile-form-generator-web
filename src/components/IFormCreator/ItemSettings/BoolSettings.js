import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message, Badge } from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../../store/IFormStore'
import { select } from 'async';
import ItemHeaderText from './ItemHeaderText'

const FormItem = Form.Item;

@observer
class BoolSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      config: this.props.config
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const { id, name, description } = this.state;

    // let formInfo = {
    //   id: id,
    //   name: name,
    //   description: description
    // }
    // IFormStore.setFormInfo(formInfo);
  }

  onChange(event) {
    // switch (event.target.name) {
    //   case "name":
    //     this.setState({
    //       name: event.target.value
    //     })
    //     break;
    //   case "description":
    //     this.setState({
    //       description: event.target.value
    //     })
    //     break;
    //   default:
    //     message.error('Something went wrong!');
    //     break;
    // }
  }



  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Label">
          <Input prefix={<Icon type="mobile"
            style={{ fontSize: 13 }} />}
            placeholder="Label"
            name="label"
            value={this.state.label}
            onChange={this.onChange} />
        </FormItem>
        <FormItem label="Field name">
          <Input prefix={<Icon type="mobile"
            style={{ fontSize: 13 }} />}
            placeholder="Field name"
            name="field_name"
            value={this.state.field_name}
            onChange={this.onChange} />
        </FormItem>
        <div>
        <Checkbox name="defalut_value" onChange={this.onChange} checked={this.state.default_value}> Default</Checkbox>
        </div>
        <div>
        <Checkbox name="required" onChange={this.onChange} checked={this.state.required}> Required</Checkbox>
        </div>
        <br />
        <FormItem>
          <Button onSubmit={this.handleSubmit} type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(BoolSettings);
