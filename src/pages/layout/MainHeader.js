import React from 'react'
import { withRouter } from 'react-router-dom'
import style from '../style'
import { Menu, Layout, Icon, Row, Col, Dropdown  } from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class MainHeader extends React.Component {
    constructor(props) {
      super(props)
      this.onClick  = this.onClick.bind(this)
      this.profileClick = this.profileClick.bind(this)
    }

    onClick(menu){
      this.props.history.push(menu.key)
    }

    profileClick(menu) {
      if(menu.key === "logout"){
        window.localStorage.removeItem("owline:token")
        this.props.history.push("/login")
      }
    }

    render(){
      const menu = (
        <Menu onClick={this.profileClick}>
            <Menu.Item key="profile">
              <a href="#">Profile</a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="logout">Logout</Menu.Item>
        </Menu>
      )
      return(
        <Header style={{ backgroundColor: "#fff"}}>
          <div style={style.logo} />
          <Row type="flex" justify="space-between">
          <Col span={22}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[this.props.selectedMenu]}
              style={{ lineHeight: '64px', fontSize: 14 }}
              onClick={this.onClick}
            >
              <Menu.Item key="/home">
                <Icon type="home" /> Home
              </Menu.Item>
              <Menu.Item key="/sheets">
                <Icon type="bars" /> Sheets
              </Menu.Item>
              <SubMenu title={<span><Icon type="usergroup-add" />Users</span>}>
                 <Menu.Item key="/users/web">
                   <Icon type="desktop" /> Web
                 </Menu.Item>
                 <Menu.Item key="/users/mobile">
                   <Icon type="mobile" /> Mobile
                 </Menu.Item>
             </SubMenu>
             <SubMenu title={<span><Icon type="layout" />Forms</span>}>
                <Menu.Item key="/forms">
                  <Icon type="bars" /> List
                </Menu.Item>
                <Menu.Item key="/forms/new">
                  <Icon type="edit" /> Studio
                </Menu.Item>
            </SubMenu>
            </Menu>
          </Col>
          <Col span={2}>
            <Dropdown overlay={menu} trigger={['click']}>
               <a className="ant-dropdown-link" href="#">
                 Said Aazzou <Icon type="down" />
               </a>
            </Dropdown>
          </Col>
        </Row>

        </Header>
      );
    }
}

export default withRouter(MainHeader)
