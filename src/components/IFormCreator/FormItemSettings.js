import React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../store/IFormStore'
import { select } from 'async';

import { TitleSettings, LogoSettings, TextSettings, NumberSettings, EmailSettings, BoolSettings, DateSettings, DateTimeSettings, GeolocSettings, ImageSettings, UniqListSettings, MultiListSettings } from './ItemSettings/'
import ItemHeaderText from './ItemSettings/ItemHeaderText'

const FormItem = Form.Item;

const fields_config = {
    "title": {
      "content": "string"
    },
    "logo": {
      "link": "string"
    },
    "text": {
      "label": "string",
      "field_name": "string",
      "required": "boolean",
      "placeholder": "string",
      "description": "string",
      "tooltip": "string",
      "default_value": "string"
    },
    "number": {
      "label": "string",
      "field_name": "string",
      "required": "boolean",
      "placeholder": "string",
      "description": "string",
      "tooltip": "string",
      "default_value": "string"
    },
    "email": {
      "label": "string",
      "field_name": "string",
      "required": "boolean",
      "placeholder": "string",
      "description": "string",
      "tooltip": "string",
      "default_value": "string"
    },
    "uniq_list": {
      "label": "string",
      "field_name": "string",
      "required": "boolean",
      "list_elements": [],
      "tooltip": "string",
      "default_value": "string"
    },
    "multi_list": {
      "label": "string",
      "field_name": "string",
      "required": "boolean",
      "list_elements": [],
      "tooltip": "string",
      "default_value": "string"
    },
    "bool": {
      "label": "string",
      "field_name": "string",
      "required": "boolean",
      "default_value": "boolean"
    },
    "date": {
      
    },
    "datetime": {
      
    },
    "image": {
      
    },
    "geoloc": {
      
    }
  }
  

@observer
class FormItemSettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.config
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

  onChange(event) {
    
  }


  render() {
      console.log( "Rwiiiina" );
      console.log( this.props.config )
      if( this.props.config ) {
          switch( this.props.config.type ){
            case "title": 
                return( 
                <div>
                  <ItemHeaderText config={ this.props.config } />
                  <TitleSettings config={ this.props.config } /> 
                </div>)
            break;
            case "logo": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <LogoSettings config={ this.props.config }  /> 
                  </div>
                    )
            break;
            case "text": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <TextSettings config={ this.props.config }  /> 
                  </div>
                
                )
            break;
            case "email": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <EmailSettings config={ this.props.config }  /> 
                  </div>  
                  )
            break;
            case "uniq_list": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <UniqListSettings config={ this.props.config }  /> 
                  </div>
                  )
            break;
            case "multi_list": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <MultiListSettings config={ this.props.config }  /> 
                  </div>
                  )
            break;
            case "bool": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <BoolSettings config={ this.props.config }  /> 
                  </div>  
                  )
            break;
            case "number": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <NumberSettings config={ this.props.config }  /> 
                  </div>
                )
            break;
            case "date": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <DateSettings config={ this.props.config }  /> 
                  </div>
                  )
            break;
            case "datetime": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <DateTimeSettings config={ this.props.config }  /> 
                  </div>
                  )
            break;
            case "image": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <ImageSettings config={ this.props.config }  /> 
                  </div>  
                  )
            break;
            case "geoloc": 
                return( 
                  <div>
                    <ItemHeaderText config={ this.props.config } />
                    <GeolocSettings config={ this.props.config }  /> 
                  </div>  
                )
            break;
          }
      }
    return (
        <div></div>
    );
  }
}

export default Form.create()(FormItemSettings);
