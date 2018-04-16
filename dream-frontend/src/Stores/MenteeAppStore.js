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
    membershipFee: false,
    extraMoney: false,
    tuition: false,
    liability: false,
    photoRelease: "",
    permission: false
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
    let notRequired = ["numChildren", "parentEmail", "parentAddress", "tShirtSize", "allergies"];
    for (let property in this.data) {
      if (this.data.hasOwnProperty(property)) {
        if (!(notRequired.includes(property))) {
          if (typeof(this.data[property]) === "boolean") {
            if (!(this.data[property])) {
              console.log(property);
              window.toastr.error('Please fill in all required fields')
              return;
            }
          } else if (this.data[property].length < 1) {
            console.log(property);
            window.toastr.error('Please fill in all required fields')
            return;
          }
          if (property === "email") {
            if (!(this.validateEmail(this.data[property]))) {
              console.log("email fail");
              window.toastr.error('Please provide a valid email')
              return;
            }
            
          }
        } else {
          if (this.data[property].length > 0) {
            if (property === "parentEmail") {
              if (!(this.validateEmail(this.data[property]))) {
                console.log("parent email fail");
                window.toastr.error('Please provide a valid email')
                return;
              }
            }
          }
        }
      }
    }
    console.log(this.data);
    window.toastr.success('Thanks for submitting!')
    // do backend stuff
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

export default MenteeAppStore