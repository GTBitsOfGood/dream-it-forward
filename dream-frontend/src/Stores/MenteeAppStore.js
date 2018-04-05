import { computed, observable, action } from 'mobx'
// E-mentoring for Boys or Girls ages 5-18
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
      this[event.target.name] = event.target.value
    }
  }

export default MenteeAppStore