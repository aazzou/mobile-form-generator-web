import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../store/IFormStore'
import { select } from 'async';
import FormItemSettings  from './FormItemSettings'



const FormItem = Form.Item;

@observer
class FormSettings extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      id: "",
      label: "",
      sysname: "",
      required: false
    }
    this.onChange = this.onChange.bind(this)
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    message.success("Submitted");
    const { id, label, sysname, required } = this.state;
    console.log(id);
    console.log(label)
    console.log(sysname)
    console.log(required)

    IFormStore.setFormItemSettings(id, label, sysname, required);
  }

  onChange(event){
    switch(event.target.name){
      case "label":
        this.setState({
          label: event.target.value
        })
      break;
      case "sysname":
        this.setState({
          sysname: event.target.value
        })
      break;
      case "required":
        this.setState({
          required: event.target.checked
        })
      break;
      default:
        message.error('Something went wrong!');
      break;
    }
  }

  componentWillReceiveProps(nextProps){
    console.log("received props");
    console.log(nextProps);
    let selectedItem = IFormStore.getSelectedItem();
    
    if(selectedItem != undefined){
      this.setState({
        id: selectedItem.id,
        label: selectedItem.label,
        sysname: selectedItem.sysname,
        required: (selectedItem.checked === undefined) ? false : selectedItem.checked
      })
    }
  }
  

  render() {
    let selectedItem = IFormStore.getSelectedItem();
    
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItemSettings config={  selectedItem }/>
        <FormItem label="Label">
            <Input prefix={<Icon type="mobile"
                   style={{ fontSize: 13 }} />}
                   placeholder="Label"
                   name="label"
                   value={this.state.label}
                   onChange={this.onChange} />
        </FormItem>
        <FormItem label="System name">
            <Input prefix={<Icon type="desktop" style={{ fontSize: 13 }} />}
                  type="text" placeholder="System name"
                  name="sysname"  
                  value={this.state.sysname}
                  onChange={this.onChange}
                />
        </FormItem>
        <FormItem>
          <Checkbox name="required" onChange={this.onChange} checked={this.state.required}>Checked</Checkbox>
          <Button onSubmit={this.handleSubmit} type="primary" htmlType="submit">
              Save
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(FormSettings);
