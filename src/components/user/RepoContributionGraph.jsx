import HeatMapProfile from "./HeatMap"
export default function RepoContributionGraph() {

    return (
        <div className="profile-repo-contribution-graph">
            <div className="repo-contributions-graph">
                <p>{18} contributions in the last year</p>
                <div className="contributions-graph">
                    <HeatMapProfile />
                </div>

                <div className="contributions-activity-container">
                    <p className="contributions-activity-heading">Contribution activity</p>
                    <div>
                        <p>January {2026}</p>
                        <hr />
                    </div>
                    <ul className="contributions-activity-list">
                        <p>OurCodeCampus has no activity yet for this period.</p>
                    </ul>
                    <button className="contributions-activity-show-more-btn">Show more activity</button>
                    <p className="contributions-down-mess">Seeing something unexpected? Take a look at the GitHub profile guide.</p>
                </div>
            </div>
            <ul className="repo-contribution-years-list">
                <li className="repo-contribution-years-item">2026</li>
                <li className="repo-contribution-years-item">2025</li>
                <li className="repo-contribution-years-item">2024</li>
                <li className="repo-contribution-years-item">2023</li>
            </ul>
        </div>
    )
}