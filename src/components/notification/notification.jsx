
import { Link, Outlet } from "react-router-dom";


export default function Notification() {
    return (
        <div className="dashboard-page-child-container">
            <div className="dashboard-page-child-aside-container">
                <ul className="dashboard-page-child-aside-list">
                    <Link to="/notification" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-inbox"></i>
                        <p>Inbox</p>
                    </Link>
                    <Link to="saved" className="dashboard-page-child-aside-list-item">
                        <i class="fa-regular fa-bookmark"></i>
                        <p>Saved</p>
                    </Link>
                    <Link to="done" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-check"></i>
                        <p>Done</p>
                    </Link>
                </ul>
            </div>

            <main className="dashboard-page-child-main-container">
                <Outlet />
            </main>
        </div>
    )
}


