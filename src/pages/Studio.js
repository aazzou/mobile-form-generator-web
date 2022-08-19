import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb } from 'antd';
import { observer } from 'mobx-react'

import LeftContainer from '../containers/Studio/LeftContainer'
import RightContainer from '../containers/Studio/RightContainer'
import MainContainer from '../containers/Studio/MainContainer'


import style from './style'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
export default class Studio extends React.Component {
  constructor (props){
    super(props)
  }

  render(){
    return(
        <Layout className="layout">
          <Content style={{ padding: '0 50px' }}>
            <div style={{ borderRadius: 5, background: '#fff', padding: 24, minHeight: 280 }}>
            <Row>
              <Col lg={6} style={{ marginLeft: 10}}>
                <LeftContainer />
              </Col>
              <Col lg={11} style={{ marginLeft: 10}}>
                <MainContainer />
              </Col>
              <Col lg={6} style={{ marginLeft: 10 }}>
                <RightContainer/>
              </Col>
            </Row>
          </div>
          </Content>
        </Layout>
    );
  }
}
