import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Application.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer } from 'mobx-react'
import validator from 'validator'
/*<input value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} className="form-control first" type="text" placeholder="* Email Address" />*/

@observer
export class MentorApplication extends Component {

    constructor(props) {
        super(props);
        this.updateProperty = this.updateProperty.bind(this)
        this.onChange = this.onChange.bind(this)
        this.validate = this.validate.bind(this)
        this.sanitized = this.sanitized.bind(this)
        this.state = {
            gradelevel: {
                elementary: '',
                middle: '',
                high: ''
            },
            position: {
                vc: '',
                fec: '',
                oc: '',
                mentor: '',
                fcm: '',
                ocm: '',
                vcm: '',
                pdc: ''
            }
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
    }*/
    var grades = document.getElementsByClassName("grade-level");
        console.log(grades[0].value.elementary);
        console.log(grades[0].value.middle);
        console.log(grades[0].value.high);
    }

    sanitized(string) {
      //return !(string.includes('=') || string.includes('(') || string.includes('{'));
    }

    validate(name, string) {
      if (string) {
        string = string + ''
        if (!this.sanitized(string) && name !== 'phone') {
          window.toastr.error('Pls don\'t hacc™');
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
      }
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
                                <h1>Mentor Application</h1>
                                <div className="form-group">
                                    <input value={this.state.name} onChange={(e) => {
                                        this.setState({ name: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('', this.state.name)
                                    }} className="form-control" type="text" placeholder="* Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input value={this.state.email} onChange={(e) => {
                                        this.setState({ email: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('email', this.state.email)
                                    }} className="form-control" type="text" placeholder="* Email"/>
                                </div>
                                <div className="form-group">
                                    <input value={this.state.phone} onChange={(e) => {
                                        this.setState({ phone: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('phone', this.state.phone)
                                    }} className="form-control" type="text" placeholder="* Phone"/>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Gender </label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.gender} onChange={(e) => {
                                            this.setState({ gender: "Male" })
                                        }} type="radio" name="gender"/>Male</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.gender} onChange={(e) => {
                                            this.setState({ gender: "Female" })
                                        }} type="radio" name="gender"/>Female</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Date of Birth</label>
                                    </div>
                                    <input value={this.state.dob} onChange={(e) => {
                                        this.setState({ dob: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('date', this.state.dob)
                                    }} className="form-control" type="date"/>
                                </div>
                                <div className="form-group">
                                    <input value={this.state.citystate} onChange={(e) => {
                                        this.setState({ citystate: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('', this.state.citystate)
                                    }} className="form-control" type="text" placeholder="* City/State of Residence"/>
                                </div>
                                <div className="form-group">
                                    <input value={this.state.employer} onChange={(e) => {
                                        this.setState({ employer: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('', this.state.employer)
                                    }} className="form-control" type="text" placeholder="* Employer"/>
                                </div>
                                <div className="form-group">
                                    <input value={this.state.workphone} onChange={(e) => {
                                        this.setState({ workphone: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('phone', this.state.workphone)
                                    }} className="form-control" type="text" placeholder="* Work Phone"/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">* What do you feel are your strengths (fundraising, community outreach, marketing, mentoring, etc) you can bring to this program?</label>
                                    <textarea value={this.state.strengths} onChange={(e) => {
                                        this.setState({ strengths: e.target.value })
                                    }} onMouseOut={() => {
                                        this.validate('', this.state.strengths)
                                    }} className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">* What is your highest level of education attained? </label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.education} onChange={(e) => {
                                            this.setState({ education: "Some High School" })
                                        }} type="radio" name="education"/>Some High School</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.education} onChange={(e) => {
                                            this.setState({ education: "High School Graduate" })
                                        }} type="radio" name="education"/>High School Graduate</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.education} onChange={(e) => {
                                            this.setState({ education: "Some College" })
                                        }} type="radio" name="education"/>Some College</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.education} onChange={(e) => {
                                            this.setState({ education: "College Graduate" })
                                        }} type="radio" name="education"/>College Graduate</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label"> * If you are interested in volunteering as a mentor what mentee grade level do you prefer? </label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.gradelevel} onClick={(e) => {
                                            if (this.state.gradelevel.elementary !== "yes") {
                                                this.state.gradelevel.elementary = "yes";
                                            } else {
                                                this.state.gradelevel.elementary = "no";
                                            }
                                        }} type="checkbox" className="grade-level"/>Elementary</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.gradelevel} onClick={(e) => {
                                            if (this.state.gradelevel.middle !== "yes") {
                                                this.state.gradelevel.middle = "yes";
                                            } else {
                                                this.state.gradelevel.middle = "no";
                                            }
                                        }} type="checkbox" className="grade-level"/>Middle</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.gradelevel} onClick={(e) => {
                                            if (this.state.gradelevel.high !== 'yes') {
                                                this.state.gradelevel.high = 'yes';
                                            } else {
                                                this.state.gradelevel.high = "no";
                                            }
                                        }} type="checkbox" className="grade-level"/>High</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">* What days of the week are you available to volunteer? (check all that apply) </label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.monday !== 'yes') {
                                                this.state.days.monday = 'yes';
                                            } else {
                                                this.state.days.monday = "no";
                                            }
                                        }} type="checkbox"/>Monday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.tuesday !== 'yes') {
                                                this.state.days.tuesday = 'yes';
                                            } else {
                                                this.state.days.tuesday = "no";
                                            }
                                        }} type="checkbox"/>Tuesday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.wednesday !== 'yes') {
                                                this.state.days.wednesday = 'yes';
                                            } else {
                                                this.state.days.wednesday = "no";
                                            }
                                        }} type="checkbox"/>Wednesday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.thursday !== 'yes') {
                                                this.state.days.thursday = 'yes';
                                            } else {
                                                this.state.days.thursday = "no";
                                            }
                                        }} type="checkbox"/>Thursday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.friday !== 'yes') {
                                                this.state.days.frinday = 'yes';
                                            } else {
                                                this.state.days.friday = "no";
                                            }
                                        }} type="checkbox"/>Friday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.saturday !== 'yes') {
                                                this.state.days.saturday = 'yes';
                                            } else {
                                                this.state.days.saturday = "no";
                                            }
                                        }} type="checkbox"/>Saturday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.days} onClick={(e) => {
                                            if (this.state.days.sunday !== 'yes') {
                                                this.state.days.sunday = 'yes';
                                            } else {
                                                this.state.days.sunday = "no";
                                            }
                                        }} type="checkbox"/>Sunday</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">* What is the best time for you to volunteer? (check all that apply) </label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.times} onClick={(e) => {
                                            if (this.state.times.morning !== 'yes') {
                                                this.state.times.morning = 'yes';
                                            } else {
                                                this.state.times.morning = "no";
                                            }
                                        }} type="checkbox"/>Mornings</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.times} onClick={(e) => {
                                            if (this.state.times.afternoon !== 'yes') {
                                                this.state.times.afternoon = 'yes';
                                            } else {
                                                this.state.times.afternoon = "no";
                                            }
                                        }} type="checkbox"/>Afternoon</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.times} onClick={(e) => {
                                            if (this.state.times.evening !== 'yes') {
                                                this.state.times.evening = 'yes';
                                            } else {
                                                this.state.times.evening = "no";
                                            }
                                        }} type="checkbox"/>Evening</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label"><input value={this.state.timecommittment} onClick={(e) => {
                                        if (this.state.timecommittment !== 'yes') {
                                            this.state.timecommittment = 'yes';
                                        } else {
                                            this.state.timecommittment = "no";
                                        }
                                    }} type="checkbox"/>* I understand that the mentor program involves spending a minimum of one hour every week for the academic year with an assigned student. I understand that becoming a committee member will require scheduled meetings to be determined, and other volunteer opportunities may require specific day/time commitments. </label>
                                </div>
                                <div className="form-group">
                                    <label className="control-label"><input value={this.state.training} onClick={(e) => {
                                        if (this.state.training !== 'yes') {
                                            this.state.training = 'yes';
                                        } else {
                                            this.state.training = "no";
                                        }
                                    }} type="checkbox"/> * If mentoring I understand that I will be required to complete the mentor orientation training during the year. Other volunteer opportnities may require training and workshops. </label>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">* During the past 10 years, have you ever been convicted of any felony or misdemeanor classified as an offense against a person or family, or an offense of public indecency or a violation involving a state/federally controlled substance? </label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.felony} onClick={(e) => {
                                            this.setState({ felony: "yes"});
                                        }} type="radio" name="felony"/>Yes</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.felony} onClick={(e) => {
                                            this.setState({ felony: "no"});
                                        }} type="radio" name="felony"/>No</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label"> * Are you under indictment or has a district/county attorney accepted any official complaint for any of the offenses in question above? </label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.indictment} onClick={(e) => {
                                            this.setState({ indictment: "yes"});
                                        }} type="radio" name="indictment"/>Yes</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value={this.state.indictment} onClick={(e) => {
                                            this.setState({ indictment: "no"});
                                        }} type="radio" name="indictment"/>No</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">
                                    <input value={this.state.backgroundcheck} onClick={(e) => {
                                        if (this.state.backgroundcheck !== 'yes') {
                                            this.state.backgroundcheck = 'yes';
                                        } else {
                                            this.state.backgroundcheck = "no";
                                        }
                                    }} type="checkbox"/>* In making this application to join the DREAM It Forward Foundation, I understand that the DREAM It Forward Foundation, routinely performs criminal record checks of all volunteers for the position of which I am applying. This check may be done on me if I sign below. If I fail to sign, it may be grounds for rejecting me as a mentor. I certify to the best of my ability that the information provided on this application is true and accurate. I also understand that misinformation knowingly provided here, and on subsequent volunteer application forms, is grounds for dismissal.</label>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Position of Interest</label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.vc !== 'yes') {
                                                this.state.position.vc = 'yes';
                                            } else {
                                                this.state.position.vc = "no";
                                            }
                                        }} type="checkbox"/>Volunteer Coordinator</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.fec !== 'yes') {
                                                this.state.position.fec = 'yes';
                                            } else {
                                                this.state.position.fec = "no";
                                            }
                                        }} type="checkbox"/>Fundraising and Events Coordinator</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.oc !== 'yes') {
                                                this.state.position.oc = 'yes';
                                            } else {
                                                this.state.position.oc = "no";
                                            }
                                        }} type="checkbox"/>Outreach Coordinator</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.mentor !== 'yes') {
                                                this.state.position.mentor = 'yes';
                                            } else {
                                                this.state.position.mentor = "no";
                                            }
                                        }} type="checkbox"/>Mentor</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.fcm !== 'yes') {
                                                this.state.position.fcm = 'yes';
                                            } else {
                                                this.state.position.fcm = "no";
                                            }
                                        }} type="checkbox"/>Fundraising Committee Member</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.ocm !== 'yes') {
                                                this.state.position.ocm = 'yes';
                                            } else {
                                                this.state.position.ocm = "no";
                                            }
                                        }} type="checkbox"/>Outreach Committee Member</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.vcm !== 'yes') {
                                                this.state.position.vcm = 'yes';
                                            } else {
                                                this.state.position.vcm = "no";
                                            }
                                        }} type="checkbox"/>Volunteer Committee Member</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input value={this.state.position} onClick={(e) => {
                                            if (this.state.position.pdc !== 'yes') {
                                                this.state.position.pdc = 'yes';
                                            } else {
                                                this.state.position.pdc = "no";
                                            }
                                        }} type="checkbox"/>Program Development Committee Member</label>
                                    </span>
                                </div>
                            </form>
                            <button onClick={this.onSubmit}className="btn hvr-sweep-to-right submit-button" type="button">Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
