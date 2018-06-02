import { computed, observable, action } from 'mobx'

export class MentorAppStore {
    @observable data = {
        name: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        cityState: "",
        employer: "",
        workPhone: "",
        strengths: "",
        education: "",
        gradeLevel: "",
        days: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        },
        times: {
            morning: false,
            afternoon: false,
            evening: false
        },
        timeCommitment: false,
        training: false,
        felony: "",
        indictment: "",
        backgroundCheck: false,
        position: {
            volunteer: false,
            fundraisingAndEvents: false,
            outreach: false,
            mentor: false,
            fundraisingCommittee: false,
            outreachCommittee: false,
            volunteerCommittee: false,
            programDevelopmentCommittee: false
        }
    }

    @observable applied = false

    constructor(rootStore) {
        this.rootStore = rootStore
        let temp = window.location.origin.split(":")
        temp[2] = '80'
        this.BASE = temp.join(':')
    }

    @action updateProperty(event) {
        this.data[event.target.name] = event.target.value
    }

    @action radioChanged(event) {
        if (event.target.checked) {
            this.data[event.target.name] = event.target.value
        }
    }

    @action checkBoxChanged(event) {
        this.data[event.target.name] = event.target.checked
    }

    @action checkDaysChanged(event) {
        this.data.days[event.target.name] = event.target.checked
    }

    @action checkTimesChanged(event) {
        this.data.times[event.target.name] = event.target.checked
    }

    @action checkPositionChanged(event) {
        this.data.position[event.target.name] = event.target.checked
    }

    async onSubmit() {
        let canSubmit = true;
        for (let property in this.data) {
            if (this.data.hasOwnProperty(property)) {
                if (typeof (this.data[property]) !== "boolean" && this.data[property].length < 1) {
                    window.toastr.error('Please fill in all required fields')
                    console.log(property);
                    return;
                }
                if (typeof (this.data[property]) === "boolean" && !this.data[property]) {
                    window.toastr.error('Please fill in all required fields')
                    console.log(property);
                    return;
                }
                if (property === "email") {
                    if (!(this.validateEmail(this.data[property]))) {
                        window.toastr.error('Please provide a valid email')
                        return;
                    }
                }
            }
        }
        let atLeastOne = false;
        for (let day in this.data.days) {
            if (this.data.days.hasOwnProperty(day)) {
                atLeastOne = atLeastOne || this.data.days[day];
            }
        }
        if (!atLeastOne) {
            window.toastr.error('Please fill in all required fields')
            console.log("days error");
            return;
        }
        atLeastOne = false;
        for (let time in this.data.times) {
            if (this.data.times.hasOwnProperty(time)) {
                atLeastOne = atLeastOne || this.data.times[time];
            }
        }
        if (!atLeastOne) {
            window.toastr.error('Please fill in all required fields')
            console.log("times error");
            return;
        }
        atLeastOne = false;
        for (let position in this.data.position) {
            if (this.data.position.hasOwnProperty(position)) {
                atLeastOne = atLeastOne || this.data.position[position];
            }
        }
        if (!atLeastOne) {
            window.toastr.error('Please fill in all required fields')
            console.log("positions error");
            return;
        }
        // console.log(this.data);
        window.toastr.success('Thanks for submitting!')
        const res = await fetch(this.BASE + '/api/mentor/apply', {
            method: 'POST',
            body: JSON.stringify({ mentorApp: this.data, token: this.rootStore.dreamStore.token }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const resp = await res.json();
        console.log(resp)
        this.applied = true;
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

export default MentorAppStore