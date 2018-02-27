import { observable } from 'mobx'

export class DreamStore {
  @observable email = ''
  @observable password = ''
  @observable passConfirm = ''
  @observable token = localStorage.getItem('token')
  @observable mentee_app = null
}

export default new DreamStore()
