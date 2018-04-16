import { observable, action } from 'mobx'

export class DreamStore {
  @observable email = ''
  @observable password = ''
  @observable passConfirm = ''
  @observable state = ''
  @observable admin = ''
  @observable token = localStorage.getItem('token')

  constructor(rootStore) {
    this.rootStore = rootStore
    this.BASE = 'http://localhost:8080'
  }

  @action onLogout() {
    localStorage.removeItem('token');
    this.token = '';
  }

  @action async fetchState() {
    const res = await fetch(this.BASE + '/api/user/state?token=' + this.token, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const resp = await res.json();
    console.log(resp)
    this.state = resp.state
    this.admin = resp.isAdmin
  }

  @action updateProperty(event) {
    this[event.target.name] = event.target.value
  }

}

export default DreamStore
