import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { Form, Icon, Input, Checkbox, message, InputNumber } from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../../store/MobileFormStore'
import { select } from 'async';

const FormItem = Form.Item;

@observer
export default class LogoSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      settings: {
        url: ''
      },
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(nextProps){
    let selectedItem = MobileFormStore.selectedItem;
    if(selectedItem != undefined){
      this.setState({
        id: selectedItem.id,
        name: selectedItem.name,
        settings: ( Object.keys(selectedItem.settings).length === 0 ? this.state.settings : selectedItem.settings )
      })
    } 
  }

  handleSubmit(e) {
    e.preventDefault();

    const { id, name, settings } = this.state;

    MobileFormStore.setMobileFormItemSettings(id, name, settings);
  }

  onChange(event) {
    switch (event.target.name) {
      case "name":
          this.setState({
            name: event.target.value
          })
          break;
      case "logo_link":
        this.setState({
          settings: {
            ... this.state.settings,
            url: event.target.value
          }
        })
        break;
      default:
        message.error('Something went wrong!');
        break;
    }
  }
    render(){
      return (
        <Form onSubmit={this.handleSubmit} style={{marginBottom: "0px"}}>
          <FormItem label="Name" style={{marginBottom: "0px"}}>
            <Input prefix={<Icon type="mobile"
              style={{ fontSize: 13 }} />}
              placeholder=""
              name="name"
              value={this.state.name}
              onChange={this.onChange} />
            </FormItem>
          <FormItem label="Logo Link">
            <Input prefix={<Icon type="mobile"
              style={{ fontSize: 13 }} />}
              placeholder="Logo Link URL"
              name="logo_link"
              value={this.state.settings.url}
              onChange={this.onChange} />
          </FormItem>
          <FormItem>
            <Button onSubmit={this.handleSubmit} type="primary" htmlType="submit" style={{ width: "100%" }}>
              Save
            </Button>
          </FormItem>
        </Form>
      );
    }
}