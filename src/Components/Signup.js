import React, { useState } from 'react';
// import { useForm } from "react-hook-form";

const dummyData = [{
    name: 'a',
    email: 'a@b.com',
    password: 123
}];

function Signup() {
  

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setSignupData({
            ...signupData,
            [event.target.name]: event.target.value
        });
        console.log('signupData');
        console.log(signupData);

        localStorage.setItem("userData" , JSON.stringify(dummyData));

    }

    const formHandler = (event) => 
    {
        event.preventDefault();
        dummyData.push(signupData);

        alert("done");
        console.log(dummyData);
        setSignupData({
            name: '',
            email: '',
            password: ''
        });
    }


    return (
        <>
            <form onSubmit={formHandler}>
                <div className="container py-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" type="text" value={signupData.name} className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" type="email" value={signupData.email} className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" type="password" value={signupData.password} className="form-control" onChange={handleChange} />
                            </div>
                            <div className="form-group mt-2">
                                <button type="submit" className="btn btn-primary">Sign up</button>
                            </div>
                        </div>

                    </div>


                </div>

            </form>
        </>
    )
}

export default Signup;