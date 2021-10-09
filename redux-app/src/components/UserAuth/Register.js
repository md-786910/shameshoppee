import React, { useState } from 'react'
import { useHistory, Link } from "react-router-dom"

function Register() {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "", email: "", pass: "", conpass: "", phone: ""
    })
    const textHandle = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const register = async (e) => {
        try {
            e.preventDefault();
            const { name, email, pass, phone, conpass } = user

            if (!name || !email || !pass || !phone || !conpass) {
                alert("please fill the register form")
            }
            else {
                let res = await fetch("/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, pass, phone, conpass })
                })

                let data = await res.json()

                if (res.status === 200) {
                    alert("Register suucessfully")

                    history.push("/login")
                }
                else {
                    alert("user already registered")
                }
            }
        } catch (error) {
            alert("something went wrong user not register successfully")
        }
    }

    return (
        <div className="registerPage">
            <div className="bacImahe">
                <img src="https://source.unsplash.com/1600x700/?tshirt" alt="" />

                <div className="makeBox">

                    <div className="boxContainer">
                        <div className="registerTitle">
                            <h1>Register</h1>
                        </div>

                        <div className="formDiv">
                            <form method="post" className="registerForm">
                                <input type="text" name="name" id="" placeholder="Name" value={user.name} onChange={textHandle} />

                                <input type="email" name="email" id="" placeholder="Email" value={user.email} onChange={textHandle} />

                                <input type="number" name="phone" id="" placeholder="Phone" value={user.phone} onChange={textHandle} />

                                <input type="password" name="pass" id="" placeholder="Password" value={user.pass} onChange={textHandle} />

                                <input type="text" name="conpass" id="" placeholder="confirm password" value={user.conpass} onChange={textHandle} />


                                <div className="makeCheckBox">
                                    <div className="confirmCheckBox">
                                        <input type="checkbox" name="check" id="" />
                                        <p>
                                            Term & Condition
                                        </p>
                                    </div>
                                    <div className="forgetPass">
                                        <Link to="/forgetPass" style={{ color: 'blue', textDecoration: 'underline' }}>
                                            forget Password
                                        </Link>
                                    </div>
                                </div>

                                <div className="btnRegister">
                                    <button type="submit" onClick={register} >Register</button>

                                </div>
                                <div className="alreadyLogin">
                                    <p>
                                        already account <Link to="/login">
                                            login</Link>
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

export default Register
