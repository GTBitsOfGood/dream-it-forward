import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './MenteeModal.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'

@inject('rootStore')
@observer
export class MenteeModal extends Component {

    constructor(props) {
        super(props);
        this.dreamStore = this.props.rootStore.dreamStore
        this.menteeStore = this.props.rootStore.matchingStore
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
        let mentee = JSON.parse(this.menteeStore.mentees[this.menteeStore.menteeSelected].menteeApp);
        console.log(mentee)
        return (
            <div className="mentee-modal">
                <div className="container">
                    <div className="well">
                        <h1>Mentee Information </h1>
                        <div >
                            Email: <b>{mentee.email}</b>
                        </div>
                        <div >
                            Registered Program: <b>{mentee.program}</b>
                        </div>
                        <div >
                            Name: <b>{mentee.name}</b>
                        </div>
                        <div >
                            Address: <b>{mentee.address}</b>
                        </div>
                        <div >
                            Date of Birth: <b>{mentee.dob}</b>
                        </div>
                        <div >
                            Age: <b>{mentee.age}</b>
                        </div>
                        <div >
                            School and City: <b>{mentee.school}</b>
                        </div>
                        <div >
                            Grade Level: <b>{mentee.grade}</b>
                        </div>
                        <div >
                            Do you have more than 1 Dreamer participating in any program? <b>{mentee.additionalDreamers}</b>
                        </div>
                        <div >
                            How many children do you have? (For Dream Women's Only) club: <b>{mentee.numChildren}</b>
                        </div>
                        <h1>Parent/Guardian Information</h1>
                        <div>
                            Parent Name: <b>{mentee.parentName}</b>
                        </div>
                        <div >
                            Parent Relationship: <b>{mentee.parentRelation}</b>
                        </div>
                        <div >
                            Parent Phone: <b>{mentee.parentPhone}</b>
                        </div>
                        <div >
                            Parent Email: <b>{mentee.parentEmail}</b>
                        </div>
                        <div >
                            Parent Address: <b>{mentee.parentAddress}</b>
                        </div>
                        <div >
                            Emergency Contact Name: <b>{mentee.emergencyName}</b>
                        </div>
                        <div >
                            Emergency Contact Relationship: <b>{mentee.emergencyRelation}</b>
                        </div>
                        <div >
                            Emergency Contact Phone: <b>{mentee.emergencyPhone}</b>
                        </div>
                        <div >
                            Persons Authorized to Pick Up Dreamer: <b>{mentee.personsToPickUp}</b>
                        </div>
                        <h1>Medical Information</h1>
                        <div >
                            Dreamer's Primary Care Doctor: <b>{mentee.doctor}</b>
                        </div>
                        <div >
                            Doctor's Phone: <b>{mentee.doctorPhone}</b>
                        </div>
                        <div >
                            Doctor's Address: <b>{mentee.doctorAddress}</b>
                        </div>
                        <div >
                            Does the Dreamer have any allergies, chronic illness, or medical conditions either physical, behavioral, mental? <b>{mentee.allergies}</b> 
                        </div>
                        <h1>Additional Information</h1>
                        <div >
                            How did you hear about us? <b>{mentee.hear}</b>
                        </div>
                        <div >
                            Shirt Size: <b>{mentee.tShirtSize}</b>
                        </div>
                        <div >
                            Registration Fee Agreed: <b>{mentee.membershipFee}</b>
                        </div>
                        <div >
                            Additional Fees Agreed: <b>{mentee.extraMoney}</b>
                        </div>
                        <div >
                            Tuition Agreed: <b>{mentee.tuition}</b>
                        </div>
                        <div >
                            Release of Liability Agreed: <b>{mentee.liability}</b>
                        </div>
                        <div >
                            Photo Release Agreed: <b>{mentee.photoRelease}</b>
                        </div>
                        <div >
                            Permission Granted: <b>{mentee.permission}</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}