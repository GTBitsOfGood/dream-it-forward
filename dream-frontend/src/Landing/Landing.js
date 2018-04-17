import React from 'react';
import './Highlight-Clean.css';
import * as api from '../Utils/api';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Navbar } from '../Navbar/Navbar';
import { Matching } from '../Matching/Matching';

@inject('rootStore')
@observer
export class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.dreamStore = this.props.rootStore.dreamStore
    }

    async componentDidMount() {
        const data = await api.verifyToken(this.dreamStore.token)
        if (!data || data.status !== 'valid') {
            this.dreamStore.token = ''
        }
        await this.dreamStore.fetchState()
    }

    render() {
        if (!this.dreamStore.token) {
            return <Redirect to='/' />
        }
        if (this.dreamStore.state === 1) {
            return (
                <div className="highlight-clean">
                    <Navbar store={this.dreamStore} {...this.props} />
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center">Dream It Forward</h2>
                            <h4 className="text-center">Thanks for Applying!</h4>
                            <br />
                            <p className="text-center"><img src='https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png' height={200} /></p>
                        </div>
                    </div>
                </div>
            );
        }
        if (this.dreamStore.admin) {
            return (
                <div className="highlight-clean">
                    <Matching />
                </div>
            )
        }
        return (
            <div className="highlight-clean">
                <Navbar store={this.dreamStore} {...this.props} />
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
