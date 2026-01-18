import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../authContext";

export default function Login() {
    const navigate = useNavigate();


    const { currentUser, setCurrentUser } = useAuth();

    const [users, setUsers] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (currentUser) {
            navigate("/", { replace: true });
        }
    }, [currentUser, navigate]);

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

            const res = await axios.post(
                "http://localhost:5000/api/user/login",
                users
            );

            const { token, userId } = res.data;

            localStorage.setItem("token", token);
            localStorage.setItem("userId", userId);

            setCurrentUser(userId);

            navigate("/", { replace: true });
        } catch (err) {
            console.error(err);
            alert("Login failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-logo-container">
                <img src="/media/images/CodeHub.svg" alt="logo" />
                <h3 className="login-title">Log in to SurajCodeHub</h3>
            </div>

            <form onSubmit={handleSubmitForm} className="login-form">
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

                <div className="login-btn-container">
                    <button className="login-btn btn" disabled={loading}>
                        {loading ? "Loading..." : "Log in"}
                    </button>
                </div>
            </form>

            <div className="login-divide-btn">
                <span></span>
                <p>or</p>
                <span></span>
            </div>

            <div className="signup-redirect-btn-container">
                <p>New to GitHub?</p>
                <Link to="/signup" className="redirect-link">
                    Create an account
                </Link>
            </div>
        </div>
    );
}
