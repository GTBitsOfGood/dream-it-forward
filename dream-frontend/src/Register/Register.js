import React from 'react';
import '../Login/Login.css'
import * as api from '../Utils/api'
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@inject('rootStore')
@observer
export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.dreamStore = this.props.rootStore.dreamStore
    }

    async onSubmit(e) {
        e.preventDefault();
        if (!this.dreamStore.email || !this.dreamStore.password || !this.dreamStore.passConfirm) {
          window.toastr.error('Please fill all fields')
        }
        if (this.dreamStore.email && this.dreamStore.passConfirm && this.dreamStore.password) {
            if (this.dreamStore.passConfirm !== this.dreamStore.password) {
                window.toastr.error('Passwords don\'t match')
            } else {
                const data = await api.register(this.dreamStore.email, this.dreamStore.password);
                if (data.status === 'success') {
                    this.dreamStore.email = '';
                    this.dreamStore.password = '';
                    window.toastr.success('Account created')
                    this.props.history.push('/')
                } else {
                    window.toastr.error('Cannot create account')
                }
            }
        }
    }

    render() {
        if (this.dreamStore.token) {
            return <Redirect to='/mentee-app' />
        }
        return (
            <div className="login-clean">
                <form>
                    <h2 className="sr-only">Registration Form</h2>
                    <div className="illustration"><img className="img-responsive" src="https://static.wixstatic.com/media/ca0178_35f7a49f9b32404b953369516a9d55f0.png/v1/fill/w_800,h_539,al_c/ca0178_35f7a49f9b32404b953369516a9d55f0.png" alt="Dream It Forward Logo"/></div>
                    <div className="form-group"><input value={this.dreamStore.email} onChange={(e) => this.dreamStore.updateProperty(e)} className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input value={this.dreamStore.password} onChange={(e) => this.dreamStore.updateProperty(e)} className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="form-group"><input value={this.dreamStore.passConfirm} onChange={(e) => this.dreamStore.updateProperty(e)} className="form-control" type="password" name="passConfirm" placeholder="Confirm Password" /></div>
                    <div className="form-group"><button className="btn btn-info btn-block" onClick={(e) => this.onSubmit(e)}>Register</button></div>
                </form>
            </div>
        );
    }
}
