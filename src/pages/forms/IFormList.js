import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb, Table, Dropdown, Button, message } from 'antd';
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { toJS } from 'mobx'

import { MainHeader, MainFooter } from '../layout'
import Actions from './Actions'
import SearchForm from './SearchForm'
import IBreadcrumb from '../../components/Breadcrumb'

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import IFormListStore from '../../store/IFormListStore'

import { graphql, Mutation } from "react-apollo";

import style from '../style'
const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;





const FORMS_LIST = gql`
  query {
    forms {
      id
      name
      description
    }
  }
`

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
  { title: 'Action', dataIndex: '', key: 'x', render: (record) => <Actions record={record} id={record.id} name={record.name}  /> },
];

// const FormList = (history) => (
  
// )


@observer
class FormList extends React.Component {
  
  render(){
    let forms = toJS(IFormListStore.forms)
    console.log(forms)
    console.log("forrrrrms")
    return (
      <Table
        columns={columns}
        dataSource={forms}
        bordered
      />
    )
  }
}




@observer
class IFormList extends React.Component {
  constructor (props){
    super(props)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleShowClick = this.handleShowClick.bind(this)
  }

  componentDidMount() {
    console.log('GrandChild did mount.');
    console.log("pros")
    this.props.data.refetch().then((result) => {
      IFormListStore.flush()
      result.data.forms.forEach((d) => {
        let index = IFormListStore.formsCount + 1;
        let item = {
          key: d.id,
          id: index,
          refId: d.id,
          name: d.name,
          description: d.description
        }

        IFormListStore.addForm(item)
        console.log(IFormListStore.forms)
      });
    });
    
  }

  
  handleAddClick(){
    this.props.history.push("/forms/new")
  }

  handleShowClick(id){
    this.props.history.push("/forms/studio/" + id)
  }

  render(){
    return(
        <Layout className="layout">
          <MainHeader selectedMenu="/forms"/>
          <Content style={{ padding: '0 50px' }}>
          <IBreadcrumb />
            <div style={style.main}>
              <Row>
                <Col lg={18} style={{marginBottom: 10}}>
                  <Button onClick={this.handleAddClick} type="primary" icon="plus">Add</Button>
                </Col>
                <Col lg={6} style={{ marginBottom: 10 }}>
                  <SearchForm />
                </Col>
                <Col lg={24}>
                  <FormList handleShowClick={this.handleAddClick} history={this.props.history} />
                </Col>  
              </Row>
          </div>
          </Content>
          <MainFooter />
        </Layout>
    );
  }
}

const ListForm = graphql(
  FORMS_LIST
)(IFormList);

export default withRouter(ListForm)
