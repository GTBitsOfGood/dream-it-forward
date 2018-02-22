import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Application.css'

export class MenteeApplication extends Component {

    constructor(props) {
        super(props);
        this.updateProperty = this.updateProperty.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            
        }
    }

    updateProperty(key, value) {
        this.props.store[key] = value
    }

    onChange(event) {
        this.updateProperty(event.target.name, event.target.value)
    }

    render() {
        return (
            <div className="application">
                <div className="container">
                    <div className="well">
                        <form>
                            <h1>Participant Registration Information </h1>
                            <small>Enrolling Student Dreamer (Participant) Info. Please only complete this form when you are ready to enroll. All others please contact us directly with any questions you have before enrollment. </small>
                            <div className="form-group">
                                <input value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} className="form-control first" type="text" placeholder="* Email Address" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Which Program Are You Registering</label>
                                <div className="radio">
                                    <label className="control-label"><input type="radio" />Dream Women's Club - Mentorship &amp; workshops for women and single mothers</label>
                                </div>
                                <div className="radio">
                                    <label className="control-label"><input type="radio" />We Dream Mentoring for Young Women ages 10 - 21</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} className="form-control" type="text" placeholder="Dreamer's Name" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.address} onChange={(e) => { this.setState({ address: e.target.value }) }} className="form-control" type="text" placeholder="Address (Include City, State, and Zip)" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Date of Birth</label><input className="form-control" type="date" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.age} onChange={(e) => { this.setState({ age: e.target.value }) }} className="form-control" type="text" placeholder="Age" inputmode="numeric" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">School Attending &amp; City. Use home city for students home-schooled or attending school online. Please put none if the participant is not currently enrolled. </label><input className="form-control" type="text" required="" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Grade for Current Academic Year </label>
                                <select className="form-control">
                                    <option value="6" selected="">6th Grade</option>
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
                            <div className="form-group">
                                <label className="control-label">Do you have more than 1 Dreamer participating in any program? If so, please include their name, age, and date of birth. If not write no. </label>
                                <div className="radio">
                                    <label className="control-label"><input type="radio" />Label</label>
                                </div>
                                <div className="radio">
                                    <label className="control-label"><input type="radio" />Label</label>
                                </div>
                                <input value={this.state.additionalDreamers} onChange={(e) => { this.setState({ additionalDreamers: e.target.value }) }} className="form-control" type="text" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">How many children do you have? (For Dream Women's Only) club </label>
                                <input value={this.state.numChildren} onChange={(e) => { this.setState({ numChildren: e.target.value }) }} className="form-control" type="text" required="" />
                            </div>
                            <h1>Parent/Guardian Information</h1>
                            <small>If you the participant is 18 or older, enter your information here</small>
                            <div className="form-group first">
                                <input value={this.state.parentName} onChange={(e) => { this.setState({ parentName: e.target.value }) }} className="form-control" type="text" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input value={this.state.parentRelation} onChange={(e) => { this.setState({ parentRelation: e.target.value }) }} className="form-control" type="text" placeholder="Relationship to Dreamer" /></div>
                            <div className="form-group">
                                <input value={this.state.parentPhone} onChange={(e) => { this.setState({ email: e.target.value }) }} className="form-control" type="text" placeholder="Phone Number " inputmode="numeric" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Email (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Address (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Address (If different from Dreamer)" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="* Emergency Contact Name" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="* Emergency Contact Relationship" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="* Emergency Contact Phone" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="* Persons Authorized to Pick Up Dreamer (Name and Phone)" />
                            </div>
                            <h1>Medical Information</h1>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="* Dreamer's Primary Care Doctor" style={{ marginTop: "15px" }} />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" required="" placeholder="* Doctor's Phone" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="* Doctor's Address" inputmode="numeric" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">* Does the Dreamer have any allergies, chronic illness, or medical conditions either physical, behavioral, mental? If yes, please describe.</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <h1>Additional Information</h1>
                            <div className="form-group">
                                <input className="form-control first" type="text" placeholder="* How did you hear about us?" />
                            </div>
                            <div className="form-group">
                                <label className="control-label">Are you interested in purchasing a Dream t-shirt for $20? If so, what size?</label>
                                <div>
                                    <span>
                                        <label className="control-label radio-inline" style={{ marginRight: "10px" }}><input type="radio" />XS</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />S</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />M</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />L</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />XL</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />XXL</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />Youth XS</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />Youth S</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />Youth M</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />Youth L</label>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" /><label className="control-label">* By submitting this registration, I understand that there will be a $25 nonrefundable registration fee per enrolled Dreamer, per year OR $50 per family. If applying to the Dream Mom's Club the $300 annual membership fee will apply.</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" /><label className="control-label">* I am aware if the program in which I enroll charges a monthly fee, that additional fees for cultural arts trips, events, sports, private lessons, and tutoring may be required. I further understand that I am not required to or have my student participate in additional activities, and will not be responsible for the fee. I understand that trips and costs will be communicated to me at least one week in advance. I acknowledge that if I don't want myself or my student to participate in a field trip that they will be required to stay home that day, and I will not receive prorated tuition.</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" /><label className="control-label">* Tuition is due on the 1st of each month if required. If tuition is not paid by the 5th, I understand that I will receive a late fee of $30, and if not paid by the 10th, I or my child will not be allowed to participate until tuition fees are paid. I understand that I may un-enroll at anytime, but I am responsible for tuition for any month in which I or my student were enrolled 1 day or more. I understand if I remove myself or my student from the program, I will be required to complete full registration at that time. Reminder: Not all services require a fee.</label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" /><label className="control-label">* RELEASE OF LIABILITY: I hereby release and hold harmless Dream It Forward Foundation Inc, its officers, employees, agents, representatives, volunteers, heirs, executors, and assigns from all liability for personal injury, as well as all property damage or loss arising out of my/my child’s participation in the Dream Center in any program and any travel/transportation related to these Programs, whether paid for by myself or by the center. I understand that this release and indemnification releases liability for the conduct of the Center and its officers, employees, agents, representatives, volunteers, heirs, executors, and assigns.</label>
                            </div>
                            <div className="form-group">
                                <label className="control-label">* PHOTO RELEASE: The undersigned gives permission to the Academy to use photographs and audio and/or video recordings of the Dream It Forward Foundation Participant for fundraising and/or marketing purposes. On occasion, with permission, Participant photographs may be included in promotional videos, websites, Center albums, newsletters or other promotional materials. The Academy respects the privacy of its Participants and does not allow unauthorized visitors to photograph or video the Center or its Participants</label>
                                <div>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />Yes</label>
                                    </span>
                                    <span>
                                        <label className="control-label radio-inline"><input type="radio" />No</label>
                                    </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" /><label className="control-label">* By checking the "I Agree" box below, the undersigned gives permission for the Dreamer to participate in any and all activities, including transportation (if needed) to and from the Dream Academy for activities, except those specifically prohibited by the participant’s physician or parent/legal guardian).</label>
                            </div>
                        </form>
                        <button className="btn btn-primary" type="button">Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}