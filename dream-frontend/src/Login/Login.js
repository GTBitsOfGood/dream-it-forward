import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';
import * as api from '../Utils/api'
import { observer, inject } from 'mobx-react'

@inject('rootStore')
@observer
export class Login extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
        this.dreamStore = this.props.rootStore.dreamStore
    }

    async onSubmit(e) {
        e.preventDefault()
        if (this.dreamStore.email && this.dreamStore.password) {
            const data = await api.login(this.dreamStore.email, this.dreamStore.password)
            if (data.token) {
                this.dreamStore.email = '';
                this.dreamStore.password = '';
                this.dreamStore.token = data.token;
                localStorage.setItem('token', data.token);
            }
            else window.toastr.error('Login failed')
        }
    }

    render() {
        if (this.dreamStore.token) {
            return <Redirect to='/landing' />
        }
        return (
            <div className="login-clean">
                <form>
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><img className="img-responsive" src="https://static.wixstatic.com/media/ca0178_35f7a49f9b32404b953369516a9d55f0.png/v1/fill/w_800,h_539,al_c/ca0178_35f7a49f9b32404b953369516a9d55f0.png" alt="Dream It Forward Logo" /></div>
                    <div className="form-group"><input value={this.dreamStore.email} onChange={(e) => this.dreamStore.updateProperty(e)} className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input value={this.dreamStore.password} onChange={(e) => this.dreamStore.updateProperty(e)} className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="form-group"><button className="btn btn-info btn-block" onClick={(e) => this.onSubmit(e)}>Login</button></div>
                    <div className="form-group"><a className="btn btn-primary btn-block" href="/register">Register </a></div>
                </form>
            </div>
        );
    }
}