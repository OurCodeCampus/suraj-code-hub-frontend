
import { Link } from "react-router-dom"
export default function OverviewRepoCard({ repoList }) {



    return (
        <>
            <div className="profile-overview-repo-header">
                <div className="profile-overview-heading">Pinned</div>
                <button className="profile-overview-customize-repo-btn">Customize your pins</button>
            </div>
            <ul className="profile-overview-repo-card-container">
                {
                    repoList.map((curRepo, idx) => {
                        return (
                            <li className="profile-overview-repo-card" key={idx}>
                                <div className="profile-overview-repo-title">
                                    <i class="fa-solid fa-network-wired"></i>
                                    <Link to="#" className="profile-overview-repo-link">{curRepo.title}</Link>
                                    <span><b>{curRepo.visibility}</b></span>
                                </div>
                                <p className="profile-overview-repo-description">{curRepo.description}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}