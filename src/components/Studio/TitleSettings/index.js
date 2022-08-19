import React from 'react'
import { Card, Divider } from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../store/MobileFormStore'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';


const FormItem = Form.Item;


@observer
export default class TitleSettings extends React.Component {
    constructor(props) {
        super(props)
        if( this.props.mobileFormInfo ){
            this.state = {
                id: this.props.mobileFormInfo.id,
                name: this.props.mobileFormInfo.name,
                description: this.props.mobileFormInfo.description
            }
        }else {
            this.state = {
                id: 0,
                name: 'No Title',
                description: ''
            }
        }
        
        
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const { id, name, description } = this.state;

        let mobileFormInfo = {
            id: id,
            name: name,
            description: description
        }

        MobileFormStore.setMobileFormInfo( mobileFormInfo );
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
  render(){
      return(
          <div>
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
          </div>
      );
}
}
