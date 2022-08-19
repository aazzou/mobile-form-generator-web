import React from 'react'
import { Card, Divider } from 'antd';
import { observer } from 'mobx-react'
import { Tabs, Select, Icon } from 'antd';
import IFormStore from '../../../store/IFormStore'



@observer
export default class FormUsersSettings extends React.Component {
  render(){
      return(
          <div>
                <p>Users settings</p>
          </div>
      );
}
}
