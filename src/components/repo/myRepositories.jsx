import DashboardFooter from "../DashboardFooter";
import { Link } from "react-router-dom";
export default function MyRepository() {
    return (
        <main className="dashboard-page-child-main-container">
            <form className="dashboard-page-child-form">
                <div className="dashboard-page-child-form-control">
                    <div className="form-btn-container">
                        <h3>My repositories</h3>
                        <div>
                            <span>Preview</span>
                            <Link to="/createrepo" className="dashboard-page-child-btn">
                                <p>New repository</p>
                            </Link>
                        </div>
                    </div>
                    <div className="issue-page-input-assigned-me-box">
                        <p>owner:<span>@me</span></p>
                        <input type="type" autoComplete="off" />
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                </div>

                <div className="assigned-page-issue-result">
                    <p>0 repositories</p>
                    <div>
                        <h2>No result</h2>
                        <p>Try adjustment your search filters.</p>
                    </div>
                </div>

            </form>
            <DashboardFooter />
        </main>
    )
}