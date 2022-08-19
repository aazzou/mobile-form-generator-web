import React from 'react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import FormItem from './FormItem'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import MobileFormStore from '../../../store/MobileFormStore'

const SortableItem = SortableElement(observer(({value}) =>
    <FormItem
        index={value.id}
        icon={value.icon}
        name={value.name}
        type={value.type}
        color={value.color}
        is_required={value.is_required}
    />

));

const SortableList = SortableContainer(observer(({items}) => {
  console.log( items );
  return (
    <ul>
      {items.map((value, i) => (
        <SortableItem key={`item-${i}`} index={i} value={value} />
      ))}
    </ul>
  );
}));


@observer export default class FormItemList extends React.Component {
  constructor (props){
    super(props)
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    const items = MobileFormStore.mobileFormItems;
    const new_items = arrayMove(items , oldIndex, newIndex);
    if(JSON.stringify(toJS(items)) !== JSON.stringify(toJS(new_items)))
        MobileFormStore.replaceAllItems(arrayMove(items , oldIndex, newIndex));
  };

  render(){
    const items = MobileFormStore.mobileFormItems;
    return(
        <SortableList items={items} onSortEnd={this.onSortEnd} />
    );
  }
}
