import React from 'react';

export class Login extends React.Component {
    render() {
        return (
            <div className="login-clean">
                <form action="/api/login" method="post">
                    <h2 className="sr-only">Login Form</h2>
                    <div className="illustration"><img className="img-responsive" src="https://static.wixstatic.com/media/ca0178_35f7a49f9b32404b953369516a9d55f0.png/v1/fill/w_800,h_539,al_c/ca0178_35f7a49f9b32404b953369516a9d55f0.png" alt="Dream It Forward Logo"/></div>
                    <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                    <div className="form-group"><button className="btn btn-primary btn-block" type="submit" style={{ backgroundColor: "rgb(34,167,95)" }}>Login</button></div>
                    <div className="form-group"><a className="btn btn-primary btn-block" href="/register">Register </a></div>
                </form>
            </div>
        );
    }
}

