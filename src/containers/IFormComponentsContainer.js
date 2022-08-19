import React from 'react'
import { Card } from 'antd';
import { observer } from 'mobx-react'
import { Tabs, Select, Icon } from 'antd';
import FormTitleSettings from '../components/IFormCreator/FormTitleSettings'
import IFormStore from '../store/IFormStore'



import { TitleFormItemButton,
         LogoFormItemButton,
         TextFormItemButton,
         EmailFormItemButton,
         UniqListFormItemButton,
         MultiListFormItemButton,
         BoolFormItemButton,
         NumberFormItemButton,
         DateFormItemButton,
         DatetimeFormItemButton,
         ImageFormItemButton,
         GeolocFormItemButton } from '../components/IFormCreator/FormItemButton'

const TabPane = Tabs.TabPane;
const Option = Select.Option;

@observer
export default class IFormComponentsContainer extends React.Component {
  render(){
    let formInfo = IFormStore.formInfo;
    return(
      <Tabs tabPosition="top">
          <TabPane tab={<span><Icon type="" />Components</span>} key="1">
            <TitleFormItemButton />
            <LogoFormItemButton />
            <TextFormItemButton />
            <EmailFormItemButton />
            <UniqListFormItemButton />
            <MultiListFormItemButton />
            <BoolFormItemButton />
            <NumberFormItemButton />
            <DateFormItemButton />
            <DatetimeFormItemButton />
            <ImageFormItemButton />
            <GeolocFormItemButton />
          </TabPane>
          <TabPane tab={<span><Icon type="mobile" />Title</span>} key="2">
            <FormTitleSettings formInfo={formInfo} />
          </TabPane>
        </Tabs>

    );
  }
}
