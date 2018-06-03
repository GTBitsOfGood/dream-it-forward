import DreamStore from './DreamStore'
import MenteeAppStore from './MenteeAppStore'
import MentorAppStore from './MentorAppStore'
import MatchingStore from './MatchingStore'

class RootStore {
  constructor () {
    this.BASE = window.location.origin;
    this.dreamStore = new DreamStore(this)
    this.menteeAppStore = new MenteeAppStore(this)
    this.mentorAppStore = new MentorAppStore(this)
    this.matchingStore = new MatchingStore(this)
  }
}

export default RootStore
