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
        return (
            <div className="mentee-modal">
                <div className="container">
                    <div className="well">
                        <h1>Mentee Information </h1>
                        <div >
                            Email: 
                        </div>
                        <div >
                            Registered Program: 
                        </div>
                        <div >
                            Name: 
                        </div>
                        <div >
                            Address: 
                        </div>
                        <div >
                            Date of Birth: 
                        </div>
                        <div >
                            Age: 
                        </div>
                        <div >
                            School and City: 
                        </div>
                        <div >
                            Grade Level: 
                        </div>
                        <div >
                            Do you have more than 1 Dreamer participating in any program? 
                        </div>
                        <div >
                            How many children do you have? (For Dream Women's Only) club:
                        </div>
                        <h1>Parent/Guardian Information</h1>
                        <div>
                            Parent Name:
                        </div>
                        <div >
                            Parent Relationship: 
                        </div>
                        <div >
                            Parent Phone: 
                        </div>
                        <div >
                            Parent Email: 
                        </div>
                        <div >
                            Parent Address: 
                        </div>
                        <div >
                            Emergency Contact Name: 
                        </div>
                        <div >
                            Emergency Contact Relationship: 
                        </div>
                        <div >
                            Emergency Contact Phone: 
                        </div>
                        <div >
                            Persons Authorized to Pick Up Dreamer: 
                        </div>
                        <h1>Medical Information</h1>
                        <div >
                            Dreamer's Primary Care Doctor: 
                        </div>
                        <div >
                            Doctor's Phone: 
                        </div>
                        <div >
                            Doctor's Address: 
                        </div>
                        <div >
                            Does the Dreamer have any allergies, chronic illness, or medical conditions either physical, behavioral, mental?: 
                        </div>
                        <h1>Additional Information</h1>
                        <div >
                            How did you hear about us? 
                        </div>
                        <div >
                            Shirt Size: 
                        </div>
                        <div >
                            Registration Fee Agreed: 
                        </div>
                        <div >
                            Additional Fees Agreed: 
                        </div>
                        <div >
                            Tuition Agreed: 
                        </div>
                        <div >
                            Release of Liability Agreed: 
                        </div>
                        <div >
                            Photo Release Agreed: 
                        </div>
                        <div >
                            Permission Granted: 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}