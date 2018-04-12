import { computed, observable, action } from 'mobx'

export class MatchingStore {
    @observable data = {
        showMenteeModal: false,
        showMentorModal: false,
        showMatchingModal: false,
        isSelected: false
    }
    @observable mentees = []
    @observable mentors = []
    @observable selected = []
    
    @action handleOpenMenteeModal(event) {
        this.data.showMenteeModal = true;
    }

    @action handleCloseMenteeModal(event) {
        this.data.showMenteeModal = false;
    }

    @action handleOpenMentorModal(event) {
        this.data.showMentorModal = true;
    }

    @action handleCloseMentorModal(event) {
        this.data.showMentorModal = false;
    }

    @action handleOpenMatchingModal(event) {
        this.data.showMatchingModal = true;
    }

    @action handleCloseMatchingModal(event) {
        this.data.showMatchingModal = false;
    }

    @action selectToggle(event) {
        this.data.isSelected = !this.data.isSelected
    }
}


export default MatchingStore;