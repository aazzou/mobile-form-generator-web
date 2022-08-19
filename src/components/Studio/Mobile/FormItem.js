import React from 'react'
import { Row, Col, Button, Popconfirm, message, Icon } from 'antd';
import { observer } from 'mobx-react'
import MobileFormStore from '../../../store/MobileFormStore'

@observer
export default class FormItem extends React.Component {
  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.cancel = this.cancel.bind(this)
    this.delete = this.delete.bind(this)
  }

  handleClick(){
    const index = this.props.index;
    console.log( "Set selected " + index);
    MobileFormStore.setSelectedOnElement(index);
  }

  cancel(e) {
    console.log("Cancel");
  }

  delete(){
    const index = this.props.index
    MobileFormStore.deleteItem(index);
    message.success('Item deleted');
  }

  render(){
    return(
      <Row
        style={{padding: 10,
                marginBottom: 5,
                borderWidth: 5,
                borderRadius: 10,
                background: this.props.color,
                width: "98%"}}>
        <Col lg={2}>
            <Icon type={this.props.icon}></Icon>
        </Col>
        <Col lg={10}>
          {this.props.name} {this.props.is_required? '(*)' : ''}
        </Col>
        <Col lg={6} >
          {this.props.type}
        </Col>
        <Col lg={6}>
          <Button onClick={this.handleClick} type="default" shape="circle" icon="edit" />
          <Popconfirm title="Are you sure delete this item?"
                      onConfirm={this.delete} onCancel={this.cancel}
                      okText="Yes"
                      cancelText="No">
          <Button type="danger" shape="circle" icon="delete" />
          </Popconfirm>
        </Col>
      </Row>
  );
  }
}
