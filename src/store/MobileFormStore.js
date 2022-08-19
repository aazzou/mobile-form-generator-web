import { observable, action, computed } from 'mobx'

class MobileFormStore {
  @observable mobileFormInfo = {
    id: 0,
    name: "No title",
    description: "No description"
  }
  
  @observable mobileFormItems = []

  @action flush(){
    this.mobileFormItems = []
  }

  @action setMobileFormInfo(mobileFormInfo){
    this.mobileFormInfo = mobileFormInfo;
  }


  @action addMobileFormItem(item) {
    this.mobileFormItems.push({
      id: item.id,
      type: item.type,
      name: item.name,
      field_name: item.field_name,
      is_selected: item.is_selected,
      is_required: item.is_required,
      icon: item.icon,
      color: item.color,
      settings: item.settings
    });
  }



  @action replaceAllItems(items){
    this.mobileFormItems = items;
    console.log(this.mobileFormItems);
  }

  @action setSelectedOnElement(id) {
    let items = this.mobileFormItems;
    // set existing element to false
    let item = items.filter(function(tm){
      return tm.is_selected;
    });

    if(item.length > 0) {
      for(const itm in item){
        item[itm].is_selected = false;
      }
    }

    let to_select_item = items.filter(function(tm){
      return tm.id === id;
    });

    console.log( "item to select" );

    console.log( to_select_item);

    if(to_select_item.length > 0) {
      var index = items.indexOf(to_select_item[0]);
      items[index].is_selected = true;
    }


    this.mobileFormItems = items;
  }

  // @action getSelectedItem(){
  //   let items = this.mobileFormItems;
  //   // set existing element to false
  //   let item = items.filter(function (tm) {
  //     return tm.selected;
  //   });

  //   return item[0];
  // }


  @action setMobileFormItemSettings(id, name, settings, is_required = false){
    let items = this.mobileFormItems;

    let to_select_item = items.filter(function(tm){
      return tm.id === id;
    });

    if(to_select_item.length > 0) {
      let item = to_select_item[0]
      item.name = name;
      item.settings = settings;
      item.is_required = is_required;
    }

    this.mobileFormItems = items;
  }

  @action deleteItem(id){
    let items = this.mobileFormItems;

    let result = items.filter(function(item){
      return item.id === id;
    });

    if(result.length > 0){
      items.splice(items.indexOf(result[0]), 1)
    }

    this.mobileFormItems = items;
  }

  @computed get selectedItem() {
    console.log( "selectedItem ..." );
    let items = this.mobileFormItems;
    let result = items.filter(function(item){
      return item.is_selected;
    });

    if(result.length > 0) return result[0];
    else return items[0];
  }

  


  @computed get mobileFormItemsCount  (){
    return this.mobileFormItems.length;
  }

}


export default new MobileFormStore();
