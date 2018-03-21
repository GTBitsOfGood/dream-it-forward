import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Application.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer } from 'mobx-react'
import validator from 'validator'
/*<input value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} className="form-control first" type="text" placeholder="* Email Address" />*/

@observer
export class MenteeApplication extends Component {

    constructor(props) {
        super(props);
        this.updateProperty = this.updateProperty.bind(this)
        this.onChange = this.onChange.bind(this)
        this.validate = this.validate.bind(this)
        this.sanitized = this.sanitized.bind(this)
        this.canSubmit = this.canSubmit.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {

        }
    }

    /*async componentDidMount() {
        const data = await api.verifyToken(this.props.store.token)
        if (!data || data.status !== 'valid') {
            this.props.store.token = ''
        }
    }*/

    /*onLogout() {
        console.log("Fdsf")
        localStorage.removeItem('token')
        this.props.store.token = ''
    }*/

    updateProperty(key, value) {
        this.props.store[key] = value
    }

    onChange(event) {
      this.updateProperty(event.target.name, event.target.value)
    }

    onSubmit() {
        if (this.canSubmit()) {
          window.location.replace('/submitted');
        }
    }

    sanitized(string) {
      //return !(string.includes('=') || string.includes('(') || string.includes('{'));
    }

    canSubmit() {
        /*var requiredFields = document.getElementsByClassName("required")
        var allGood = true;
        for (var i = 0; i < requiredFields.length; i++) {
          var field = requiredFields[i];
          var text = undefined;
          if (field.tagName === "LABEL") {
            var children = field.children;
            for (var c = 0; c < children.length; c++) {
              text = field
              if (children[c].tagName === "INPUT" || children[c].tagName === "SELECT") {
                field = children[c]
              }
            }
          }
          console.log("field:")
          console.log(field.value);
          console.log("text");
          console.log(text);
          if (!field.disabled && (!field.value || field.value === "off" || field.value === 'on')) {
            if (text) {
              text.setAttribute("style", "color: #e5705b");
            } else {
              field.setAttribute("style", "background-color: #ffe2dd");
            }
            allGood = false;
          } else {
            field.removeAttribute("style");
            if (text) {
              text.removeAttribute("style");
            }
          }
        }
        if (allGood === false) {
          window.toastr.error("Please fill out the required fields.");
        }
        return allGood;*/
        return true;
    }

    validate(name, string) {
      /*if (string) {
        string = string + ''
        if (!this.sanitized(string) && name !== 'phone') {
          window.toastr.error('Invalid Input');
        } else if (name === 'email') {
          if (!validator.isEmail(string)) {
            window.toastr.error('Enter a valid email address');
          }
        } else if (name === 'alpha') {
          if (!validator.isAlpha(string)) {
            window.toastr.error('This field requires an alpha string');
          }
        } else if (name === 'num') {
          if (!validator.isNumeric(string)) {
            window.toastr.error('This field requires a numeric string');
          }
        } else if (name === 'date') {

        } else if (name === 'phone') {
          if (!validator.isMobilePhone(string, 'any')) {
            window.toastr.error('Please enter a valid phone number');
          }
        }
      }*/
    }

