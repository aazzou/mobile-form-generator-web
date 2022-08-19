import React from 'react'
import LoginForm from '../containers/Login'
import { Layout, Row, Col } from 'antd';

const { Content, Header } = Layout;


export default class Login extends React.Component {
  render(){
    return (
      <Layout  >
        <Layout >
          <Header style={{backgroundColor: "#fff", height: 300}}></Header>
          <Content style={{backgroundColor: "#fff"}} breakpoint="lg" >
            <Row>
              <Col lg={8}></Col>
              <Col lg={8} style={{backgroundColor: "#F0F2F5", padding: "25px", borderRadius: "10px"}}><LoginForm /></Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
