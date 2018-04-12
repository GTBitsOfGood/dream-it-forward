import { computed, observable, action } from 'mobx'

export class MatchingStore {
    @observable data = {
        showInfoModal: false,
        showMatchingModal: false,
        isSelected: false
    }
    @observable mentees = []
    @observable mentors = []
    @observable selected = []
    
    @action handleOpenInfoModal(event) {
        this.data.showInfoModal = true;
    }

    @action handleCloseInfoModal(event) {
        this.data.showInfoModal = false;
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