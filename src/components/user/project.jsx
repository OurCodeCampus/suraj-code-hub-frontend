import { Link } from "react-router-dom";

export default function ProfileProject() {
    return (
        <section className="profile-project-section-container">
            <div className="profile-project-section-card">
                <i class="fa-regular fa-square"></i>
                <h2 className="profile-project-section-heading">
                    Create your first SurajCodeHub project
                </h2>
                <p className="profile-project-section-description">
                    Projects are a customizable, flexible tool for planning and tracking your work
                </p>
                <Link to={"#"} className="profile-project-section-link-btn">New project</Link>
            </div>
        </section>
    )
}