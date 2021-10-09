import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom"

function Login() {

    const History = useHistory()

    const [user, setUser] = useState({
        email: "", pass: ""
    })

    const handleText = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value })
    }


    const login1 = async (e) => {
        e.preventDefault();
        const { email, pass } = user

        if (!email || !pass) {
            alert("Please enter invlid credentials")
        }
        else {
            let res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, pass })
            })

            let data = await res.json()

            if (res.status === 200 || res.status === 500) {
                alert("user login suucessfully")
                History.push("/")
            }

            // md@gmail.com

            else {
                alert("user invlid credentials")
            }
        }

    }





    return (
        <div className="registerPage">
            <div className="bacImage">
                <img src="https://source.unsplash.com/1600x700/?dress" alt="" />

                <div className="makeBox">

                    <div className="boxContainer">
                        <div className="registerTitle">
                            <h1>Login</h1>
                        </div>

                        <div className="formDiv">
                            <form method="post" className="registerForm">

                                <input type="email" name="email" id="" value={user.email} placeholder="Email" onChange={handleText} />

                                <input type="password" name="pass" id="" value={user.pass} placeholder="Password" onChange={handleText} />

                                <div className="makeCheckBox">
                                    <div className="confirmCheckBox">
                                        <input type="checkbox" name="check" id="" />
                                        <p>
                                            Term & Condition
                                        </p>
                                    </div>
                                    <div className="forgetPass">
                                        <a href="/forgetPass" style={{ color: 'blue', textDecoration: 'underline' }}>
                                            forget Password
                                        </a>
                                    </div>
                                </div>

                                <div className="btnRegister">
                                    <button type="submit" onClick={login1} >Login</button>

                                </div>
                                <div className="alreadyLogin">
                                    <p>
                                        Create account <Link to="/register">
                                            Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
