import { Link, Outlet } from "react-router-dom";
export default function Repository() {
    return (
        <div className="dashboard-page-child-container">
            <div className="dashboard-page-child-aside-container">
                <ul className="dashboard-page-child-aside-list">
                    <Link to="" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-user-group"></i>
                        <p>My contributions</p>
                    </Link>
                    <Link to="myrepository" className="dashboard-page-child-aside-list-item">
                        <i class="fa-regular fa-user"></i>
                        <p>My repositories</p>
                    </Link>
                    <Link to="myforks" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-code-fork"></i>
                        <p>My forks</p>
                    </Link>
                    <Link to="admibablebyme" className="dashboard-page-child-aside-list-item">
                        <i class="fa-solid fa-gear"></i>
                        <p>Adminable by me</p>
                    </Link>
                </ul>
            </div>

            <Outlet />
        </div>
    )
}


