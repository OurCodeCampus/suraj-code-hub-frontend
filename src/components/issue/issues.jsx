import { Link, Outlet } from "react-router-dom";
import DashboardFooter from "../DashboardFooter";

export default function Issues() {
    return (
        <div className="dashboard-page-child-container">
            <div className="dashboard-page-child-aside-container">
                <ul className="dashboard-page-child-aside-list">
                    <Link to="/issue" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-user-group"></i>
                        <p>Assigned to me</p>
                    </Link>
                    <Link to="createdByMe" className="dashboard-page-child-aside-list-item">
                        <i class="fa-regular fa-face-smile"></i>
                        <p>Create by me</p>
                    </Link>
                    <Link to="mentioned" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-at"></i>
                        <p>Mentioned</p>
                    </Link>
                    <Link to="recentActivity" className="dashboard-page-child-aside-list-item">
                        <i class="fa-regular fa-clock"></i>
                        <p>Recent activity</p>
                    </Link>
                </ul>
            </div>

            <main className="dashboard-page-child-main-container">
                <Outlet />
                <DashboardFooter />

            </main>
        </div>
    )
}


