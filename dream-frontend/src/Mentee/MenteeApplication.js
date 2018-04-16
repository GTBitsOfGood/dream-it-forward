import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './MenteeApplication.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'
import { Navbar } from '../Navbar/Navbar';

@inject('rootStore')
@observer
export class MenteeApplication extends Component {

    constructor(props) {
        super(props);
        this.dreamStore = this.props.rootStore.dreamStore
        this.menteeStore = this.props.rootStore.menteeAppStore
    }

    async componentDidMount() {
        const data = await api.verifyToken(this.dreamStore.token)
        if (!data || data.status !== 'valid') {
            this.dreamStore.token = ''
        }
    }

    render() {
        if (!this.dreamStore.token) {
            return <Redirect to='/' />
        }
        if (this.menteeStore.applied) {
            return <Redirect to='/landing' />
        }
        return (
            <div className="mentee-application">
                <Navbar store={this.dreamStore} {...this.props}/>
                <div className="container">
                    <div className="well">
                        <form>
                            <h1>Participant Registration Information </h1>
                            <small>Enrolling Student Dreamer (Participant) Info. Please only complete this form when you are ready to enroll. All others please contact us directly with any questions you have before enrollment. </small>
                            <div className="form-group">
                                <input name="email" value={this.menteeStore.data.email} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control first" type="text" placeholder="* Email Address" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Which Program Are You Registering *</label>
                                <div className="radio">
                                    <label className="control-label"><input onChange={(e) => this.menteeStore.radioChanged(e)} type="radio" name="program" value="Dream Women's Club - Mentorship &amp; workshops for women and single mothers"/>Dream Women's Club - Mentorship &amp; workshops for women and single mothers</label>
                                </div>
                                <div className="radio">
                                    <label className="control-label"><input onChange={(e) => this.menteeStore.radioChanged(e)} type="radio" name="program" value="We Dream Mentoring for Young Women ages 10 - 21"/>We Dream Mentoring for Young Women ages 10 - 21</label>
                                </div>
                                <div className="radio">
                                    <label className="control-label"><input onChange={(e) => this.menteeStore.radioChanged(e)} type="radio" name="program" value="E-mentoring for Boys or Girls ages 5-18"/>E-mentoring for Boys or Girls ages 5-18</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input name="name" value={this.menteeStore.data.name} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Dreamer's Name" />
                            </div>
                            <div className="form-group">
                                <input name="address" value={this.menteeStore.data.address} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Address (Include City, State, and Zip)" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Date of Birth *</label><input  name="dob" value={this.menteeStore.data.dob} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="date" />
                            </div>
                            <div className="form-group">
                                <input name="age" value={this.menteeStore.data.age} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Age" inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">School Attending &amp; City. Use home city for students home-schooled or attending school online. Please put none if the participant is not currently enrolled. *</label><input name="school" value={this.menteeStore.data.school} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" required="" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Grade for Current Academic Year *</label>
                                <select name="grade" onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control">
                                    <option value="" disabled selected>Select Grade</option>
                                    <option value="6">6th Grade</option>
                                    <option value="7">7th Grade</option>
                                    <option value="8">8th Grade</option>
                                    <option value="9">9th Grade</option>
                                    <option value="10">10th Grade</option>
                                    <option value="11">11th Grade</option>
                                    <option value="12">12th Grade</option>
                                    <option value="College">College</option>
                                    <option value="Not currently enrolled">Not currently enrolled (For single mothers only)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Do you have more than 1 Dreamer participating in any program? If so, please include their name, age, and date of birth. If not write no. *</label>
                                <input name="additionalDreamers" value={this.menteeStore.data.additionalDreamers} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">How many children do you have? (For Dream Women's Only) club </label>
                                <input name="numChildren" value={this.menteeStore.data.numChildren} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" required="" />
                            </div>
                            <h1>Parent/Guardian Information</h1>
                            <small>If you the participant are 18 or older, enter your information here</small>
                            <div className="form-group first">
                                <input name="parentName" value={this.menteeStore.data.parentName} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Name" />
                            </div>
                            <div className="form-group">
                                <input name="parentRelation" value={this.menteeStore.data.parentRelation} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Relationship to Dreamer" /></div>
                            <div className="form-group">
                                <input name="parentPhone" value={this.menteeStore.data.parentPhone} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Phone Number " inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <input name="parentEmail" value={this.menteeStore.data.parentEmail} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="Email (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input name="parentAddress" value={this.menteeStore.data.parentAddress} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="Address (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input name="emergencyName" value={this.menteeStore.data.emergencyName} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control" type="text" placeholder="* Emergency Contact Name" />
                            </div>
                            <div className="form-group">
                                <input name="emergencyRelation" value={this.menteeStore.data.emergencyRelation} onChange={(e) => this.menteeStore.updateProperty(e)}className="form-control" type="text" placeholder="* Emergency Contact Relationship" />
                            </div>
                            <div className="form-group">
                                <input name="emergencyPhone" value={this.menteeStore.data.emergencyPhone} onChange={(e) => this.menteeStore.updateProperty(e)}className="form-control" type="text" placeholder="* Emergency Contact Phone" />
                            </div>
                            <div className="form-group">
                                <input name="personsToPickUp" value={this.menteeStore.data.personsToPickUp} onChange={(e) => this.menteeStore.updateProperty(e)}className="form-control" type="text" placeholder="* Persons Authorized to Pick Up Dreamer (Name and Phone)" />
                            </div>
                            <h1>Medical Information</h1>
                            <div className="form-group">
                                <input name="doctor" value={this.menteeStore.data.doctor} onChange={(e) => this.menteeStore.updateProperty(e)}className="form-control" type="text" placeholder="* Dreamer's Primary Care Doctor" style={{ marginTop: "15px" }} />
                            </div>
                            <div className="form-group">
                                <input name="doctorPhone" value={this.menteeStore.data.doctorPhone} onChange={(e) => this.menteeStore.updateProperty(e)}className="form-control" type="text" required="" placeholder="* Doctor's Phone" />
                            </div>
                            <div className="form-group">
                                <input name="doctorAddress" value={this.menteeStore.data.doctorAddress} onChange={(e) => this.menteeStore.updateProperty(e)}className="form-control" type="text" placeholder="* Doctor's Address" inputMode="numeric" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Does the Dreamer have any allergies, chronic illness, or medical conditions either physical, behavioral, mental? If yes, please describe.</label>
                                <textarea name="allergies" value={this.menteeStore.data.allergies} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control"></textarea>
                            </div>
                            <h1>Additional Information</h1>
                            <div className="form-group">
                                <input name="hear" value={this.menteeStore.data.hear} onChange={(e) => this.menteeStore.updateProperty(e)} className="form-control first" type="text" placeholder="* How did you hear about us?" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Are you interested in purchasing a Dream t-shirt for $20? If so, what size?</label>
                                <div>
                                    <span>
                                        <label className="control-label radio-inline" style={{ marginRight: "10px" }}><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="XS" type="radio" />XS</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="S" type="radio" />S</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="M" type="radio" />M</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="L" type="radio" />L</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="XL" type="radio" />XL</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="XXL" type="radio" />XXL</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="Youth XS" type="radio" />Youth XS</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="Youth S" type="radio" />Youth S</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="Youth M" type="radio" />Youth M</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="tShirtSize" value="Youth L" type="radio" />Youth L</label>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label">
                                <input name="membershipFee" value={this.menteeStore.data.membershipFee} onClick={(e) => this.menteeStore.checkBoxChanged(e)} type="checkbox" />By submitting this registration, I understand that there will be a $25 nonrefundable registration fee per enrolled Dreamer, per year OR $50 per family. If applying to the Dream Mom's Club the $300 annual membership fee will apply. *</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label">
                                <input name="extraMoney" value={this.menteeStore.data.extraMoney} onClick={(e) => this.menteeStore.checkBoxChanged(e)} type="checkbox" />I am aware if the program in which I enroll charges a monthly fee, that additional fees for cultural arts trips, events, sports, private lessons, and tutoring may be required. I further understand that I am not required to or have my student participate in additional activities, and will not be responsible for the fee. I understand that trips and costs will be communicated to me at least one week in advance. I acknowledge that if I don't want myself or my student to participate in a field trip that they will be required to stay home that day, and I will not receive prorated tuition. *</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label">
                                <input name="tuition" value={this.menteeStore.data.tuition} onClick={(e) => this.menteeStore.checkBoxChanged(e)} type="checkbox" />Tuition is due on the 1st of each month if required. If tuition is not paid by the 5th, I understand that I will receive a late fee of $30, and if not paid by the 10th, I or my child will not be allowed to participate until tuition fees are paid. I understand that I may un-enroll at anytime, but I am responsible for tuition for any month in which I or my student were enrolled 1 day or more. I understand if I remove myself or my student from the program, I will be required to complete full registration at that time. Reminder: Not all services require a fee. *</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label">
                                <input name="liability" value={this.menteeStore.data.liability} onClick={(e) => this.menteeStore.checkBoxChanged(e)} type="checkbox" />RELEASE OF LIABILITY: I hereby release and hold harmless Dream It Forward Foundation Inc, its officers, employees, agents, representatives, volunteers, heirs, executors, and assigns from all liability for personal injury, as well as all property damage or loss arising out of my/my child’s participation in the Dream Center in any program and any travel/transportation related to these Programs, whether paid for by myself or by the center. I understand that this release and indemnification releases liability for the conduct of the Center and its officers, employees, agents, representatives, volunteers, heirs, executors, and assigns. *</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label">PHOTO RELEASE: The undersigned gives permission to the Academy to use photographs and audio and/or video recordings of the Dream It Forward Foundation Participant for fundraising and/or marketing purposes. On occasion, with permission, Participant photographs may be included in promotional videos, websites, Center albums, newsletters or other promotional materials. The Academy respects the privacy of its Participants and does not allow unauthorized visitors to photograph or video the Center or its Participants. *</label>
                                <div>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="photoRelease" value="Yes" type="radio" />Yes</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input onChange={(e) => this.menteeStore.radioChanged(e)} name="photoRelease" value="No" type="radio" />No</label>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label">
                                <input name="permission" value={this.menteeStore.data.permission} onClick={(e) => this.menteeStore.checkBoxChanged(e)} type="checkbox" />By checking the "I Agree" box below, the undersigned gives permission for the Dreamer to participate in any and all activities, including transportation (if needed) to and from the Dream Academy for activities, except those specifically prohibited by the participant’s physician or parent/legal guardian). *</label>
                            </div>
                        </form>
                        <button onClick={() => this.menteeStore.onSubmit()} className="btn btn-primary" type="button">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}