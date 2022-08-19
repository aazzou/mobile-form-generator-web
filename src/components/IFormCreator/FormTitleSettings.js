import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../store/IFormStore'
import { select } from 'async';

const FormItem = Form.Item;

@observer
class FormTitleSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.formInfo.id,
      name: this.props.formInfo.name,
      description: this.props.formInfo.description
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    message.success("Submitted");
    const { id, name, description } = this.state;

    let formInfo = {
      id: id,
      name: name,
      description: description
    }
    IFormStore.setFormInfo(formInfo);
  }

  onChange(event) {
    switch (event.target.name) {
      case "name":
        this.setState({
          name: event.target.value
        })
        break;
      case "description":
        this.setState({
          description: event.target.value
        })
        break;
      default:
        message.error('Something went wrong!');
        break;
    }
  }



  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Name">
          <Input prefix={<Icon type="mobile"
            style={{ fontSize: 13 }} />}
            placeholder="Name"
            name="name"
            value={this.state.name}
            onChange={this.onChange} />
        </FormItem>
        <FormItem label="Description">
          <Input prefix={<Icon type="desktop" style={{ fontSize: 13 }} />}
            type="text" placeholder="Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
          />
        </FormItem>
        <FormItem>
          <Button onSubmit={this.handleSubmit} type="primary" htmlType="submit">
            Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(FormTitleSettings);
