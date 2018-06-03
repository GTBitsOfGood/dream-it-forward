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
    @observable mentorSelected = ''
    @observable menteeSelected = ''

    constructor(rootStore) {
        this.rootStore = rootStore;
        // let temp = window.location.origin.split(":")
        // temp[1] = temp[1] + '/'
        // const BASE = temp.join(':')
    }

    @action async match(e) {
        console.log(this.mentorSelected)
        console.log(this.menteeSelected)
        const res = await fetch(this.BASE + '/api/match', {
            method: 'PUT',
            body: JSON.stringify({
                mentor: [this.mentors[this.mentorSelected]],
                mentees: [this.mentees[this.menteeSelected]],
                token: this.rootStore.dreamStore.token
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const resp = await res.json();
        console.log(resp)
        this.data.showMatchingModal = false;
        await this.fetchMentees();
        await this.fetchMentors();
    }

    @action async fetchMentees() {
        const res = await fetch(this.BASE + '/api/user/mentees?token=' + this.rootStore.dreamStore.token, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const resp = await res.json();
        console.log(resp)
        this.mentees = resp.mentees;
    }

    @action async fetchMentors() {
        const res = await fetch(this.BASE + '/api/user/mentors?token=' + this.rootStore.dreamStore.token, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const resp = await res.json();
        console.log(resp)
        this.mentors = resp.mentors;
    }

    @action handleOpenMenteeModal(event) {
        this.menteeSelected = event.target.name;
        this.data.showMenteeModal = true;
    }

    @action handleCloseMenteeModal(event) {
        this.data.showMenteeModal = false;
    }

    @action handleOpenMentorModal(event) {
        this.mentorSelected = event.target.name;
        this.data.showMentorModal = true;
    }

    @action handleCloseMentorModal(event) {
        this.data.showMentorModal = false;
    }

    @action handleOpenMatchingModal(event) {
        this.menteeSelected = event.target.name;
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