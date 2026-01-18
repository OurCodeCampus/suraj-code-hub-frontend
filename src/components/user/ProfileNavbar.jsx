import { Link } from "react-router-dom";

export default function ProfileNavbar() {
    return (
        <div className="profile-navbar-container">
            <ul className="profile-navbar-list">
                <Link to="" className="profile-navbar-link">
                    <i class="fa-solid fa-book-open"></i>
                    <p>Overview</p>
                </Link>

                <Link to="repositories" className="profile-navbar-link">
                    <i class="fa-solid fa-network-wired"></i>
                    <p>Repositories {0}</p>
                </Link>
                <Link to="projects" className="profile-navbar-link">
                    <i class="fa-regular fa-square"></i>
                    <p>Projects</p>
                </Link>
                <Link to="packages" className="profile-navbar-link">
                    <i class="fa-solid fa-cubes"></i>
                    <p>Packages</p>
                </Link>
                <Link to="stars" className="profile-navbar-link">
                    <i class="fa-regular fa-star"></i>
                    <p>Stars {0}</p>
                </Link>
            </ul>
        </div>
    )
}