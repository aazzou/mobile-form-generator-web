import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../store/IFormStore'

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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "title",
      label: `Title${index}`,
      sysname: `title${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.title,
      color: colors.title,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "logo",
      label: `Logo${index}`,
      sysname: `logo${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.logo,
      color: colors.logo,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "text",
      label: `Text${index}`,
      sysname: `text${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.text,
      color: colors.text,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "email",
      label: `Email${index}`,
      sysname: `email${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.email,
      color: colors.email,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "uniq_list",
      label: `UniqList${index}`,
      sysname: `uniq_list${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.uniq_list,
      color: colors.uniq_list,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "multi_list",
      label: `MultiList${index}`,
      sysname: `multi_list${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.multi_list,
      color: colors.multi_list,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "bool",
      label: `Bool${index}`,
      sysname: `bool${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.bool,
      color: colors.bool,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "number",
      label: `Number${index}`,
      sysname: `number${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.number,
      color: colors.number,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "date",
      label: `Date${index}`,
      sysname: `date${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.date,
      color: colors.date,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "datetime",
      label: `Datetime${index}`,
      sysname: `datetime${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.datetime,
      color: colors.datetime,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "image",
      label: `Image${index}`,
      sysname: `image${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.image,
      color: colors.image,
      settings: ""
    }

    IFormStore.addFormItem(item);
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
    let index = IFormStore.formItemsCount + 1;
    let item = {
      id: index,
      type: "geoloc",
      label: `Geoloc${index}`,
      sysname: `geoloc${index}`,
      selected: (index == 1),
      checked: false,
      icon: icons.geoloc,
      color: colors.geoloc,
      settings: ""
    }

    IFormStore.addFormItem(item);
  }

  render(){
    return(
      <FormItemButton color={colors.geoloc} onClick={this.handleClick}
                      icon={icons.geoloc} size="large" style={style}
                      name={names.geoloc} />
    )
  }
}
