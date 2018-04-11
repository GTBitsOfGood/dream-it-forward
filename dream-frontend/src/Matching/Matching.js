import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Matching.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'

@inject('rootStore')
@observer
export class Matching extends Component {

    constructor(props) {
        super(props)
        this.dreamStore = this.props.rootStore.dreamStore
        this.matchingStore = this.props.rootStore.matchingStore
    }

    async componentDidMount() {

    }

    render() {
        if (!this.dreamStore.token) {
            return <Redirect to='/' />
        }
        return (
            <div class="container">
                <div id="minimal-tabs">
                    <ul class="nav nav-tabs">
                        <li class="active"><a href="#tab-1" role="tab" data-toggle="tab">Mentees</a></li>
                        <li><a href="#tab-2" role="tab" data-toggle="tab">Mentors</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" role="tabpanel" id="tab-1">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mentor</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John Doe</td>
                                            <td><span class="badge" style={{padding:9}}>Billy Bob Jo</span></td>
                                            <td style={{textAlign: 'center'}}><button class="btn btn-primary" type="button">View Info</button></td>
                                            <td style={{textAlign: 'center'}}><button class="btn btn-primary" type="button">Match</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="tab-pane" role="tabpanel" id="tab-2">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mentees</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John Doe</td>
                                            <td><span class="badge" style={{padding:9}}>Long Indian Name</span></td>
                                            <td style={{textAlign: 'center'}}><button class="btn btn-primary" type="button">View Info</button></td>
                                            <td style={{textAlign: 'center'}}><button class="btn btn-primary" type="button">Match</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}