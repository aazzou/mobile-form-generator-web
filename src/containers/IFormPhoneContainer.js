import React from 'react'
import { Card, Button, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { schemaGenerator } from './lib/SchemaGenerator'
import { notification, Icon } from 'antd';

import IFormStore from '../store/IFormStore'
import IFormListStore from '../store/IFormListStore'

import FormItem from '../components/IFormCreator/FormItem'
import FormItemsContainer from './FormItemsContainer'
import IphoneImgContainer from '../images/iphone.png'
import _ from 'lodash'

import gql from "graphql-tag";
import { graphql, Mutation, withApollo, compose } from "react-apollo";

const colors = {
  "title": "#FEE1E0",
  "logo": "#FFE7D8",
  "text": "#D5F2E5",
  "email": "#D0EBFA",
  "uniq_list": "#f9bdd3",
  "multi_list": "#FEDEEA",
  "bool": "#F5F5F5",
  "number": "#C4FCBE",
  "date": "#f1f2b3",
  "datetime": "#b2b080",
  "image": "#95B5F2",
  "geoloc": "#FF8E92"
}
const icons = {
  "title": "code-o",
  "logo": "apple-o",
  "text": "edit",
  "email": "mail",
  "uniq_list": "bars",
  "multi_list": "bars",
  "bool": "check-circle-o",
  "number": "calculator",
  "date": "calendar",
  "datetime": "clock-circle-o",
  "image": "camera-o",
  "geoloc": "environment-o"
}


const CREATE_FORM = gql`
  mutation createForm(
      $name: String!,
      $description: String,
      $jsonText: String
      ){
    createForm(input:{
      name: $name
      description: $description
      jsonText: $jsonText
    }
    companyId: 1){
        successful
        result{
          name
          jsonText
        }
        messages{
          message
          field
          code
        }
      }
  }
`


const UPDATE_FORM = gql`
  mutation updateForm(
        $id: Int!,
        $name: String!,
        $description: String,
        $jsonText: String
      ){
    updateForm(id: $id, input:{
      name: $name
      description: $description
      jsonText: $jsonText
    }){
        successful
        result{
          name
          jsonText
        }
        messages{
          message
          field
          code
        }
      }
  }
`


const GET_FORM = gql`
  query form($id: Int){
    form(id: $id){
      id
      name
      description
      json
    }
  }
`

@observer
 class IFormPhoneContainer extends React.Component {
  constructor (props){
    super(props)
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    console.log("++++++++++")
    if (this.props.location.state && this.props.location.state.is_new != undefined && !this.props.location.state.is_new){
      this.props.client.query({
        query: GET_FORM,
        variables: { id: this.props.location.state.id },
      }).then(
        result => {
          let jsonObject = JSON.parse(result.data.form.json)
          console.log("properties+++++++++++++++++")
          console.log(result.data)
          let formInfo = {
            id: result.data.form.id,
            name: result.data.form.name,
            description: result.data.form.description
          }

          IFormStore.setFormInfo(formInfo);

          if (jsonObject.properties) {
            console.log("not sorted")
            console.log(jsonObject.properties)
            let required_properties = jsonObject.required
            let properties_array = Object.keys(jsonObject.properties).map(key => jsonObject.properties[key])
            let sorted_properties = _.sortBy(properties_array, "propertyOrder")
            console.log("sorted")
            console.log(sorted_properties)

            console.log("required")
            console.log(required_properties)
            IFormStore.flush();
            sorted_properties.map((property) => {
              let index = IFormStore.formItemsCount + 1;
              let item = {
                id: index,
                type: property["type"],
                label: property["title"],
                sysname: `${property["sysname"]}`,
                selected: false,
                checked: _.includes(required_properties, property["sysname"]),
                icon: icons[property["type"]],
                color: colors[property["type"]],
                settings: ""
              }
              IFormStore.addFormItem(item);
            })
          } else {

          }
        }
      );
    }else {
      IFormStore.flush();
    }

  }

  onClick(){
    let items = IFormStore.formItems;
    let stringifyItems = schemaGenerator.generate(toJS(items));
    console.log(stringifyItems)
    let name = IFormStore.formInfo.name;
    let description =  IFormStore.formInfo.description;
    if (this.props.location.state.is_new != undefined && this.props.location.state.is_new){
      this.props.createForm({ variables: { name: name, description: description, jsonText: stringifyItems } })
        .then(() => {
          notification.open({
            message: 'Success',
            description: 'Saved successfuly',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
          })
        }
        )
    }else{
      this.props.updateForm({ variables: { id: this.props.location.state.id , name: name, description: description, jsonText: stringifyItems } })
        .then(() => {
          notification.open({
            message: 'Success',
            description: 'Updated successfuly',
            icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
          })
        }
        )
    }
    
  }


  render(){
    let title = IFormStore.formInfo.name;
    let description = IFormStore.formInfo.description;
    let formInfo = IFormStore.formInfo
    let saveButton = 
                    <Popconfirm  title="Are you sure you want to save changes"
                                  onConfirm={this.onClick} onCancel={() => console.log("cancel.")}
                                  okText="Yes"
                                  cancelText="No">
                                  <Button type="primary" icon="upload">Save</Button>
                     </Popconfirm>
    return(
      <Card title={title} description={description} extra={saveButton}>
      <div style={style.iphone_container}>
        <div style={style.text_holder}>
          <FormItemsContainer />
        </div>
      </div>
    </Card>
    );
  }
}

const style = {
  "container": {
    "backgroundColor": "#fff",
    "borderRadius": 5,
    "borderWidth": 5,
    "padding": 10,
    "margin": 10
  },
	"iphone_container": {
		"backgroundImage": `url(${IphoneImgContainer})`,
		"backgroundSize": "cover",
		"height": "790px",
		"width": "400px",
    "position": "relative",
    "margin-left": "20%"
	},
	"text_holder": {
		"position": "absolute",
		"width": "85%",
		"height": "600px",
		"zIndex": "2",
		"top": "100px",
		"left": "38px",
		"overflowY": "scroll",
		"overflowX": "hidden"
	}
}

// const CreateForm = graphql(
//   CREATE_FORM
// )(IFormPhoneContainer);

// export default withApollo(withRouter(CreateForm));


const FormMutations = compose(
  graphql(CREATE_FORM, {
    name: 'createForm'
  }),
  graphql(UPDATE_FORM, {
    name: 'updateForm'
  })
)(IFormPhoneContainer)

export default withApollo(withRouter(FormMutations));