import { observable, action, computed } from 'mobx'

class IFormStore {
  @observable credentials = {}

  @action authenticate(credentials) {
    this.credentials = credentials
  }

  @action logout(){
    this.credentials = {}
  }

  @computed get isLoggedIn(){
    console.log("is LoggedIn ?")
    console.log(this.credentials)
    console.log(Object.keys(this.credentials).length > 0)
    return Object.keys(this.credentials).length > 0;
  }
  
  @action getCredentials(){
    let credentials = this.credentials;
    return credentials;
  }

}


export default new IFormStore();
