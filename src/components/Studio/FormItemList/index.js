import React from 'react'
import { Card, Divider } from 'antd';
import { observer } from 'mobx-react'
import { Tabs, Select, Icon } from 'antd';
import IFormStore from '../../../store/IFormStore'

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
    GeolocFormItemButton } from './FormItemButton'


@observer
export default class FormItemList extends React.Component {
  render(){
      return(
          <div>
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
          </div>
      );
}
}
