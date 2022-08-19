import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { Form, Icon, Input, Checkbox, message, InputNumber } from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../../store/MobileFormStore'
import { select } from 'async';

const FormItem = Form.Item;

@observer
export default class NumberSettings extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        id: 0,
        name: '',
        is_required: false,
        settings: {
          label: '',
          field_name: '',
          placeholder: '',
          tooltip: '',
          default_value: 0,
          min_value: 0,
          max_value: 0,
        },
      }
      this.onChange = this.onChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
    componentDidMount(nextProps){
      let selectedItem = MobileFormStore.selectedItem;
      if(selectedItem != undefined){
        // let settings = 
        // if( selectedItem.settings === {} ) 
        this.setState({
          id: selectedItem.id,
          name: selectedItem.name,
          is_required: selectedItem.is_required,
          settings: ( Object.keys(selectedItem.settings).length === 0 ? this.state.settings : selectedItem.settings )
        })
      } 
    }
  
    handleSubmit(e) {
      e.preventDefault();
  
      const { id, name, is_required, settings } = this.state;
  
      MobileFormStore.setMobileFormItemSettings(id, name, settings, is_required);
    }
  
    onChange(event) {
      switch (event.target.name) {
        case "name":
          this.setState({
            name: event.target.value
          })
          break;
        case "label":
          this.setState({
            settings: {
              ... this.state.settings,
              label: event.target.value
            }
          })
          break;
        case "field_name":
            this.setState({
              settings: {
                ... this.state.settings,
                field_name: event.target.value
              }
            })
        break;
        case "placeholder":
            this.setState({
              settings: {
                ... this.state.settings,
                placeholder: event.target.value
              }             
            })
        break;
        case "tooltip":
            this.setState({
              settings: {
                ... this.state.settings,
                tooltip: event.target.value
              }            
            })
        break;
        case "default_value":
            this.setState({
              settings: {
                ... this.state.settings,
                default_value: (  Number( event.target.value ) ? event.target.value : 0 )
              }
            })
        break;
        case "min_value":
            this.setState({
              settings: {
                ... this.state.settings,
                min_value: (  Number( event.target.value ) ? event.target.value : 0 )
              }
            })
        break;
        case "max_value":
            this.setState({
              settings: {
                ... this.state.settings,
                max_value: (  Number( event.target.value ) ? event.target.value : 0 )
              }
            })
        break;
        case "is_required":
            this.setState({
              is_required: event.target.checked
            })
        break;
        default:
          message.error('Something went wrong!');
          break;
      }
    }
    
    
      render(){
        return (
          <Form onSubmit={this.handleSubmit}>
            <FormItem label="Name" style={{marginBottom: "0px"}}>
            <Input prefix={<Icon type="mobile"
              style={{ fontSize: 13 }} />}
              placeholder=""
              name="name"
              value={this.state.name}
              onChange={this.onChange} />
            </FormItem>
            <FormItem label="Label" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13 }} />}
                placeholder="Field label"
                name="label"
                value={this.state.settings.label}
                onChange={this.onChange} />
            </FormItem>
            <FormItem label="Field name" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13 }} />}
                placeholder="Field name"
                name="field_name"
                value={this.state.settings.field_name}
                onChange={this.onChange} />
            </FormItem>
            <FormItem label="Placeholder" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13 }} />}
                placeholder="Placeholder"
                name="placeholder"
                value={this.state.settings.placeholder}
                onChange={this.onChange} />
            </FormItem>
            <FormItem label="Tooltip" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13 }} />}
                placeholder="Tooltip"
                name="tooltip"
                value={this.state.settings.tooltip}
                onChange={this.onChange} />
            </FormItem>
            <FormItem label="Default Value" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13 }} />}
                placeholder="Default Value"
                name="default_value"
                type="number" 
                value={this.state.settings.default_value}
                onChange={this.onChange} />
            </FormItem>
            <FormItem label="Min Value" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13}} />}
                placeholder="Min Value"
                name="min_value"
                type="number" 
                value={this.state.settings.min_value}
                onChange={this.onChange} />
            </FormItem>
            <FormItem label="Max Value" style={{marginBottom: "0px"}}>
              <Input prefix={<Icon type="mobile"
                style={{ fontSize: 13 }} />}
                placeholder="Max Value"
                name="max_value"
                type="number" 
                value={this.state.settings.max_value}
                onChange={this.onChange} />
            </FormItem>
            <FormItem style={{marginBottom: "0px"}}>
              <Checkbox name="is_required" onChange={this.onChange} checked={this.state.is_required} > <strong>Required</strong></Checkbox>
            </FormItem>
            <FormItem style={{marginBottom: "0px"}}>
              <Button onSubmit={this.handleSubmit} type="primary" htmlType="submit" style={{ width: "100%" }}>
                Save
              </Button>
            </FormItem>
          </Form>
        );
      }
  }