import DreamStore from './DreamStore'
import MenteeAppStore from './MenteeAppStore'

class RootStore {
  constructor () {
    this.dreamStore = new DreamStore(this)
    this.menteeAppStore = new MenteeAppStore(this)
  }
}

export default RootStore
