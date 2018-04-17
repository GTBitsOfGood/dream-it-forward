import { observable, action } from 'mobx'
const uuidV1 = require('uuid/v1');

export class DreamStore {
  @observable email = ''
  @observable password = ''
  @observable passConfirm = ''
  @observable state = ''
  @observable admin = ''
  @observable isMentor = ''
  @observable token = ''
  @observable relations = ''

  constructor(rootStore) {
    this.rootStore = rootStore
    this.BASE = 'http://localhost:8080'
    this.token = localStorage.getItem('token')
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
    this.isMentor = resp.isMentor
    this.relations = resp.relations
  }

  async startCall() {
    const temp = 'https://meet.jit.si/' + uuidV1();
    window.open(temp, '_blank');
  }

  @action updateProperty(event) {
    this[event.target.name] = event.target.value
  }

}

export default DreamStore
