import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb, Button, Table } from 'antd';
import { observer } from 'mobx-react'
import axios from 'axios'
import IBreadcrumb from '../../../components/Breadcrumb'
import { MainHeader, MainFooter } from '../../layout'

import style from '../../style'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;




const actions = (row) => {
  function details() {
    console.log("ID " + row.id)
  }

  function deleteUser(){
    console.log("ID " + row.id)
  }
  return (
    <ButtonGroup>
      <Button onClick={details} type="default" icon="search"/>
      <Button onClick={deleteUser} type="danger" icon="delete" />
    </ButtonGroup>
  )
}

const isActive = (status) => {
  if(status){
    return (
      <Icon type="check" />
    )
  }else {
    return (
      <Icon type="close" />
    )
  }
}
const columns = [
  { title: 'ID', dataIndex: 'inc', key: 'inc' },
  { title: 'Fullname', dataIndex: 'fullname', key: 'fullname' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: isActive },
  { title: 'Action', dataIndex: '', className: 'column-action', key: 'x', render: actions },
];


@observer
export default class WebUsers extends React.Component {
    constructor (props){
      super(props)
      this.state = {
        data: [],
        pagination: {},
        loading: false,
      };
      this.fetch = this.fetch.bind(this)
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
          pagination: pager,
        });
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          sortField: sorter.field,
          sortOrder: sorter.order,
          ...filters,
        });
    }

    fetch = (params = {}) => {
      console.log('params:', params);
      this.setState({ loading: true });
      axios.get('https://localhost:3000/api/users/web', {
        headers: {
          "Authorization": "Bearer " + window.localStorage.getItem("owline:token")
        }
      })
      .then( (response) => {
        const pagination = { ...this.state.pagination };
        this.setState({
          loading: false,
          data: response.data.users,
          pagination,
        });
      })
      .catch( (error) => {
        console.log("error")
        console.log(error);
      });
  }
  componentDidMount() {
    this.fetch();
  }
  render(){
    return(
        <Layout className="layout">
          <MainHeader selectedMenu="/users/web"/>
          <Content style={{ padding: '0 50px' }}>
            <IBreadcrumb />
            <div style={style.main}>
            <Row>
              <Col lg={24}>
                <Table
                  bordered
                  size="middle"
                  columns={columns}
                  rowKey={record => record.id}
                  dataSource={this.state.data}
                  pagination={this.state.pagination}
                  loading={this.state.loading}
                  onChange={this.handleTableChange}
                />
              </Col>
            </Row>
          </div>
          </Content>
          <MainFooter />
        </Layout>
    );
  }
}
