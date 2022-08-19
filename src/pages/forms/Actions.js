import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb, Table, Dropdown, Button, Popconfirm, notification } from 'antd';
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import IFormListStore from '../../store/IFormListStore'

import gql from "graphql-tag";
import { graphql, Mutation } from "react-apollo";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;


const DELETE_FORM = gql`
  mutation deleteForm($id: Int!){
    deleteForm(id: $id){
      messages{
        message
        field
        code
      }
      successful
    }
  }
`


@observer
class Actions extends React.Component {
    constructor (props){
      super(props)
      console.log(this.props)
      this.handleShowClick = this.handleShowClick.bind(this)
      this.handleDeleteClick = this.handleDeleteClick.bind(this)
    }
  
    handleShowClick(){
      console.log("props")
      console.log(this.props)
      this.props.history.push("/forms/studio/" + this.props.record.refId, { id: this.props.record.refId, name: this.props.name, description: this.props.record.description, is_new: false })
    }

    handleDeleteClick(){
      let selectedForm = IFormListStore.getItem(this.props.id)
      console.log("Selected ITEM")
      console.log(selectedForm.refId)
      this.props.mutate({variables: {id: selectedForm.refId}})
        .then((result) => {
          console.log(result)
          if(result.data.deleteForm.successful){
            notification['success']({
              message: 'Delete successfuly',
              description: 'The record has been successfuly deleted.',
            });
            IFormListStore.deleteItem(this.props.id)
          }else{
            notification['error']({
              message: 'Error',
              description: 'An error occured while trying to delete this record.',
            });
          }
        }
      )
    }
  
    render(){
      return (
        <ButtonGroup>
          <Button type="default" icon="search" onClick={this.handleShowClick} />
          <Popconfirm  title="Are you sure you want to delete this record ?"
                                  onConfirm={this.handleDeleteClick} onCancel={() => console.log("cancel.")}
                                  okText="Yes"
                                  cancelText="No">
                                  <Button type="danger" icon="delete" />
          </Popconfirm>
        </ButtonGroup>
      )
    }
  }
  

const DeleteForm = graphql(
    DELETE_FORM
)(Actions);

export default withRouter(DeleteForm)