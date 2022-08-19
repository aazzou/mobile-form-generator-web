import React from 'react'
import style from '../style'
import { Layout, Breadcrumb } from 'antd';

const { Content, Row } = Layout;

export default class MainContent extends React.Component {
    render(){
      return(
        <Content style={{ padding: '0 50px' }}>
          {this.props.children}
        </Content>
      );
    }
}
