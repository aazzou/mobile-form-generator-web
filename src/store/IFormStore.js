import { observable, action, computed } from 'mobx'

class IFormStore {
  @observable formInfo = {
    id: 0,
    name: "No title",
    description: "No description"
  }
  
  @observable formItems = []

  @action flush(){
    this.formItems = []
  }

  @action setFormInfo(formInfo){
    this.formInfo = formInfo;
  }

  @action addFormItem(item) {
    this.formItems.push({
      id: item.id,
      type: item.type,
      label: item.label,
      sysname: item.sysname,
      selected: item.selected,
      checked: item.checked,
      icon: item.icon,
      color: item.color,
      settings: item.settings
    });
  }

  @action replaceAllItems(items){
    this.formItems = items;
    console.log(this.formItems);
  }

  @action setSelectedOnElement(id) {
    let items = this.formItems;
    // set existing element to false
    let item = items.filter(function(tm){
      return tm.selected;
    });

    if(item.length > 0) {
      for(const itm in item){
        item[itm].selected = false;
      }
    }

    let to_select_item = items.filter(function(tm){
      return tm.id === id;
    });
    if(to_select_item.length > 0) {
      var index = items.indexOf(to_select_item[0]);
      items[index].selected = true;
    }

    this.formItems = items;
  }

  @action getSelectedItem(){
    let items = this.formItems;
    // set existing element to false
    let item = items.filter(function (tm) {
      return tm.selected;
    });

    return item[0];
  }

  @action setFormItemSettings(id, label, sysname, required){
    let items = this.formItems;

    let to_select_item = items.filter(function(tm){
      return tm.id === id;
    });

    if(to_select_item.length > 0) {
      let item = to_select_item[0]
      //var index = items.indexOf(to_select_item[0]);
      item.label = label;
      item.sysname = sysname;
      item.checked = required;
    }

    this.formItems = items;

    console.log("updated settings")
  }

  @action deleteItem(id){
    let items = this.formItems;

    let result = items.filter(function(item){
      return item.id === id;
    });

    if(result.length > 0){
      items.splice(items.indexOf(result[0]), 1)
    }

    this.formItems = items;
    console.log("Items :");
    console.log(items);
  }

  @computed get selectedItem() {
    let items = this.formItems;
    let result = items.filter(function(item){
      return item.selected;
    });

    if(result.length > 0) return result[0];
    else return items[0];
  }

  @computed get formItemsCount  (){
    console.log("triggered formItemsCount");
    return this.formItems.length;
  }
}


export default new IFormStore();
