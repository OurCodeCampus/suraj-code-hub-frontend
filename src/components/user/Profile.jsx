import { Link, Outlet } from "react-router-dom";
import ProfileNavbar from "./ProfileNavbar";
import DashboardFooter from "../DashboardFooter";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
    const [userDetails, setUserDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserDetails = async () => {
            const userId = localStorage.getItem("userId");
            if (!userId) {
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get(
                    `http://localhost:5000/api/user/userProfile/${userId}`
                );
                setUserDetails(response.data);
            } catch (err) {
                console.error("Cannot fetch user details:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    return (
        <>
            <ProfileNavbar />

            <div className="dashboard-page-child-profile-container">
                <div className="profile-child-page-container">
                    <div className="profile-page-user-photo-container">
                        <span className="profile-page-user-photo">
                            {userDetails?.user?.username?.charAt(0) || "U"}
                        </span>
                    </div>

                    <div className="profile-page-details-container">
                        {loading && <p>Loading profile...</p>}

                        {!loading && userDetails && (
                            <>
                                <h2 className="user-profile-name">
                                    {userDetails.user.username}
                                </h2>

                                <p className="user-profile-channel-name">
                                    OurCodeCampus · he/him
                                </p>

                                <p className="user-profile-professions-description">
                                    I'm Intermediate DevOps Engineer and Data Scientist.
                                </p>

                                <button className="user-profile-edit-btn">
                                    Edit profile
                                </button>

                                <div className="user-profile-followers">
                                    <i className="fa-solid fa-users"></i>
                                    <p>
                                        <Link to="#">
                                            <b>1</b> follower
                                        </Link>
                                        {" · "}
                                        <Link to="#">
                                            <b>1</b> following
                                        </Link>
                                    </p>
                                </div>

                                <div className="user-profile-social-link">
                                    <i className="fa-solid fa-location-dot"></i>
                                    <p>Arah, Bihar (India) - 802207</p>
                                </div>

                                <div className="user-profile-social-link">
                                    <i className="fa-solid fa-link"></i>
                                    <Link to="#">www.surajcodelibrary.com</Link>
                                </div>

                                <div className="user-profile-social-link">
                                    <i className="fa-brands fa-square-facebook"></i>
                                    <Link to="#">microdelvoplusesks9835</Link>
                                </div>

                                <div className="user-profile-social-link">
                                    <i className="fa-brands fa-instagram"></i>
                                    <Link to="#">suraj_code_library</Link>
                                </div>

                                <div className="user-profile-social-link">
                                    <i className="fa-brands fa-x-twitter"></i>
                                    <Link to="#">@SurajKu1640info</Link>
                                </div>

                                <div className="user-profile-social-link">
                                    <i className="fa-brands fa-youtube"></i>
                                    <Link to="#">
                                        channel/UCLxHhhZ52bD4ydhQFl63peg7
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <Outlet />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem"
                }}
            >
                <DashboardFooter />
            </div>
        </>
    );
}
