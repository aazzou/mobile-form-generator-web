import React from 'react'
import { Card, Divider } from 'antd';
import { observer } from 'mobx-react'
import { Tabs, Select, Icon } from 'antd';
import ItemSettings from './ItemSettings'
import MobileFormStore from '../../../store/MobileFormStore'
import { select } from 'async';



@observer
export default class FormItemSettings extends React.Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        
      }
    
    onChange(event) {
        
    }

    render(){
        let selectedItem = MobileFormStore.selectedItem;
        if( selectedItem ){
            return(
                <ItemSettings selectedItem={ selectedItem }/>
           );
        }else {
            return(
                <div>
                    <p>Empty</p>
               </div>
           );
        }
       
}
}
