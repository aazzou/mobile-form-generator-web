import React from 'react'
import {  Card, Divider } from 'antd';
import { observer } from 'mobx-react'
import { Tabs, Select, Icon } from 'antd';
import IFormStore from '../../store/IFormStore'

import FormItemList from '../../components/Studio/FormItemList'
import TitleSettings from '../../components/Studio/TitleSettings'

const TabPane = Tabs.TabPane;

@observer
export default class LeftContainer extends React.Component {
  render(){
      return(
        <Tabs tabPosition="top">
             <TabPane tab={<span><Icon type="" />Components</span>} key="1">
                    <FormItemList />
             </TabPane>
             <TabPane tab={<span><Icon type="mobile" />Title</span>} key="2">
                    <TitleSettings />
             </TabPane>
        </Tabs>
      );
}
}
