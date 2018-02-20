import { computed, observable } from 'mobx'

class Facility {
  @observable name
  @observable id

  constructor (name, id) {
    this.name = name
    this.id = id
  }
}

export class DreamStore {
  @observable email = ''
  @observable password = ''
  @observable passConfirm = ''
}

export default new DreamStore()