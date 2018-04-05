import React from 'react';
import './Highlight-Clean.css';
import * as api from '../Utils/api';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('rootStore')
@observer
export class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.dreamStore = this.props.rootStore.dreamStore
    }

    render() {
        if (!this.dreamStore.token) {
            return <Redirect to='/' />
        }
        return (
            <div className="highlight-clean">
                <button onClick={() => this.dreamStore.onLogout()} style={{ marginLeft: '90%', marginBottom: 20 }} className="btn btn-warning" type="button">Logout</button>
                <div className="container">
                    <div className="intro">
                        <h2 className="text-center">Dream It Forward</h2>
                        <p className="text-center">Join the Dream It Forward Foundation!</p>
                    </div>
                    <div className="buttons">
                        <a className="btn btn-primary" role="button" href="/mentee-app">mentee application</a>
                        <a className="btn btn-primary" role="button" href="/mentor-app">mentor application</a>
                    </div>
                </div>
            </div>
        );
    }
}
