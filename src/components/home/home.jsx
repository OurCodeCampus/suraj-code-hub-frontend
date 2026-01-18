import { Link } from "react-router-dom";
import DashboardFooter from "../DashboardFooter";

export default function Home() {
    return (
        <div className="dashboard-page-child-container">
            <div className="dashboard-page-child-aside-container">
                <form className="dashboard-page-child-aside-form">
                    <div className="dashboard-page-child-form-control">
                        <div>
                            <h3>Top repositories</h3>
                            <Link to={"/createrepo"} className="dashboard-page-child-btn">
                                <i class="fa-solid fa-network-wired"></i>
                                <p>New</p>
                            </Link>
                        </div>
                        <input type="text" placeholder="Find repository..." autoComplete="off" />
                    </div>

                    <ul className="dashboard-page-child-home-repository-container">
                        <Link to="#" className="dashboard-page-child-home-repository-link">
                            <p>OurCodeCampus/roomble-app</p>
                        </Link>

                        <Link to="#" className="dashboard-page-child-home-repository-link">
                            <p>OurCodeCampus/real-time-chat-app</p>
                        </Link>

                        <Link to="#" className="dashboard-page-child-home-repository-link">
                            <p>OurCodeCampus/chat-app-with-mongoose</p>
                        </Link>

                        <Link to="#" className="dashboard-page-child-home-repository-link">
                            <p>OurCodeCampus/todo-list-with-react-app</p>
                        </Link>
                    </ul>
                </form>
            </div>

            <main className="dashboard-page-child-main-container">
                <div className="dashboard-page-child-home-video-container">
                    <video
                        src="/media/video/coding.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="dashboard-home-video"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>

                <DashboardFooter />
            </main>
        </div>
    )
}