import { computed, observable } from 'mobx'

class MenteeApp {
  @observable name
  @observable id

  constructor(name, id) {
    this.name = name
    this.id = id
  }
}

export class DreamStore {
  @observable email = ''
  @observable password = ''
  @observable passConfirm = ''
  @observable mentee_app = {
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
}

export default new DreamStore()
