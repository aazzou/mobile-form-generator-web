import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const CREATE_FORM = gql`
  mutation{
    createForm(input:{
      name: "Recrutement 20"
      description: "Recrutement form"
      : "{ schema: { name: { type: 'string', title: 'Name', required: true }, age: { type: 'number', title: 'Age'} }}"
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

export default graphql(CREATE_FORM, { name: 'createForm' })(CreateForm)