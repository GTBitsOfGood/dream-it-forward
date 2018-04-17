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
        let mentor = JSON.parse(this.mentorStore.mentors[this.mentorStore.mentorSelected].mentorApp);
        console.log(mentor)
        return (
            <div className="mentor-modal">
                <div className="container">
                    <div className="well">
                        <h1>Mentor Information </h1>
                        <div >
                            Name: <b>{mentor.name}</b>
                        </div>
                        <div >
                            Email: <b>{mentor.email}</b>
                        </div>
                        <div >
                            Phone: <b>{mentor.phone}</b>
                        </div>
                        <div >
                            Gender: <b>{mentor.gender}</b>
                        </div>
                        <div >
                            Date of Birth: <b>{mentor.dob}</b>
                        </div>
                        <div >
                            City/State of Residence: <b>{mentor.cityState}</b>
                        </div>
                        <div >
                            Employer: <b>{mentor.employer}</b>
                        </div>
                        <div >
                            Work Phone: <b>{mentor.workPhone}</b>
                        </div>
                        <div >
                            Strengths: <b>{mentor.strengths}</b>
                        </div>
                        <div>
                            Highest Level of Education Attained: <b>{mentor.education}</b>
                        </div>
                        <div >
                            Mentee Grade Level Preferred: <b>{mentor.gradeLevel}</b>
                        </div>
                        <div >
                            Days of Week Availability: <b>{JSON.stringify(mentor.days)}</b>
                        </div>
                        <div >
                            Time of Day Availability: <b>{JSON.stringify(mentor.times)}</b>
                        </div>
                        <div >
                            Time Commitment Agreement: <b>{mentor.timeCommitment}</b>
                        </div>
                        <div >
                            Training Agreement: <b>{mentor.training}</b>
                        </div>
                        <div >
                            Felonies in Last 10 Years: <b>{mentor.felony}</b>
                        </div>
                        <div >
                            Under Indictment: <b>{mentor.indictment}</b>
                        </div>
                        <div >
                            Background Check Agreement: <b>{mentor.backgroundCheck}</b>
                        </div>
                        <div >
                            Positions of Interest: <b>{JSON.stringify(mentor.position)}</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}