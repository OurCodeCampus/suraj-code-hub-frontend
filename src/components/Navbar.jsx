import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../authContext";
export default function Navbar() {

    const navigate = useNavigate();
    const { setCurrentUser } = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);
    const handleMenuExtend = () => {
        setMenuOpen(true);
    }


    const handleMenuCollapse = () => {
        setMenuOpen(false);

    }


    return (
        <header className="header">
            <div className="navbar-container">
                <div className="navbar-left-side">
                    <div className="menu-bar-container">
                        <button className="nav-menu-btn navbar-utility-square-btn" onClick={handleMenuExtend}>
                            <i class="fa-solid fa-bars"></i>
                        </button>

                        <div className={`nav-aside-menu-bar ${menuOpen ? "menuOpenClass" : ""}`}>
                            <div className="nav-aside-menu-logo-bar">
                                <img src="/media/images/CodeHub.svg" alt="logo" />
                                <button onClick={handleMenuCollapse} className="nav-aside-menu-close-btn navbar-utility-square-btn">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <div className="nav-aside-link-container">
                                <Link to="/" className="navbar-sub-menu-link">
                                    <i class="fa-regular fa-house"></i>
                                    <p>Home</p>
                                </Link>
                                <Link to="/issue" className="navbar-sub-menu-link">
                                    <i class="fa-regular fa-circle-dot"></i>
                                    <p>Issues</p>
                                </Link>

                                <Link to="/pull" className="navbar-sub-menu-link">
                                    <i class="fa-solid fa-code-pull-request"></i>
                                    <p>Pull requests</p>
                                </Link>
                                <Link to="/repository" className="navbar-sub-menu-link">
                                    <i class="fa-solid fa-network-wired"></i>
                                    <p>Repositories</p>
                                </Link>
                                <Link to="#" className="navbar-sub-menu-link">
                                    <i class="fa-regular fa-square-full"></i>
                                    <p>Project</p>
                                </Link>
                                <Link to="#" className="navbar-sub-menu-link">
                                    <i class="fa-regular fa-comments"></i>
                                    <p>Discussions</p>
                                </Link>
                                <Link to="#" className="navbar-sub-menu-link">
                                    <i class="fa-solid fa-laptop-code"></i>
                                    <p>Codespaces</p>
                                </Link>

                                <hr className="divider-line" />
                                <Link to="#" className="navbar-sub-menu-link">
                                    <i class="fa-solid fa-network-wired"></i>
                                    <p>Explore</p>
                                </Link>
                                <Link to="#" className="navbar-sub-menu-link">
                                    <i class="fa-solid fa-wrench"></i>
                                    <p>Marketplace</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/" className="nav-logo-bar-link">
                        <img src="/media/images/CodeHub.svg" alt="logo" />
                        <p>Dashboard</p>
                    </Link>
                </div>
                <div className="navbar-right-side">
                    <div className="nav-search-bar-container">
                        <div className="nav-search-bar navbar-utility-square-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Type to search..." name="search-bar" id="search-bar" autoComplete="off" />
                        </div>
                    </div>

                    <div className="nav-create-container">
                        <button className="nav-create-btn navbar-utility-square-btn">
                            <i class="fa-solid fa-plus"></i>
                            <i class="fa-solid fa-caret-down"></i>
                        </button>

                        <div className="create-sub-menu-drop-down navbar-sub-menu">
                            <Link to="/issue" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-circle-dot"></i>
                                <p>New issue</p>
                            </Link>
                            <Link to="/repository" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-network-wired"></i>
                                <p>New repository</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-file-import"></i>
                                <p>Import repository</p>
                            </Link>
                            <hr className="divider-line" />
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-laptop-code"></i>
                                <p>New codespace</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-code-commit"></i>
                                <p>New git</p>
                            </Link>
                            <hr className="divider-line" />
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-building"></i>
                                <p>New organization</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-square-full"></i>
                                <p>New project</p>
                            </Link>
                        </div>
                    </div>

                    <div className="issue-container">
                        <Link to="/issue" className="nav-issue-btn navbar-utility-square-btn">
                            <i class="fa-regular fa-circle-dot"></i>
                        </Link>
                    </div>

                    <div className="nav-pull-request-container">
                        <Link to="/pull" className="nav-pull-request-btn navbar-utility-square-btn">
                            <i class="fa-solid fa-code-pull-request"></i>
                        </Link>
                    </div>

                    <div className="nav-repositories-container">
                        <Link to="/repository" className="nav-repositories-btn navbar-utility-square-btn">
                            <i class="fa-solid fa-network-wired"></i>
                        </Link>
                    </div>

                    <div className="nav-notification-container">
                        <Link to="/notification" className="nav-notification-btn navbar-utility-square-btn">
                            <i class="fa-solid fa-inbox"></i>
                        </Link>
                    </div>

                    <div className="nav-profile-container">
                        <button className="nav-profile-btn navbar-utility-circle-btn">
                            <i class="fa-solid fa-user"></i>
                        </button>

                        <div className="profile-sub-menu-drop-down navbar-sub-menu">
                            <div className="nav-profile">
                                <span>
                                    <i class="fa-regular fa-circle-user"></i>
                                </span>
                                <div>
                                    <h5>OurCodeCampus</h5>
                                    <p>Suraj Kumar</p>
                                </div>
                            </div>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-face-frown"></i>
                                <p>Set status</p>
                            </Link>
                            <hr className="divider-line" />
                            <Link to="/profile" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-user"></i>
                                <p>Profile</p>
                            </Link>
                            <Link to="/repository" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-network-wired"></i>
                                <p>Repository</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-star"></i>
                                <p>Stars</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-code-commit"></i>
                                <p>Gists</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-building"></i>
                                <p>Organizations</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-globe"></i>
                                <p>Enterprises</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-regular fa-heart"></i>
                                <p>Sponsors</p>
                            </Link>
                            <hr className="divider-line" />
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-gear"></i>
                                <p>Settings</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-flask"></i>
                                <p>Feature preview</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-paintbrush"></i>
                                <p>Appearance</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-child-reaching"></i>
                                <p>Accessibility</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link">
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                <p>Try Enterprise</p>
                            </Link>
                            <Link to="#" className="navbar-sub-menu-link"
                                onClick={() => {
                                    localStorage.removeItem("token")
                                    localStorage.removeItem("userId")
                                    setCurrentUser(null)
                                    navigate("/login")
                                }}
                            >
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                <p>Sign out</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </header >
    )
}