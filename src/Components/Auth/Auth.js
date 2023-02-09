import React, { useState } from "react";
import "./Auth.css";
import Wrapper from "../../HOC/Wrapper";
import Logo from "../Navbar/Logo/Logo";

import { useNavigate } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

export default function Auth() {
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [auth, setAuth] = useState(false);
        const Authucation = async (e) => {
                setAuth(true);
                e.preventDefault();
                const user = {
                        email: email,
                        password: password,
                };
                const { status } = await axios.post(`https://reqres.in/api/users`, JSON.stringify(user));

                setAuth(true);

                if (status == 201) {
                        toast.success("User is Log IN", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                        });
                        navigate("/home");
                } else {
                        toast.error("There is Problem", {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                        });
                }
                setEmail("");
                setPassword("");
        };
        return (
                <Wrapper>
                        <div className="auth">
                                <div className="form">
                                        <Logo />
                                        <form onSubmit={(e) => e.preventDefault()}>
                                                <div className="email-input">
                                                        <label id="Email">Email:</label>

                                                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="pass-input">
                                                        <label id="password">Password:</label>
                                                        <input value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <button type="submit" className={auth ? `isLoding` : null} onClick={(e) => Authucation(e)}>
                                                        Log in
                                                </button>
                                        </form>
                                </div>
                        </div>
                </Wrapper>
        );
}
