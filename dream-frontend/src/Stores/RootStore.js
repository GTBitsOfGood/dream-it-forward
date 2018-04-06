import DreamStore from './DreamStore'
import MenteeAppStore from './MenteeAppStore'
import MentorAppStore from './MentorAppStore'

class RootStore {
  constructor () {
    this.dreamStore = new DreamStore(this)
    this.menteeAppStore = new MenteeAppStore(this)
    this.mentorAppStore = new MentorAppStore(this)
  }
}

export default RootStore
