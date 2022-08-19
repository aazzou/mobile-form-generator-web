import { observable, action, computed } from 'mobx'

class IFormListStore {
  @observable forms = []

  @action flush(){
    this.forms = []
  }
  
  @action addForm(item) {
    this.forms.push({
      key: item.id,
      id: item.id,
      refId: item.refId,
      name: item.name,
      description: item.description
    });
  }

  @action replaceAllItems(items){
    this.forms = items;
  }

  @action getItem(id){
    let items = this.forms;
    let result = items.filter(function(item){
        return item.id === id;
    });

    return result[0];
  }

  @action deleteItem(id){
    let items = this.forms;

    let result = items.filter(function(item){
      return item.id === id;
    });

    if(result.length > 0){
      items.splice(items.indexOf(result[0]), 1)
    }

    this.forms = items;
  }


  @computed get formsCount  (){
    return this.forms.length;
  }
}


export default new IFormListStore();
