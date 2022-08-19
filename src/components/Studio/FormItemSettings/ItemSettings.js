import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { Form, Icon, Input, Checkbox, message, InputNumber } from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../store/MobileFormStore'
import { TitleSettings
  , LogoSettings
  , TextSettings
  , NumberSettings
  , EmailSettings
  , UniqListSettings
  , MultiListSettings
  , ImageSettings
  , GeolocSettings
  , DateSettings
  , DatetimeSettings
  , BoolSettings } from './Settings'

import { select } from 'async';

const FormItem = Form.Item;


  


const config = {
  "title": {
      "class": TitleSettings
  },
  "logo": {
      "class": LogoSettings
  },
  "text": {
      "class": TextSettings
  },
  "number": {
    "class": NumberSettings
  },
  "email": {
    "class": EmailSettings
  },
  "uniq_list": {
    "class": UniqListSettings
  },
  "multi_list": {
    "class": MultiListSettings
  },
  "bool": {
    "class": BoolSettings
  },
  "image": {
    "class": ImageSettings
  },
  "date": {
    "class": DateSettings
  },
  "datetime": {
    "class": DatetimeSettings
  },
  "geoloc": {
    "class": GeolocSettings
  }
}

@observer
export default class ItemSettings extends React.Component {
  constructor (props){
    super(props);
    this.state = {
        selectedItem: this.props.selectedItem
    }
  }
  
  render(){
    let selectedItem = MobileFormStore.selectedItem;
    let ItemClass = config[ selectedItem.type ].class;
    return (
        <ItemClass />
    )
  }
}
