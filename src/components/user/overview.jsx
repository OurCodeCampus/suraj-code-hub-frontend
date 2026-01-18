import { Link } from "react-router-dom"
import OverviewRepoCard from "./OverviewRepoCard"
import RepoContributionGraph from "./RepoContributionGraph"

export default function ProfileOverview() {

    const repoList = [
        {
            title: "Food-Corporaton-Website-With-Responsive",
            visibility: "Public",
            description: "Food corporation website responsive designing using html 5 and css 3."
        },
        {
            title: "Chat-app-with-mongoose",
            visibility: "Public",
            description: "The first chat app with mongodb and operation like (create chat, edit, delete and update)."
        },
        {
            title: "roomble-app",
            visibility: "Public",
            description: "A full-stack Node.js web application using Express, EJS, and MongoDB with Cloudinary integration for image uploads and Passport.js for secure user authentication. Perfect for dynamic travel listing…"
        },
        {
            title: "todo-list-with-app",
            visibility: "Public",
            description: "This best handle with hooks and event handler and components."
        },
    ]

    return (
        <div className="profile-overview-container">
            <OverviewRepoCard repoList={repoList} />
            <RepoContributionGraph />
        </div>
    )
}