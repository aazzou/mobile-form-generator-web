import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb } from 'antd';
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import IFormComponentsContainer from '../containers/IFormComponentsContainer'
import IFormPhoneContainer from '../containers/IFormPhoneContainer'
import IFormSettings from '../containers/IFormSettings'
import IBreadcrumb from '../components/Breadcrumb'
import { MainHeader, MainFooter } from './layout'

import style from './style'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
class Home extends React.Component {
  render(){
    let token = window.localStorage.getItem("owline:token");
    return(
        <Layout className="layout">
          <MainHeader selectedMenu="/home"/>
          <Content style={{ padding: '0 50px' }}>
            <IBreadcrumb />
            <div style={style.main}>
            <Row>
              <Col lg={24}>
                  Hello World
              </Col>
            </Row>
          </div>
          </Content>
          <MainFooter />
        </Layout>
    );
  }
}

export default withRouter(Home)

