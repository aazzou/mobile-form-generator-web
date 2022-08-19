import React from 'react'
import {  Card, Divider } from 'antd';
import { observer } from 'mobx-react'
import { Tabs, Select, Icon } from 'antd';
import MobileFormStore from '../../store/MobileFormStore'

import FormItemSettings from '../../components/Studio/FormItemSettings'
import FormUsersSettings from '../../components/Studio/FormUsersSettings'

const TabPane = Tabs.TabPane;

@observer
export default class RightContainer extends React.Component {
  render(){
      return(
        <Tabs tabPosition="top">
             <TabPane tab={<span><Icon type="setting" />Settings</span>} key="1">
                    <FormItemSettings />
             </TabPane>
             <TabPane tab={<span><Icon type="user" />Users</span>} key="2">
                    <FormUsersSettings />
             </TabPane>
        </Tabs>
      );
}
}