import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../store/MobileFormStore'

const names = {
  "title": "Title",
  "logo": "Logo",
  "text": "Text",
  "email": "Email",
  "uniq_list": "Unique List",
  "multi_list": "Multiple List",
  "bool": "Boolean",
  "number": "Number",
  "date": "Date",
  "datetime": "Datetime",
  "image": "Image",
  "geoloc": "Geolocation"
}
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

const style = {
  width: "100%",
  marginBottom: 5,
  textAlign: "left"
}


class FormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return(
      <Row>
        <Col lg={3}>
          <Tag style={{height: 32}} color={this.props.color}></Tag>
        </Col>
        <Col lg={21}>
          <Button onClick={this.props.onClick}
                  icon={this.props.icon} size={this.props.size} style={this.props.style}>{this.props.name}</Button>
        </Col>
      </Row>
    )
  }
}

@observer export class TitleFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "title",
      name: `Title${index}`,
      field_name: `title${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.title,
      color: colors.title,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);

  }

  render(){
    return(
      <FormItemButton color={colors.title} onClick={this.handleClick}
                      icon={icons.title} size="large" style={style}
                      name={names.title} />
    )
  }
}

export class LogoFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "logo",
      name: `Logo${index}`,
      field_name: `logo${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.logo,
      color: colors.logo,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }
  render(){
    return(
      <FormItemButton color={colors.logo} onClick={this.handleClick}
                      icon={icons.logo} size="large" style={style}
                      name={names.logo} />
    )
  }
}

export class TextFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "text",
      name: `Text${index}`,
      field_name: `text${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.text,
      color: colors.text,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.text} onClick={this.handleClick}
                      icon={icons.text} size="large" style={style}
                      name={names.text} />
    )
  }
}

export class EmailFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "email",
      name: `Email${index}`,
      field_name: `email${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.email,
      color: colors.email,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.email} onClick={this.handleClick}
                      icon={icons.email} size="large" style={style}
                      name={names.email} />
    )
  }
}

export class UniqListFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "uniq_list",
      name: `UniqList${index}`,
      field_name: `uniq_list${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.uniq_list,
      color: colors.uniq_list,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }
  

  render(){
    return(
      <FormItemButton color={colors.uniq_list} onClick={this.handleClick}
                      icon={icons.uniq_list} size="large" style={style}
                      name={names.uniq_list} />
    )
  }
}

export class MultiListFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "multi_list",
      name: `MultiList${index}`,
      field_name: `multi_list${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.multi_list,
      color: colors.multi_list,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }
  render(){
    return(
      <FormItemButton color={colors.multi_list} onClick={this.handleClick}
                      icon={icons.multi_list} size="large" style={style}
                      name={names.multi_list} />
    )
  }
}

export class BoolFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "bool",
      name: `Bool${index}`,
      field_name: `bool${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.bool,
      color: colors.bool,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.bool} onClick={this.handleClick}
                      icon={icons.bool} size="large" style={style}
                      name={names.bool} />
    )
  }
}

export class NumberFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "number",
      name: `Number${index}`,
      field_name: `number${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.number,
      color: colors.number,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.number} onClick={this.handleClick}
                      icon={icons.number} size="large" style={style}
                      name={names.number} />
    )
  }
}

export class DateFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "date",
      name: `Date${index}`,
      field_name: `date${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.date,
      color: colors.date,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.date} onClick={this.handleClick}
                      icon={icons.date} size="large" style={style}
                      name={names.date} />
    )
  }
}

export class DatetimeFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "datetime",
      name: `Datetime${index}`,
      field_name: `datetime${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.datetime,
      color: colors.datetime,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.datetime} onClick={this.handleClick}
                      icon={icons.datetime} size="large" style={style}
                      name={names.datetime} />
    )
  }
}

export class ImageFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "image",
      name: `Image${index}`,
      field_name: `image${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.image,
      color: colors.image,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }


  render(){
    return(
      <FormItemButton color={colors.image} onClick={this.handleClick}
                      icon={icons.image} size="large" style={style}
                      name={names.image} />
    )
  }
}

export class GeolocFormItemButton extends React.Component {
  constructor (props){
    super(props);
  }

  handleClick(){
    let index = MobileFormStore.mobileFormItemsCount + 1;
    let item = {
      id: index,
      type: "geoloc",
      name: `Geoloc${index}`,
      field_name: `geoloc${index}`,
      is_selected: (index == 1),
      is_required: false,
      icon: icons.geoloc,
      color: colors.geoloc,
      settings: {}
    }

    MobileFormStore.addMobileFormItem(item);
    MobileFormStore.setSelectedOnElement(index);
  }

  render(){
    return(
      <FormItemButton color={colors.geoloc} onClick={this.handleClick}
                      icon={icons.geoloc} size="large" style={style}
                      name={names.geoloc} />
    )
  }
}
