import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Application.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'

@inject('rootStore')
@observer
export class MentorApplication extends Component {

    constructor(props) {
        super(props);
        this.dreamStore = this.props.rootStore.dreamStore
        this.mentorStore = this.props.rootStore.mentorAppStore
    }

    async componentDidMount() {
        const data = await api.verifyToken(this.dreamStore.token)
        if (!data || data.status !== 'valid') {
            this.dreamStore.token = ''
        }
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

    sanitized(string) {
      //return !(string.includes('=') || string.includes('(') || string.includes('{'));
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
        if (!this.dreamStore.token) {
            return <Redirect to='/' />
        }
        return (
            <div className="application">
                <div className="container">
                    <button onClick={() => this.dreamStore.onLogout()} style={{ marginLeft: '90%', marginBottom: 20 }} className="btn btn-warning" type="button">Logout</button>
                    <div className="well">
                        <div className="form-div">
                            <form>
                                <h1>Mentor Application</h1>
                                <div className="form-group">
                                    <input name="name" value={this.mentorStore.data.name} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="text" placeholder="* Full Name"/>
                                </div>
                                <div className="form-group">
                                    <input name="email" value={this.mentorStore.data.email} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="text" placeholder="* Email"/>
                                </div>
                                <div className="form-group">
                                    <input name="phone" value={this.mentorStore.data.phone} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="text" placeholder="* Phone"/>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Gender *</label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="male" onChange={(e) => this.mentorStore.radioChanged(e)} type="radio" name="gender"/>Male</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="female" onChange={(e) => this.mentorStore.radioChanged(e)} type="radio" name="gender"/>Female</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Date of Birth *</label>
                                    </div>
                                    <input name="dob" value={this.mentorStore.data.dob} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="date"/>
                                </div>
                                <div className="form-group">
                                    <input name="cityState" value={this.mentorStore.data.cityState} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="text" placeholder="* City/State of Residence"/>
                                </div>
                                <div className="form-group">
                                    <input name="employer" value={this.mentorStore.data.employer} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="text" placeholder="* Employer"/>
                                </div>
                                <div className="form-group">
                                    <input name="workPhone" value={this.mentorStore.data.workPhone} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control" type="text" placeholder="* Work Phone"/>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">What do you feel are your strengths (fundraising, community outreach, marketing, mentoring, etc) you can bring to this program? *</label>
                                    <textarea name="strengths" value={this.mentorStore.data.strengths} onChange={(e) => this.mentorStore.updateProperty(e)} className="form-control"></textarea>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">What is your highest level of education attained? *</label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="Some High School" onChange={(e) => {
                                            this.mentorStore.updateProperty(e)
                                        }} type="radio" name="education"/>Some High School</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="High School Graduate" onChange={(e) => {
                                            this.mentorStore.updateProperty(e)
                                        }} type="radio" name="education"/>High School Graduate</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="Some College" onChange={(e) => {
                                            this.mentorStore.updateProperty(e)
                                        }} type="radio" name="education"/>Some College</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="College Graduate" onChange={(e) => {
                                            this.mentorStore.updateProperty(e)
                                        }} type="radio" name="education"/>College Graduate</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">If you are interested in volunteering as a mentor what mentee grade level do you prefer? *</label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="Elementary" name="gradeLevel" onChange={(e) => this.mentorStore.radioChanged(e)} type="radio" className="grade-level"/>Elementary</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="Middle" name="gradeLevel" onChange={(e) => this.mentorStore.radioChanged(e)} type="radio" className="grade-level"/>Middle</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="High" name="gradeLevel" onChange={(e) => this.mentorStore.radioChanged(e)} type="radio" className="grade-level"/>High</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">What days of the week are you available to volunteer? (check all that apply) *</label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="monday" value={this.mentorStore.data.days.monday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Monday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="tuesday" value={this.mentorStore.data.days.tuesday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Tuesday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="wednesday" value={this.mentorStore.data.days.wednesday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Wednesday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="thursday" value={this.mentorStore.data.days.thursday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Thursday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="friday" value={this.mentorStore.data.days.friday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Friday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="saturday" value={this.mentorStore.data.days.saturday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Saturday</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="sunday" value={this.mentorStore.data.days.sunday} onClick={(e) => this.mentorStore.checkDaysChanged(e)} type="checkbox"/>Sunday</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">What is the best time for you to volunteer? (check all that apply) *</label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="morning" value={this.mentorStore.data.times.morning} onClick={(e) => this.mentorStore.checkTimesChanged(e)} type="checkbox"/>Morning</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="afternoon" value={this.mentorStore.data.times.evening} onClick={(e) => this.mentorStore.checkTimesChanged(e)} type="checkbox"/>Afternoon</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="evening" value={this.mentorStore.data.times.afternoon} onClick={(e) => this.mentorStore.checkTimesChanged(e)} type="checkbox"/>Evening</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label"><input name="timeCommitment" value={this.mentorStore.data.timeCommitment} onClick={(e) => this.mentorStore.checkBoxChanged(e)} type="checkbox"/>I understand that the mentor program involves spending a minimum of one hour every week for the academic year with an assigned student. I understand that becoming a committee member will require scheduled meetings to be determined, and other volunteer opportunities may require specific day/time commitments. *</label>
                                </div>
                                <div className="form-group">
                                    <label className="control-label"><input name="training" value={this.mentorStore.data.training} onClick={(e) => this.mentorStore.checkBoxChanged(e)} type="checkbox"/>If mentoring I understand that I will be required to complete the mentor orientation training during the year. Other volunteer opportnities may require training and workshops. *</label>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">During the past 10 years, have you ever been convicted of any felony or misdemeanor classified as an offense against a person or family, or an offense of public indecency or a violation involving a state/federally controlled substance? *</label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="Yes" onClick={(e) => this.mentorStore.radioChanged(e)} type="radio" name="felony"/>Yes</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="No" onClick={(e) => this.mentorStore.radioChanged(e)} type="radio" name="felony"/>No</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Are you under indictment or has a district/county attorney accepted any official complaint for any of the offenses in question above? *</label>
                                    </div>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="Yes" onClick={(e) => this.mentorStore.updateProperty(e)} type="radio" name="indictment"/>Yes</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline">
                                        <input value="No" onClick={(e) => this.mentorStore.updateProperty(e)} type="radio" name="indictment"/>No</label>
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">
                                    <input name="backgroundCheck" value={this.mentorStore.data.backgroundCheck} onClick={(e) => this.mentorStore.checkBoxChanged(e)} type="checkbox"/>In making this application to join the DREAM It Forward Foundation, I understand that the DREAM It Forward Foundation, routinely performs criminal record checks of all volunteers for the position of which I am applying. This check may be done on me if I sign below. If I fail to sign, it may be grounds for rejecting me as a mentor. I certify to the best of my ability that the information provided on this application is true and accurate. I also understand that misinformation knowingly provided here, and on subsequent volunteer application forms, is grounds for dismissal. *</label>
                                </div>
                                <div className="form-group">
                                    <div>
                                        <label className="control-label">Position of Interest *</label>
                                    </div>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="volunteer" value={this.mentorStore.data.position.volunteer} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Volunteer Coordinator</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="fundraisingAndEvents" value={this.mentorStore.data.position.fundraisingAndEvents} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Fundraising and Events Coordinator</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="outreach" value={this.mentorStore.data.position.outreach} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Outreach Coordinator</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="mentor" value={this.mentorStore.data.position.mentor} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Mentor</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="fundraisingCommittee" value={this.mentorStore.data.position.fundraisingCommittee} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Fundraising Committee Member</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="outreachCommittee" value={this.mentorStore.data.position.outreachCommittee} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Outreach Committee Member</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="volunteerCommittee" value={this.mentorStore.data.position.volunteerCommittee} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Volunteer Committee Member</label>
                                    </span>
                                    <span>
                                        <label className="control-label checkbox-inline">
                                        <input name="programDevelopmentCommittee" value={this.mentorStore.data.position.programDevelopmentCommittee} onClick={(e) => this.mentorStore.checkPositionChanged(e)} type="checkbox"/>Program Development Committee Member</label>
                                    </span>
                                </div>
                            </form>
                            <button onClick={() => this.mentorStore.onSubmit()} className="btn btn-primary" type="button">Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
