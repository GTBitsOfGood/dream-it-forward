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
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header"><a class="navbar-brand" href="/landing">Dream It Forward</a><button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>
                    <div
                        class="collapse navbar-collapse" id="navcol-1">
                        <ul class="nav navbar-nav navbar-right">
                            <li role="presentation"><a href="/matching">Matching</a></li>
                            <li role="presentation"><button type="button" class="btn btn-default navbar-btn" onClick={() => this.dreamStore.onLogout()}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}