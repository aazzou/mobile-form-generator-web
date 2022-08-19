import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb, Table, Dropdown, Button } from 'antd';
import { observer } from 'mobx-react'

import IFormComponentsContainer from '../containers/IFormComponentsContainer'
import IFormPhoneContainer from '../containers/IFormPhoneContainer'
import IFormSettings from '../containers/IFormSettings'
import IBreadcrumb from '../components/Breadcrumb'
import { MainHeader, MainFooter } from './layout'

import style from './style'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;


const actions = () => {
  return (
    <ButtonGroup>
      <Button type="default" icon="search" />
      <Button type="danger" icon="delete" />
    </ButtonGroup>
  )
}
const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Mobile User', dataIndex: 'mobile_user', key: 'mobile_user' },
  { title: 'Form', dataIndex: 'form', key: 'form' },
  { title: 'Action', dataIndex: '', className: 'column-action', key: 'x', render: actions },
];

const data = [
  { key: 1, id: '203100', date: "24/11/2017 19:40", mobile_user: 'Yassine Alaoui', form: 'Visite Chantier', 'more': 'More..' },
];


@observer
export default class Sheets extends React.Component {
  render(){
    return(
        <Layout className="layout">
          <MainHeader selectedMenu="/sheets"/>
          <Content style={{ padding: '0 50px' }}>
          <IBreadcrumb />
            <div style={style.main}>
            <Row>
              <Col lg={24}>
                <Table
                  columns={columns}
                  expandedRowRender={record => <p>{record.more}</p>}
                  dataSource={data}
                  bordered
                  size="middle"
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
