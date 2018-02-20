import React from 'react';
import '../Login/Login.css'

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passConfirm: '',
            password: ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        if (this.state.email && this.state.passConfirm && this.state.password) {
            if (this.state.passConfirm !== this.state.password) {
                console.log("passwords don't match");
            } else {
                console.log("SUCCESS");
                // do backend
            }
        } else {
            console.log("fill in all inputs");
        }
    }

    render() {
        return (
            <div className="login-clean">
                <form>
                    <h2 className="sr-only">Registration Form</h2>
                    <div className="illustration"><img className="img-responsive" src="https://static.wixstatic.com/media/ca0178_35f7a49f9b32404b953369516a9d55f0.png/v1/fill/w_800,h_539,al_c/ca0178_35f7a49f9b32404b953369516a9d55f0.png" alt="Dream It Forward Logo"/></div>
                    <div className="form-group"><input value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}} className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}} className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="form-group"><input value={this.state.passConfirm} onChange={(e) => {this.setState({passConfirm: e.target.value})}} className="form-control" type="password" placeholder="Confirm Password" /></div>                    
                    <div className="form-group"><button className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)} style={{ backgroundColor: "rgb(34,167,95)" }}>Register</button></div>
                </form>
            </div>
        );
    }
}

