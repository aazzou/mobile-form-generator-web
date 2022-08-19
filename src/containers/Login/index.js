import React from 'react'
import { Form, Icon, Input, Button, Checkbox, Row, Col, notification } from 'antd';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import LoginStore from '../../store/LoginStore'



import gql from "graphql-tag";
import { graphql, Mutation } from "react-apollo";



const FormItem = Form.Item;


const LOGIN_USER_QL = gql`
  mutation logged_in_user($email: String!, $password: String!){
    logged_in_user(auth: {email: $email, password: $password} ){
      ok,
      jwt,
      user {
        id
        email
      }
      company {
        id
        name
      }
      partner {
        id
        name
      }
    }
  }
`


class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        this.props.mutate({variables: {email: values.email, password: values.password}})
        .then((result) => { 
            if( result.data.logged_in_user ){
              LoginStore.authenticate({
                email: values.email,
                company: result.data.logged_in_user.company,
                partner: result.data.logged_in_user.partner,
                token: result.data.logged_in_user.jwt
              })
            console.log( result.data.logged_in_user )
            window.localStorage.setItem("owline:token", result.data.logged_in_user.jwt)
            window.localStorage.setItem("owline:company_id", result.data.logged_in_user.company.id)
            window.localStorage.setItem("owline:partner_id", result.data.logged_in_user.partner.id)
            
            try{
              let url_from = this.props.history.location.state.from.pathname;
              this.props.history.push(url_from)
            }catch(e){
              this.props.history.push("/home")
            }
            }else{
              notification["error"]({
                message: 'Wrong authentication',
                description: 'Wrong email/password, please try again.',
              });
            }
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Row>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                      <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="admin@company.com" />
                    )}
                  </FormItem>
                </Col>
                <Col span={24}>
                  <FormItem>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                    )}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: true,
                    })(
                      <Checkbox>Remember me</Checkbox>
                    )}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem>
                    <a className="login-form-forgot" href="">Forgot password</a>
                  </FormItem>
                </Col>
                <Col span={8} pull="right">
                <FormItem>
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{float: "right"}}>
                    Log in
                  </Button>
                </FormItem>
                </Col>
            </Row>
          </Form>
    );
  }
}

const LoginFormQL = graphql(
  LOGIN_USER_QL
)(LoginForm);

export default withRouter(Form.create()(LoginFormQL));
