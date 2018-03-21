import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./Mentor/Application.css";

export class SubmittedPage extends Component {

    constructor(props) {
        super(props);
        this.onLogout = this.onLogout.bind(this);
        this.state ={

        }
    }

    onLogout() {
        console.log("Fdsf")
        localStorage.removeItem('token')
        this.props.store.token = ''
    }

    render() {
        return (
            <div className="login-clean">
                <button onClick={() => this.onLogout()} style={{ marginLeft: '90%', marginBottom: 20 }} className="btn-warning" type="button">Logout</button>
                <form method="post">
                    <div className="illustration">
                        <img className="img-responsive" src="https://static.wixstatic.com/media/ca0178_35f7a49f9b32404b953369516a9d55f0.png/v1/fill/w_800,h_539,al_c/ca0178_35f7a49f9b32404b953369516a9d55f0.png"/>
                    </div>
                    <h3 className="text-center">Thanks for Applying!</h3>
                </form>
            </div>
        );
    }
}
