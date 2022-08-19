import React from 'react'
import { Card, Button, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { notification, Icon } from 'antd';
import FormItemList from './FormItemList'

import MobileFormStore from '../../../store/MobileFormStore'
import _ from 'lodash'


const colors = {
  "title": "#FEE1E0",
  "logo": "#FFE7D8",
  "text": "#D5F2E5",
  "email": "#D0EBFA",
  "uniq_list": "#f9bdd3",
  "multi_list": "#FEDEEA",
  "bool": "#F5F5F5",
  "number": "#C4FCBE",
  "date": "#f1f2b3",
  "datetime": "#b2b080",
  "image": "#95B5F2",
  "geoloc": "#FF8E92"
}
const icons = {
  "title": "code-o",
  "logo": "apple-o",
  "text": "edit",
  "email": "mail",
  "uniq_list": "bars",
  "multi_list": "bars",
  "bool": "check-circle-o",
  "number": "calculator",
  "date": "calendar",
  "datetime": "clock-circle-o",
  "image": "camera-o",
  "geoloc": "environment-o"
}






@observer
 export default class Mobile extends React.Component {
  constructor (props){
    super(props)
  }

  render(){
    return(
          <FormItemList />
    );
  }
}
