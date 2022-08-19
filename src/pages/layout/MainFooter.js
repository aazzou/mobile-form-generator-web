import React from 'react'
import { Layout } from 'antd';
import style from '../style'

const { Footer } = Layout;

export default class MainFooter extends React.Component {
    render(){
      return(
        <Footer style={{ textAlign: 'center' }}>
          aazzou.link © 2016
        </Footer>
      );
    }
}
