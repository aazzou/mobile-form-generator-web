import React from 'react'
import { Card, Button, Popconfirm } from 'antd';
import { withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import { notification, Icon } from 'antd';
import Mobile from '../../components/Studio/Mobile'

import MobileFormStore from '../../store/MobileFormStore'

import IphoneImgContainer from '../../images/iphone.png'
import _ from 'lodash'



@observer
export default class MainContainer extends React.Component {
  constructor (props){
    super(props)
  }
  componentDidMount() {

  }
  
  onClick(){
    console.log(  "Submit clicked" );
  }



  render(){
    let title = MobileFormStore.mobileFormInfo.name;
    let description = MobileFormStore.mobileFormInfo.description;
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
          <Mobile />
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
		"width": "95%",
		"height": "600px",
		"zIndex": "2",
		"top": "100px",
		"overflowY": "scroll",
		"overflowX": "hidden"
	}
}
