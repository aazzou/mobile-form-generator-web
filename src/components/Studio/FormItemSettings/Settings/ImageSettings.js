import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { Form, Icon, Input, Checkbox, message, InputNumber } from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../../store/MobileFormStore'
import { select } from 'async';

const FormItem = Form.Item;

@observer
export default class ImageSettings extends React.Component {
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
          default_value: ''
        },
      }
      this.onChange = this.onChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
    componentDidMount(nextProps){
      
    }
  
    handleSubmit(e) {
      e.preventDefault();
  
    }
  
    onChange(event) {
      
    }
    
    
      render(){
        return (
         <div>
            Image Settings.. in Progress
         </div>
        );
      }
  }