    render() {
        const { store } = this.props
        /*if (!store.token) {
            return <Redirect to='/' />
        }*/
        console.log(this.state.additionalFees);
        return (
            <div className="application">
                <div className="container">
                <button onClick={() => this.onLogout()} style={{ marginLeft: '90%', marginBottom: 20 }} className="btn-warning" type="button">Logout</button>
                    <div className="well">
                      <div className="form-div">
                        <form>
                            <h1>Participant Registration Information </h1>
                            <small>Enrolling Student Dreamer (Participant) Info. Please only complete this form when you are ready to enroll. All others please contact us directly with any questions you have before enrollment. </small>
                            <div className="form-group">
                                <input value={this.state.email} onChange={(e) => {
                                  this.setState({ email: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('email', this.state.email)
                                }} className="form-control first required" type="text" placeholder="* Email Address" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Which Program Are You Registering</label>
                                <div className="radio required">
                                    <label className="control-label">
                                    <input value={this.state.program} onChange={(e) => {
                                      this.setState({ program: 'Dream Women\'s Club' })
                                      document.getElementById("num-children").disabled = false;
                                    }} type="radio" name="program"/>Dream Women's Club - Mentorship &amp; workshops for women and single mothers</label>
                                </div>
                                <div className="radio required">
                                    <label className="control-label">
                                    <input value={this.state.program} onChange={(e) => {
                                      this.setState({ program: 'We Dream Mentoring'})
                                      document.getElementById("num-children").disabled = true;
                                    }} type="radio" name="program"/>We Dream Mentoring for Young Women ages 10 - 21</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input value={this.state.name} onChange={(e) => {
                                  this.setState({ name: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.name)
                                }} className="form-control required" type="text" placeholder="Dreamer's Name" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.address} onChange={(e) => {
                                  this.setState({ address: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.address)
                                }} className="form-control required" type="text" placeholder="Address (Include City, State, and Zip)" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Date of Birth</label>
                                <input value={this.state.dob} onChange={(e) => {
                                  this.setState({ dob: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('date', this.state.dob)
                                }} className="form-control required" type="date" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.age} onChange={(e) => {
                                  this.setState({ age: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('num', this.state.age)
                                }} className="form-control required" type="text" placeholder="Age" inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">School Attending &amp; City. Use home city for students home-schooled or attending school online. Please put none if the participant is not currently enrolled. </label>
                                <input value={this.state.school} onChange={(e) => {
                                  this.setState({ school: e.target.value })
                                  this.validate('alpha', this.state.school)
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.school)
                                }} className="form-control required" type="text" required="" />
                            </div>
                            <div className="form-group required">
                                <label className="control-label">Grade for Current Academic Year </label>
                                <select id="grade-dropdown" value={this.state.grade} onChange={(e) => {
                                  var dropdown = document.getElementById("grade-dropdown")
                                  this.setState({ grade: dropdown[dropdown.selectedIndex].value });
                                }} className="form-control required">
                                    <option value="6">6th Grade</option>
                                    <option value="7">7th Grade</option>
                                    <option value="8">8th Grade</option>
                                    <option value="9">9th Grade</option>
                                    <option value="10">10th Grade</option>
                                    <option value="11">11th Grade</option>
                                    <option value="12">12th Grade</option>
                                    <option value="13">College</option>
                                    <option value="0">Not currently enrolled (For single mothers only)</option>
                                </select>
                            </div>
                            <div className="form-group required">
                                <label className="control-label" value={this.state.multipleDreamers}>Do you have more than 1 Dreamer participating in any program? If so, please include their name, age, and date of birth.</label>
                                <div className="radio">
                                    <label className="control-label">
                                    <input className="required" value={this.state.multipleDreamers} onChange={(e) => {
                                      this.setState({ multipleDreamers: 'yes' })
                                      document.getElementById("add-dreamers").disabled = false;
                                    }} type="radio" name="dreamers"/>Yes</label>
                                </div>
                                <div className="radio">
                                    <label className="control-label">
                                    <input className="required" value={this.state.multipleDreamers} onChange={(e) => {
                                      this.setState({ multipleDreamers: 'no' })
                                      document.getElementById("add-dreamers").disabled = true;
                                    }} type="radio" name="dreamers"/>No</label>
                                </div>
                                <input id="add-dreamers" value={this.state.additionalDreamers} onChange={(e) => {
                                  this.setState({ additionalDreamers: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('', this.state.additionalDreamers)
                                }} className="form-control required" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">How many children do you have? (For Dream Women's Only) club </label>
                                <input id="num-children" value={this.state.numChildren} onChange={(e) => {
                                  this.setState({ numChildren: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('', this.state.numChildren)
                                }} className="form-control" type="text" required="" />
                            </div>
                            <h1>Parent/Guardian Information</h1>
                            <small>If you the participant is 18 or older, please enter your information here.</small>
                            <div className="form-group first">
                                <input value={this.state.parentName} onChange={(e) => {
                                  this.setState({ parentName: e.target.value })
                                }} onMouseOut={(e) => {
                                  this.validate('', this.state.parentName)
                                }} className="form-control" type="text" placeholder="Name"/>
                            </div>
                            <div className="form-group">
                                <input value={this.state.parentRelation} onChange={(e) => {
                                  this.setState({ parentRelation: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('', this.state.parentRelation)
                                }} className="form-control" type="text" placeholder="Relationship to Dreamer" /></div>
                            <div className="form-group">
                                <input  value={this.state.parentPhone} onChange={(e) => {
                                  this.setState({ parentPhone: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('phone', this.state.parentPhone)
                                }} className="form-control" type="text" placeholder="Phone Number " inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.parentEmail} onChange={(e) => {
                                  this.setState({ parentEmail: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('email', this.state.parentEmail)
                                }} className="form-control" type="text" placeholder="Email (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.parentAddress1} onChange={(e) => {
                                  this.setState({ parentAddress1: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('address', this.state.parentAddress1)
                                }} className="form-control" type="text" placeholder="Address (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.parentAddress2} onChange={(e) => {
                                  this.setState({ parentAddress2: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('address', this.state.parentAddress2)
                                }} className="form-control" type="text" placeholder="Address (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.contactName} onChange={(e) => {
                                  this.setState({ contactName: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('', this.state.contactName)
                                }} className="form-control required" type="text" placeholder="* Emergency Contact Name" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.contactRelationship} onChange={(e) => {
                                  this.setState({ contactRelationship: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('', this.state.contactRelationship)
                                }} className="form-control required" type="text" placeholder="* Emergency Contact Relationship" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.contactPhone} onChange={(e) => {
                                  this.setState({ contactPhone: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('phone', this.state.contactPhone)
                                }} className="form-control required" type="text" placeholder="* Emergency Contact Phone" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.pickUp} onChange={(e) => {
                                  this.setState({ pickUp: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.pickUp);
                                }} className="form-control required" type="text" placeholder="* Persons Authorized to Pick Up Dreamer (Name and Phone)" />
                            </div>
                            <h1>Medical Information</h1>
                            <div className="form-group">
                                <input value={this.state.doctor} className="form-control required" type="text" placeholder="* Dreamer's Primary Care Doctor" style={{ marginTop: "15px" }} onChange={(e) => {
                                  this.setState({ doctor: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.doctor);
                                }}/>
                            </div>
                            <div className="form-group">
                                <input value={this.state.doctorPhone} className="form-control required" type="text" placeholder="* Doctor's Phone"
                                onChange={(e) => {
                                  this.setState({ doctorPhone: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('phone', this.state.doctorPhone)
                                }} />
                            </div>
                            <div className="form-group">
                                <input value={this.state.doctorAddress} className="form-control required" type="text" placeholder="* Doctor's Address"
                                onChange={(e) => {
                                  this.setState({ doctorAddress: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.doctorAddress)
                                }} />
                            </div>
                            <div className="form-group">
                                <label className="control-label">* Does the Dreamer have any allergies, chronic illness, or medical conditions either physical, behavioral, mental? If yes, please describe.</label>
                                <textarea value={this.state.medicalConditions} onChange={(e) => {
                                  this.setState({ medicalConditions: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.medicalConditions)
                                }} className="form-control required"></textarea>
                            </div>
                            <h1>Additional Information</h1>
                            <div className="form-group">
                                <input value={this.state.heardAbout} onChange={(e) => {
                                  this.setState({ heardAbout: e.target.value })
                                }} onMouseOut={() => {
                                  this.validate('san', this.state.heardAbout)
                                }} className="form-control first required" type="text" placeholder="* How did you hear about us?" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Are you interested in purchasing a Dream t-shirt for $20? If so, what size?</label>
                                <div>
                                    <span>
                                        <label className="control-label radio-inline" style={{ marginRight: "10px" }}>
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" name="shirt-size" onChange={(e) => {
                                          this.setState({ shirtSize: "XS" })
                                        }}/>XS</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "S" })
                                        }}/>S</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "M" })
                                        }}/>M</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "L" })
                                        }}/>L</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "XL" })
                                        }}/>XL</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "XXL" })
                                        }}/>XXL</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "Youth XS" })
                                        }}/>Youth XS</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "Youth S" })
                                        }}/>Youth S</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "Youth M" })
                                        }}/>Youth M</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input name="shirt-size" value={this.state.shirtSize} type="radio" onChange={(e) => {
                                          this.setState({ shirtSize: "Youth L" })
                                        }}/>Youth L</label>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label required"><input value={this.state.registrationFee} type="checkbox" onChange={(e) => {
                                  if (this.state.registrationFee !== 'on') {
                                    this.setState({ registrationFee: "yes" })
                                  } else {
                                    this.setState({ registrationFee: "off" })
                                  }
                                }}/>* By submitting this registration, I understand that there will be a $25 nonrefundable registration fee per enrolled Dreamer, per year OR $50 per family. If applying to the Dream Mom's Club the $300 annual membership fee will apply.</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label required">
                                <input value={this.state.additionalFees} type="checkbox" onChange={(e) => {
                                  if (this.state.additionalFees !== 'yes') {
                                    this.setState({ additionalFees: "yes" })
                                  } else {
                                    this.setState({ additionalFees: "off" })
                                  }
                                }}/>* I am aware if the program in which I enroll charges a monthly fee, that additional fees for cultural arts trips, events, sports, private lessons, and tutoring may be required. I further understand that I am not required to or have my student participate in additional activities, and will not be responsible for the fee. I understand that trips and costs will be communicated to me at least one week in advance. I acknowledge that if I don't want myself or my student to participate in a field trip that they will be required to stay home that day, and I will not receive prorated tuition.</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label required" value={this.state.tuition}><input value={this.state.tuition} type="checkbox" onChange={(e) => {
                                  if (this.state.tuition !== 'yes') {
                                    this.setState({ tuition: "yes" })
                                  } else {
                                    this.setState({ tuition: "on" })
                                  }
                                }}/>* Tuition is due on the 1st of each month if required. If tuition is not paid by the 5th, I understand that I will receive a late fee of $30, and if not paid by the 10th, I or my child will not be allowed to participate until tuition fees are paid. I understand that I may un-enroll at anytime, but I am responsible for tuition for any month in which I or my student were enrolled 1 day or more. I understand if I remove myself or my student from the program, I will be required to complete full registration at that time. Reminder: Not all services require a fee.</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label required"><input value={this.state.liability} type="checkbox" onChange={(e) => {
                                  if (this.state.liability !== 'yes') {
                                    console.log("got on change")
                                    this.setState({ liability: 'yes' })
                                  } else {
                                    this.setState({ liability: "off" })
                                  }
                                }}/>* RELEASE OF LIABILITY: I hereby release and hold harmless Dream It Forward Foundation Inc, its officers, employees, agents, representatives, volunteers, heirs, executors, and assigns from all liability for personal injury, as well as all property damage or loss arising out of my/my child’s participation in the Dream Center in any program and any travel/transportation related to these Programs, whether paid for by myself or by the center. I understand that this release and indemnification releases liability for the conduct of the Center and its officers, employees, agents, representatives, volunteers, heirs, executors, and assigns.</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label required">* PHOTO RELEASE: The undersigned gives permission to the Academy to use photographs and audio and/or video recordings of the Dream It Forward Foundation Participant for fundraising and/or marketing purposes. On occasion, with permission, Participant photographs may be included in promotional videos, websites, Center albums, newsletters or other promotional materials. The Academy respects the privacy of its Participants and does not allow unauthorized visitors to photograph or video the Center or its Participants<br/>
                                <label className="control-label radio-inline">
                                <input type="radio" name="photoRelease" value={this.state.photoRelease} onChange={(e) => {
                                  this.setState({ photoRelease: "yes"})
                                }}/>Yes</label><br/>
                                <label className="control-label radio-inline">
                                <input type="radio" name="photoRelease" value={this.state.photoRelease} onChange={(e) => {
                                  this.setState({ photoRelease: "no"})
                                }}/>No</label></label>
                            </div>
                            <div className="form-group">
                                <label className="control-label required"><input type="checkbox" value={this.state.permission} type="checkbox" onChange={(e) => {
                                  console.log("called on change");
                                  if (this.state.permission !== 'yes') {
                                    this.setState({ permission: 'yes' })
                                  } else {
                                    this.setState({ permission: 'off' })
                                  }
                                }}/>* By checking the "I Agree" box below, the undersigned gives permission for the Dreamer to participate in any and all activities, including transportation (if needed) to and from the Dream Academy for activities, except those specifically prohibited by the participant’s physician or parent/legal guardian).</label>
                            </div>
                        </form>
                        <button className="btn hvr-sweep-to-right submit-button" href="#" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}
