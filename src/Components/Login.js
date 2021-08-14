import React from 'react';
function Login() {
    return(
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" />
                        </div>
                        <div className="form-group mt-2">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Login;