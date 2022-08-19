import React from 'react'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import FormItem from '../components/IFormCreator/FormItem'
import { toJS } from 'mobx'
import { observer } from 'mobx-react'
import IFormStore from '../store/IFormStore'

const SortableItem = SortableElement(observer(({value}) =>
    <FormItem
        index={value.id}
        icon={value.icon}
        label={value.label}
        type={value.type}
        color={value.color}
        required={value.checked}
    />

));

const SortableList = SortableContainer(observer(({items}) => {
  return (
    <ul>
      {items.map((value, i) => (
        <SortableItem key={`item-${i}`} index={i} value={value} />
      ))}
    </ul>
  );
}));


@observer export default class IFormPhoneContainer extends React.Component {
  constructor (props){
    super(props)
  }
  onSortEnd = ({oldIndex, newIndex}) => {
    const items = IFormStore.formItems;
    const new_items = arrayMove(items , oldIndex, newIndex);
    if(JSON.stringify(toJS(items)) !== JSON.stringify(toJS(new_items)))
        IFormStore.replaceAllItems(arrayMove(items , oldIndex, newIndex));
  };

  render(){
    const items = IFormStore.formItems;
    return(
        <SortableList items={items} onSortEnd={this.onSortEnd} />
    );
  }
}
