import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb } from 'antd';
import { observer } from 'mobx-react'

import IFormComponentsContainer from '../../containers/IFormComponentsContainer'
import IBreadcrumb from '../../components/Breadcrumb'
import IFormPhoneContainer from '../../containers/IFormPhoneContainer'
import IFormSettings from '../../containers/IFormSettings'
import { MainHeader, MainFooter } from '../layout'

import style from '../style'

const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
export default class IFormCreator extends React.Component {
  constructor (props){
    super(props)
    console.log(this.props.match.params.id)
  }

  render(){
    return(
        <Layout className="layout">
          <MainHeader selectedMenu="/forms/studio"/>
          <Content style={{ padding: '0 50px' }}>
            <IBreadcrumb />
            <div style={{ borderRadius: 5, background: '#fff', padding: 24, minHeight: 280 }}>
            <Row>
              <Col lg={6} style={{ marginLeft: 10}}>
                <IFormComponentsContainer />
              </Col>
              <Col lg={11} style={{ marginLeft: 10}}>
                <IFormPhoneContainer />
              </Col>
              <Col lg={6} style={{ marginLeft: 10 }}>
                <IFormSettings/>
              </Col>
            </Row>
          </div>
          </Content>
          <MainFooter />
        </Layout>
    );
  }
}
