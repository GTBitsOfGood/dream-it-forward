import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Navbar.css'
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'

@inject('rootStore')
@observer
export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.dreamStore = this.props.rootStore.dreamStore;
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header"><a className="navbar-brand" href="/landing">Dream It Forward</a><button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button></div>
                    <div
                        className="collapse navbar-collapse" id="navcol-1">
                        <ul className="nav navbar-nav navbar-right">
                            {/* <li role="presentation"><a href="/matching">Matching</a></li> */}
                            <li role="presentation"><button type="button" className="btn btn-default navbar-btn" onClick={() => this.dreamStore.onLogout()}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}