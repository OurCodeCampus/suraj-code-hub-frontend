import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../authContext";

export default function Signup() {
    const navigate = useNavigate();
    const { setCurrentUser } = useAuth();

    const [users, setUsers] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);


    const handleForm = (e) => {
        const { name, value } = e.target;
        setUsers((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitForm = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await axios.post("http://localhost:5000/api/user/signup", users, { headers: { "Content-Type": "application/json" } });

            const { token, userId } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            setCurrentUser(userId);

            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Signup Failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-logo-container">
                <img src="/media/images/CodeHub.svg" alt="logo" />
                <h3 className="signup-title">Sign up to SurajCodeHub</h3>
            </div>

            <form onSubmit={handleSubmitForm} className="signup-form">
                <div className="form-control">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={users.username}
                        onChange={handleForm}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={users.email}
                        onChange={handleForm}
                        required
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={users.password}
                        onChange={handleForm}
                        required
                    />
                </div>

                <div className="signup-btn-container">
                    <button className="signup-btn btn" disabled={loading}>
                        {loading ? "Loading..." : "Sign up"}
                    </button>
                </div>
            </form>

            <div className="signup-divide-btn">
                <span></span>
                <p>or</p>
                <span></span>
            </div>

            <div className="login-redirect-btn-container">
                <p>Already have an account?</p>
                <Link to="/login" className="redirect-link">
                    Login
                </Link>
            </div>
        </div>
    );
}
