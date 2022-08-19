import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../../store/IFormStore'
import { select } from 'async';


const FormItem = Form.Item;

@observer
class ImageSettings extends React.Component {
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
        <FormItem label="Logo Link">
          <Input prefix={<Icon type="mobile"
            style={{ fontSize: 13 }} />}
            placeholder="Logo Link URL"
            name="logo_link"
            value={this.state.content}
            onChange={this.onChange} />
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

export default Form.create()(ImageSettings);
