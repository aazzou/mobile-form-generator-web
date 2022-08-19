import React from 'react'
import { Row, Col, Menu, Icon, Layout, Breadcrumb, Table, Dropdown, Button, Form, Input, Checkbox } from 'antd';
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { notification } from 'antd';

import { gql } from 'apollo-boost';
import { Query, withApollo } from 'react-apollo';

import IFormStore from '../../store/IFormStore'
import LoginStore from '../../store/LoginStore'

import { MainHeader, MainFooter } from '../layout'
import IBreadcrumb from '../../components/Breadcrumb'

import style from '../style'
const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const ButtonGroup = Button.Group;
const FormItem = Form.Item;


const MOBILE_FORMS_SEARCH = gql`
  query mobile_forms_search($nameEqual: String!, $companyIdEqual: Int!){
    mobile_forms_search(filter: {nameEqual:  $nameEqual, companyIdEqual: $companyIdEqual}){
      id
    }
  }
`

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

@observer
class IFormNew extends React.Component {
  constructor (props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let company_id = parseInt( window.localStorage.getItem("owline:company_id") );

        console.log( company_id );
        this.props.client.query({
          query: MOBILE_FORMS_SEARCH,
          variables: { nameEqual: values.formName, companyIdEqual: company_id },
        }).then(
          result => {
            if(result.data.mobile_forms_search.length > 0){
              notification['error']({
                message: 'Form already exist',
                description: 'A form with the same name already exist, please choose another name.',
              });
            }else{
              let formInfo = { id: 0, name: values.formName, description: values.formDescription }
              IFormStore.setFormInfo(formInfo)
              this.props.history.push("/forms/studio/new", { is_new: true } )
            }
          }
        );
      }
    });
  }

  render(){
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const formNameError = isFieldTouched('formName') && getFieldError('formName');
    return(
        <Layout className="layout">
          <MainHeader selectedMenu="/forms/new"/>
          <Content style={{ padding: '0 50px' }}>
            <IBreadcrumb />
            <div style={{borderRadius: 5, background: '#fff', padding: 24}}>
              <Row>
                <Form
                  onSubmit={this.handleSubmit}>
                  <FormItem
                    validateStatus={formNameError ? 'error' : ''}
                    help={formNameError || ''}
                  >
                      {getFieldDecorator('formName', {
                        rules: [{ required: true, message: 'Please input the form name!' }],
                      })(
                        <Input  style={{width: "100%"}} prefix={<Icon type="edit" style={{ fontSize: 13 }} />} placeholder="Form name" />
                      )}
                    </FormItem>
                  <FormItem>
                    {getFieldDecorator('formDescription')(
                      <Input style={{ width: "100%" }} prefix={<Icon type="bars" style={{ fontSize: 13 }} />} placeholder="Form description" />
                    )}
                      </FormItem>
                  <FormItem>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={hasErrors(getFieldsError())}
                      block
                    >
                      Go
                    </Button>
                  </FormItem>
              </Form>
              </Row>
          </div>
          </Content>
          <MainFooter />
        </Layout>
    );
  }
}

export default withApollo(withRouter(Form.create()(IFormNew)))
