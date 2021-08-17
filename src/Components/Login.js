import React, { useState } from 'react';
import { useHistory } from 'react-router';


const users=  JSON.parse(localStorage.getItem("userData"));
console.log(users);

function Login() {
    let history = useHistory();
    const [formdata, setFormdata] = useState({
        'email': '',
        'password': ''
    });
    const handleChange = event => {
        formdata[event.target.name] = event.target.value;
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        var index = users.findIndex((user) => {
            return user.email == formdata.email && user.password == formdata.password
        });
        if (index != -1) {
            alert('Login Success');
            history.push("/Product");
        }else{
            alert('Login Not Success');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" type="text" className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" className="form-control" onChange={handleChange} />
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
export default Login;