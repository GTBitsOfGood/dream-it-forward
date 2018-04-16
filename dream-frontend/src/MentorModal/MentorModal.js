import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './MentorModal.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'

@inject('rootStore')
@observer
export class MentorModal extends Component {

    constructor(props) {
        super(props);
        this.dreamStore = this.props.rootStore.dreamStore
        this.mentorStore = this.props.rootStore.matchingStore
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
            <div className="mentor-modal">
                <div className="container">
                    <div className="well">
                        <h1>Mentor Information </h1>
                        <div >
                            Name: 
                        </div>
                        <div >
                            Email: 
                        </div>
                        <div >
                            Phone: 
                        </div>
                        <div >
                            Gender: 
                        </div>
                        <div >
                            Date of Birth: 
                        </div>
                        <div >
                            City/State of Residence: 
                        </div>
                        <div >
                            Employer: 
                        </div>
                        <div >
                            Work Phone: 
                        </div>
                        <div >
                            Strengths:  
                        </div>
                        <div>
                            Highest Level of Education Attained: 
                        </div>
                        <div >
                            Mentee Grade Level Preferred:
                        </div>
                        <div >
                            Days of Week Availability: 
                        </div>
                        <div >
                            Time of Day Availability: 
                        </div>
                        <div >
                            Time Commitment Agreement: 
                        </div>
                        <div >
                            Training Agreement: 
                        </div>
                        <div >
                            Felonies in Last 10 Years: 
                        </div>
                        <div >
                            Under Indictment: 
                        </div>
                        <div >
                            Background Check Agreement: 
                        </div>
                        <div >
                            Positions of Interest: 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}