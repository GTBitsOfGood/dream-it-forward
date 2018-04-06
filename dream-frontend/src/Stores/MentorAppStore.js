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
        training: "",
        felony: "",
        indictment: "",
        backgroundCheck: "",
        position: {
            volunteer: false,
            fundraisingAndEvents: false,
            outreach:false,
            mentor: false,
            fundraisingCommittee: false,
            outreachCommittee: false,
            volunteerCommittee: false,
            programDevelopmentCommittee: false
        }
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

    onSubmit() {
        // let canSubmit = true;
        // let notRequired = ["numChildren", "parentEmail", "parentAddress"];
        // for (let property in this.data) {
        //     if (this.data.hasOwnProperty(property)) {
        //         if (!(notRequired.includes(property))) {
        //             if (this.data[property].length < 1) {
        //                 return;
        //             }
        //             if (property === "email") {
        //                 canSubmit = canSubmit && this.validateEmail(this.data[property]);
        //                 console.log(canSubmit);
        //                 }
        //             } else {
        //                 if (property.length > 0) {
        //                     if (property === "parentEmail") {
        //                     canSubmit = canSubmit && this.validateEmail(this.data[property]);
        //                 }
        //             }
        //         }
        //     }
        // }
      console.log(this.data);
      // do backend stuff
    }

    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
}

export default MentorAppStore