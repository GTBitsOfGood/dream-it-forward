import { computed, observable } from 'mobx'

export class MenteeApp {
    @observable data = {
      email: '',
      program: '',
      name: '',
      address: '',
      dob: '',
      age: '',
      school: '',
      grade: '',
      numOfDreamers: '',
      additionalDreamers: '',
      numChildren: '',
      parentName: '',
      parentRelation: '',
      parentPhone: '',
      parentEmail: '',
      parentAddress: '',
      emergencyName: '',
      emergencyRelation: '',
      emergencyPhone: '',
      personsToPickUp: '',
      doctor: '',
      doctorPhone: '',
      doctorAddress: '',
      allergies: '',
      hear: '',
      tShirtSize: '',
      membershipFee: '',
      extraMoney: '',
      tuition: '',
      liability: '',
      photoRelease: '',
      permission: ''
    }
}
