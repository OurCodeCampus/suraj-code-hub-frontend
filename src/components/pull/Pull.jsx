import { Link } from "react-router-dom";
import DashboardFooter from "../DashboardFooter";

export default function Pull() {
    return (
        <div className="dashboard-page-child-pull-container">
            <form className="dashboard-page-child-pull-forms">
                <div className="dashboard-page-child-pull-btn">
                    <button>Created</button>
                    <button>Assigned</button>
                    <button>Mentioned</button>
                    <button>Review requests</button>
                </div>

                <div className="dashboard-page-child-pull-input-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="pull-search-bar" autoComplete="off" />
                </div>
            </form>

            <div className="dashboard-page-child-pull-result-container">
                <div className="dashboard-page-child-pull-result-action-link">
                    <div>
                        <i class="fa-solid fa-code-pull-request"></i>
                        <p><b>0 Open</b></p>
                        <i class="fa-solid fa-check"></i>
                        <p>0 Open</p>
                    </div>
                    <ul>
                        <Link to="#">
                            <p>Visibility</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </Link>
                        <Link to="#">
                            <p>Organization</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </Link>
                        <Link to="#">
                            <p>Sort</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </Link>
                    </ul>
                </div>

                <div className="dashboard-page-child-pull-result-box">
                    <i class="fa-regular fa-circle-dot"></i>
                    <h2>No results matched your search.</h2>
                    <p>You could search of GitHub or try an advanced search.</p>
                </div>
            </div>
            <p className="noti-down-content-text">
                <i class="fa-regular fa-lightbulb"></i>
                <h3>ProTip!</h3>
                <p>Exclude everything labeled <span>bug</span> with <i><u>-label:bug.</u></i></p>
            </p>

            <DashboardFooter />
        </div>
    )
}