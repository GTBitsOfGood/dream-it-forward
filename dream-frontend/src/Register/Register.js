import React from 'react';
import '../Login/Login.css'
import { observer } from 'mobx-react';

@observer
export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.updateProperty = this.updateProperty.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }

    updateProperty(key, value) {
        this.props.store[key] = value
    }

    onChange(event) {
        this.updateProperty(event.target.name, event.target.value)
    }

    onSubmit(e) {
        e.preventDefault();
        const {store} = this.props
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
        const {store} = this.props
        return (
            <div className="login-clean">
                <form>
                    <h2 className="sr-only">Registration Form</h2>
                    <div className="illustration"><img className="img-responsive" src="https://static.wixstatic.com/media/ca0178_35f7a49f9b32404b953369516a9d55f0.png/v1/fill/w_800,h_539,al_c/ca0178_35f7a49f9b32404b953369516a9d55f0.png" alt="Dream It Forward Logo"/></div>
                    <div className="form-group"><input value={store.email} onChange={this.onChange} className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input value={store.password} onChange={this.onChange} className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="form-group"><input value={store.passConfirm} onChange={this.onChange} className="form-control" type="password" placeholder="Confirm Password" /></div>                    
                    <div className="form-group"><button className="btn btn-primary btn-block" onClick={(e) => this.onSubmit(e)} style={{ backgroundColor: "rgb(34,167,95)" }}>Register</button></div>
                </form>
            </div>
        );
    }
}

