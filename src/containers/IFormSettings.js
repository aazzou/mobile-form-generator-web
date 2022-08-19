import React from 'react'
import { Card } from 'antd';
import { observer } from 'mobx-react'

import { Tabs, Select, Icon } from 'antd';


import FormSettings from '../components/IFormCreator/FormSettings'
import MobileUsersList from '../components/IFormCreator/MobileUsersList'
import IFormStore from '../store/IFormStore'


const TabPane = Tabs.TabPane;
const Option = Select.Option;


@observer
export default class IFormSettings extends React.Component {
  
  render(){
    console.log("Hello")
    let item = IFormStore.selectedItem;
    let formInfo = IFormStore.formInfo;
    if(item !== undefined){
      return(
        <Tabs tabPosition="top">
          <TabPane tab={<span><Icon type="setting" />Settings</span>} key="1">
            <FormSettings id={item.id} label={item.label} sysname={item.sysname} required={item.required}/>
          </TabPane>
          <TabPane tab={<span><Icon type="user" />Users</span>} key="2">
            <MobileUsersList formInfo={formInfo} />
          </TabPane>
        </Tabs>
      );
    }else{
      return(
          <Tabs tabPosition="top">
            <TabPane tab={<span><Icon type="setting" />Settings</span>} key="1">
              <FormSettings />
            </TabPane>
            <TabPane tab={<span><Icon type="user" />Users</span>} key="2">
              <MobileUsersList formInfo={formInfo} />
            </TabPane>
          </Tabs>
      );
    }

  }
}
