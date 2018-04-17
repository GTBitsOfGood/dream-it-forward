import { observable, action } from 'mobx'

export class DreamStore {
  @observable email = ''
  @observable password = ''
  @observable passConfirm = ''
  @observable token = localStorage.getItem('token')
  @observable mentee_app = null

  @action onLogout() {
    localStorage.removeItem('token');
    this.token = '';
  }

  @action updateProperty(event) {
    this[event.target.name] = event.target.value
  }

}

export default DreamStore
