import React from 'react';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
        };

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state.email);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" onChange={this.handleChangeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" onChange={this.handleChangePassword} />
                                </div>
                                <div className="form-group mt-2">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}
export default Login;