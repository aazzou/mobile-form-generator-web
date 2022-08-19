import React from 'react'
import { Row, Col, Button, Tag} from 'antd';
import { observer } from 'mobx-react'
import IFormStore from '../../../store/IFormStore'

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


class ItemHeaderText extends React.Component {
  constructor (props){
    super(props);
  }

  render(){
    return(
      <Row>
        <Col lg={24} style={{ borderRadius: "10px", border: "1px solid", borderColor: this.props.config.color, padding: "10px", textAlign: "center" }}>
            { names[ this.props.config.type ] } Settings
        </Col>
      </Row>
    )
  }
}

export default ItemHeaderText;