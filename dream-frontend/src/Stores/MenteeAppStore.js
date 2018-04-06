import { computed, observable, action } from 'mobx'

export class MenteeAppStore {
    @observable data = {
      email: "",
      program: "",
      name: "",
      address: "",
      dob: "",
      age: "",
      school: "",
      grade: "",
      numOfDreamers: "",
      additionalDreamers: "",
      numChildren: "",
      parentName: "",
      parentRelation: "",
      parentPhone: "",
      parentEmail: "",
      parentAddress: "",
      emergencyName: "",
      emergencyRelation: "",
      emergencyPhone: "",
      personsToPickUp: "",
      doctor: "",
      doctorPhone: "",
      doctorAddress: "",
      allergies: "",
      hear: "",
      tShirtSize: "",
      membershipFee: "",
      extraMoney: "",
      tuition: "",
      liability: "",
      photoRelease: "",
      permission: ""
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

    onSubmit() {
      let canSubmit = true;
      let notRequired = ["numChildren", "parentEmail", "parentAddress"];
      for (let property in this.data) {
        if (this.data.hasOwnProperty(property)) {
          if (!(notRequired.includes(property))) {
            if (this.data[property].length < 1) {
              return;
            }
            if (property === "email") {
              canSubmit = canSubmit && this.validateEmail(this.data[property]);
              console.log(canSubmit);
            }
          } else {
            if (property.length > 0) {
              if (property === "parentEmail") {
                canSubmit = canSubmit && this.validateEmail(this.data[property]);
              }
            }
          }
        }
      }
      console.log(this.data);
      // do backend stuff
    }

    validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }

export default MenteeAppStore