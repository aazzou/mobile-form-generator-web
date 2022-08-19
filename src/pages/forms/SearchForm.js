import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { gql } from 'apollo-boost';
import { Query, withApollo } from 'react-apollo';

import IFormListStore from '../../store/IFormListStore'

const FormItem = Form.Item;

const FORMS_LIST = gql`
  query forms($keywords: String){
    forms(keywords: $keywords) {
      id
      name
      description
    }
  }
`

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SearchForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.client.query({
          query: FORMS_LIST,
          variables: { keywords: values.formName },
        }).then(
          result => {
            console.log("Response from forms count")
            console.log(result)

            IFormListStore.flush()
            result.data.forms.forEach((d) => {
              let index = IFormListStore.formsCount + 1;
              let item = {
                key: d.id,
                id: index,
                refId: d.id,
                name: d.name,
                description: d.description
              }

              IFormListStore.addForm(item)
            });
          }
        );
      }else{
        console.log('Received values of form: ', values);
        this.props.client.query({
          query: FORMS_LIST,
          variables: { keywords: values.formName },
        }).then(
          result => {
            console.log("Response from forms count")
            console.log(result)

            IFormListStore.flush()
            result.data.forms.forEach((d) => {
              let index = IFormListStore.formsCount + 1;
              let item = {
                key: d.id,
                id: index,
                refId: d.id,
                name: d.name,
                description: d.description
              }

              IFormListStore.addForm(item)
            });
          }
        );
      }
    });
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
      const formNameError = isFieldTouched('formName') && getFieldError('userName');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
                validateStatus={formNameError ? 'error' : ''}
                help={formNameError || ''}
        >
          {getFieldDecorator('formName', {
            rules: [{ required: true, message: 'Search a form name!' }],
          })(
            <Input prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Form name" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Search
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default withApollo(withRouter(Form.create()(SearchForm)));